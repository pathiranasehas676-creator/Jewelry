import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ items: [], message: 'Cart placeholder' });
}

export async function POST() {
  return NextResponse.json({ message: 'Cart item added' }, { status: 201 });
}

export async function PATCH() {
  return NextResponse.json({ message: 'Cart updated' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Cart item removed' });
}
