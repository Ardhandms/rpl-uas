// pages/api/users/create.js
import bcrypt from 'bcrypt';
import { prisma } from '../../../db'
import { json } from '../../../lib/json';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return new Response(json({ user, status: 201 }))
  } catch (error) {
    console.error(error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }));
  }
}