import { NextResponse } from 'next/server';
import { products } from '../../lib/data';

export async function GET() {
  return NextResponse.json({ data: products });
}

export async function POST() {
  return NextResponse.json({ message: 'Admin product create placeholder' }, { status: 201 });
}
