import { NextResponse } from 'next/server';
import { db } from '@/utils/db$';

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    const post = await db.post.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
