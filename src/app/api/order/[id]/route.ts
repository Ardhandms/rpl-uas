import { prisma } from "@/app/db";
import { json } from "@/app/lib/json";

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/');
    const id = parseInt(pathSegments[pathSegments.length - 1], 10);

    if (isNaN(id)) {
      return new Response(json({ message: 'Invalid article ID', status: 400 }), { status: 400 });
    }

    const ticket = await prisma.ticket.delete({
      where: { id },
    });

    if (!ticket) {
      return new Response(json({ message: 'ticket not found', status: 404 }), { status: 404 });
    }

    const responseData = {
      data: {
        ...ticket,
      },
      status: 200
    };

    return new Response(json(responseData));
  } catch (error) {
    console.error('Error:', error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }), { status: 500 });
  }
}