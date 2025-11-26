import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { sql } from 'drizzle-orm';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const db = getDb();
    // Simple query to test connection
    const result = await db.execute(sql`SELECT NOW()`);
    
    return NextResponse.json({ 
      status: 'success', 
      message: 'Database connection successful',
      result
    });
  } catch (error) {
    console.error('Database connection check failed:', error);
    return NextResponse.json({ 
      status: 'error', 
      message: 'Database connection failed', 
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

