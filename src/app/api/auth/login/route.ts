import jwt from 'jsonwebtoken';
import { prisma } from '../../../db';
import bcrypt from 'bcrypt';
import { json } from '../../../lib/json';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(json({ message: 'Invalid credentials', status: 401 }));
    }

    const { password: passwordUser, ...otherUserData } = user;
    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, passwordUser);

    if (!passwordMatch) {
      return new Response(json({ message: 'Invalid credentials', status: 401 }));
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string, {
      expiresIn: '7h', // You can adjust the expiration time as needed
    });

    return new Response(json({
      user: otherUserData,
      token,
      status: 201
    }));
  } catch (error) {
    console.error(error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }));
  }
}