import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Order created', orderId: 'AURA-2026-001' }, { status: 201 });
}
