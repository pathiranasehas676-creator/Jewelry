const assert = require('node:assert');
const fs = require('node:fs');

const requiredFiles = [
  'app/page.tsx',
  'app/shop/page.tsx',
  'prisma/schema.prisma',
  'docs/model-pipeline.md'
];

requiredFiles.forEach((file) => {
  assert.ok(fs.existsSync(file), `${file} should exist`);
});

console.log('Project structure tests passed');
