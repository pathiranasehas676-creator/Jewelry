const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const sampleProducts = [
  { title: 'Solstice Diamond Ring', slug: 'solstice-diamond-ring', price: 4200, category: 'Rings' },
  { title: 'Orbit Sapphire Necklace', slug: 'orbit-sapphire-necklace', price: 3800, category: 'Necklaces' },
  { title: 'Lumen Pearl Earrings', slug: 'lumen-pearl-earrings', price: 2100, category: 'Earrings' },
  { title: 'Nova Gold Bracelet', slug: 'nova-gold-bracelet', price: 2600, category: 'Bracelets' },
  { title: 'Aether Bridal Set', slug: 'aether-bridal-set', price: 7800, category: 'Bridal Sets' },
  { title: 'Halo Rose Ring', slug: 'halo-rose-ring', price: 3200, category: 'Rings' },
  { title: 'Comet Drop Earrings', slug: 'comet-drop-earrings', price: 2500, category: 'Earrings' },
  { title: 'Aurora Tennis Bracelet', slug: 'aurora-tennis-bracelet', price: 5200, category: 'Bracelets' },
  { title: 'Stellar Pendant Necklace', slug: 'stellar-pendant-necklace', price: 3100, category: 'Necklaces' },
  { title: 'Eclipse Band Ring', slug: 'eclipse-band-ring', price: 2900, category: 'Rings' },
  { title: 'Celeste Choker', slug: 'celeste-choker', price: 3400, category: 'Necklaces' },
  { title: 'Opal Aura Earrings', slug: 'opal-aura-earrings', price: 2300, category: 'Earrings' },
  { title: 'Gilded Orbit Bracelet', slug: 'gilded-orbit-bracelet', price: 2700, category: 'Bracelets' },
  { title: 'Vowline Bridal Set', slug: 'vowline-bridal-set', price: 8200, category: 'Bridal Sets' },
  { title: 'Nebula Signet Ring', slug: 'nebula-signet-ring', price: 3600, category: 'Rings' },
  { title: 'Velvet Cascade Necklace', slug: 'velvet-cascade-necklace', price: 4100, category: 'Necklaces' },
  { title: 'Halo Vine Earrings', slug: 'halo-vine-earrings', price: 2400, category: 'Earrings' },
  { title: 'Pulse Gold Bracelet', slug: 'pulse-gold-bracelet', price: 2800, category: 'Bracelets' },
  { title: 'Arcadia Bridal Set', slug: 'arcadia-bridal-set', price: 8600, category: 'Bridal Sets' },
  { title: 'Radiant Line Ring', slug: 'radiant-line-ring', price: 3400, category: 'Rings' }
];

async function main() {
  const categories = ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Bridal Sets'];

  const categoryRecords = await Promise.all(
    categories.map((name) =>
      prisma.category.upsert({
        where: { slug: name.toLowerCase().replace(/\s+/g, '-') },
        update: {},
        create: { name, slug: name.toLowerCase().replace(/\s+/g, '-') }
      })
    )
  );

  for (const product of sampleProducts) {
    const category = categoryRecords.find((record) => record.name === product.category);
    if (!category) continue;
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        title: product.title,
        description: 'Luxury jewelry crafted with ethical stones and precision finishing.',
        price: product.price,
        slug: product.slug,
        categoryId: category.id,
        variants: {
          create: [
            {
              metalType: 'Yellow Gold',
              stoneType: 'Diamond',
              size: '6',
              sku: `${product.slug}-YG-6`,
              stock: 12,
              extraPrice: 0
            },
            {
              metalType: 'Rose Gold',
              stoneType: 'Sapphire',
              size: '7',
              sku: `${product.slug}-RG-7`,
              stock: 5,
              extraPrice: 200
            }
          ]
        },
        media: {
          create: [
            { type: 'image', url: `/images/${product.slug}.jpg` },
            { type: 'model3d', url: '/models/sample-ring.glb' }
          ]
        }
      }
    });
  }

  await prisma.coupon.upsert({
    where: { code: 'AURA10' },
    update: {},
    create: {
      code: 'AURA10',
      type: 'PERCENT',
      value: 10,
      expiry: new Date('2027-01-01'),
      minSpend: 200,
      isActive: true
    }
  });

  await prisma.user.upsert({
    where: { email: 'admin@auragems.test' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@auragems.test',
      passwordHash: 'admin-password-hash',
      role: 'ADMIN'
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
