import { NextResponse } from 'next/server';
import { products } from '../../../lib/data';

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ data: product });
}

export async function PUT() {
  return NextResponse.json({ message: 'Admin product update placeholder' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Admin product delete placeholder' });
}
