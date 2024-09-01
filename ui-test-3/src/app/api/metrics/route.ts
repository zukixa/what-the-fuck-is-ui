import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://metrics.xyzbot.net/metrics', {
      next: { revalidate: 60 }, 
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch metrics');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching metrics:', error);
    return NextResponse.json({ error: 'Failed to fetch metrics' }, { status: 500 });
  }
}