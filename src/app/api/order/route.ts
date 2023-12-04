// pages/api/users/create.js
import { prisma } from '../../db'
import { json } from '../../lib/json';

export async function POST(req: Request) {
  const data = await req.json();

  try {
    // Create the user in the database
    const user = await prisma.ticket.create({
      data,
    });

    return new Response(json({ user, status: 201 }))
  } catch (error) {
    console.error(error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }));
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get('page');
  const pageSize = searchParams.get('pageSize');
  const userId = searchParams.get('userId');

  const parsedPage = page ? parseInt(page, 10) : 1;
  const parsedPageSize = pageSize ? parseInt(pageSize, 10) : 8;
  const parsedUserId = userId ? parseInt(userId, 10) : 0;
  const offset = (parsedPage - 1) * parsedPageSize;

  // 3. Dapatkan data pengguna dari basis data berdasarkan ID
  let userData;
  try {
    userData = await prisma.user.findUnique({
      where: {
        id: parsedUserId,
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(json({ message: 'Error retrieving user data', status: 500 }));
  }

  // 4. Periksa apakah role yang ditemukan adalah "admin"
  if (!userData) {
    return new Response(json({ message: 'Unauthorized', status: 403 }));
  }

  try {
    const tickets = await prisma.ticket.findMany({
      take: parsedPageSize,
      skip: offset,
    });

    const totalArticles = await prisma.ticket.count();

    const isLastData = (parsedPage * parsedPageSize) >= totalArticles;

    return new Response(json({
      data: tickets,
      pageInfo: {
        currentPage: parsedPage,
        pageSize: parsedPageSize,
        totalItems: totalArticles,
        isLastData,
      },
      status: 200
    }));
  } catch (error) {
    console.error(error);
    return new Response(json({ error: 'Internal Server Error', status: 500 }));
  } finally {
    await prisma.$disconnect();
  }
};