import { NextApiRequest, NextApiResponse } from 'next';

import { Prisma, PrismaClient } from '@prisma/client';

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

  let movements: any = [];

  const initialDate = `${year}-${month}-01`;
  const lastDate = `${year}-${month}-31`;

  if (productId) {
    movements = await prisma.$queryRaw(
      Prisma.sql`
        SELECT SUM(1) 'total', DATE_FORMAT(m.date, '%d') 'day' FROM Movements m
        WHERE m.productId = ${productId}
          AND m.type = ${type}
          AND DATE_FORMAT(m.date, '%Y-%m-%d') BETWEEN ${initialDate} AND ${lastDate}
        GROUP BY DATE(m.date)`,
    );
  } else {
    movements = await prisma.$queryRaw(
      Prisma.sql`
        SELECT SUM(1) 'total', DATE_FORMAT(m.date, '%d') 'day' FROM Movements m
        WHERE m.type = ${type}
          AND DATE_FORMAT(m.date, '%Y-%m-%d') BETWEEN ${initialDate} AND ${lastDate}
        GROUP BY DATE(m.date)`,
    );
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
