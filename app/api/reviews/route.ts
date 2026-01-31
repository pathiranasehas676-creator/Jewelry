import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Review submitted' }, { status: 201 });
}

export async function PATCH() {
  return NextResponse.json({ message: 'Review moderated' });
}
