import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handleGetMovements(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const movements = await prisma.movements.findMany();

  return response.status(200).json({
    data: movements,
  });
}

async function handleCreateMovement(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { productId, type } = request.body;

  const movement = await prisma.movements.create({
    data: {
      date: new Date(),
      productId,
      type,
    },
  });

  return response.json({
    data: movement,
  });
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  if (method === 'GET') {
    return await handleGetMovements(request, response);
  }

  if (method === 'POST') {
    return await handleCreateMovement(request, response);
  }

  return response.status(404).json({ message: 'Route no found.' });
}
