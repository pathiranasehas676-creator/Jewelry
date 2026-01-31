import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ valid: true, discount: 10 });
}

export async function PUT() {
  return NextResponse.json({ message: 'Coupon updated' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Coupon removed' });
}
