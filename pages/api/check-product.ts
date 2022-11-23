import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handleCheckIfProductExists(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const productBarcode: string | string[] = request.query.barcode
    ? request.query.barcode
    : '';

  const productExist = await prisma.product.findUnique({
    where: {
      barcode: String(productBarcode),
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
