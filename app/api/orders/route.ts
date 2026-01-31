import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ orders: [], message: 'Orders placeholder' });
}

export async function PATCH() {
  return NextResponse.json({ message: 'Order status updated' });
}
