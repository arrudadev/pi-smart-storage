import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handleCheckIfProductExists(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const productId: string | string[] = request.query.id ? request.query.id : '';

  const productExist = await prisma.product.findUnique({
    where: {
      id: Number(productId),
    },
  });

  return response.status(200).json({
    data: !!productExist,
  });
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  if (method === 'GET') {
    return await handleCheckIfProductExists(request, response);
  }

  return response.status(404).json({ message: 'Route no found.' });
}
