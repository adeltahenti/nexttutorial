import { NextResponse } from 'next/server';
import { db } from '@/utils/db$';

export const GET = async (req) => {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
