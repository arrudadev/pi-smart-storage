import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handleGetDashboard(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const productId: string | string[] = request.query.id ? request.query.id : '';

  const month: string | string[] = request.query.month
    ? request.query.month
    : '';

  const year: string | string[] = request.query.year ? request.query.year : '';

  const type: string | string[] = request.query.type ? request.query.type : '';

  let movements = [];

  if (productId) {
    movements = await prisma.movements.findMany({
      where: {
        productId: Number(productId),
        type: String(type),
        date: {
          lte: new Date(`${year}-${month}-31`),
          gte: new Date(`${year}-${month}-01`),
        },
      },
    });
  } else {
    movements = await prisma.movements.findMany({
      where: {
        type: String(type),
        date: {
          lte: new Date(`${year}-${month}-31`),
          gte: new Date(`${year}-${month}-01`),
        },
      },
    });
  }

  return response.status(200).json({
    data: movements,
  });
}
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  if (method === 'GET') {
    return await handleGetDashboard(request, response);
  }

  return response.status(404).json({ message: 'Route no found.' });
}
