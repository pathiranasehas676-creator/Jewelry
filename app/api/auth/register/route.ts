import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Registration placeholder' }, { status: 201 });
}
