import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function generateBarcodeNumber(): string {
  const max = 10000000;
  const min = 99999999;

  return String(Math.floor(Math.random() * (max - min + 1) + min));
}

async function handleGetProducts(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const products = await prisma.product.findMany();

  return response.status(200).json({
    data: products,
  });
}

async function handleCreateProduct(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { productName } = request.body;

  const product = await prisma.product.create({
    data: {
      name: productName,
      barcode: generateBarcodeNumber(),
      stock: '0',
    },
  });

  return response.json({
    data: product,
  });
}

async function handleDeleteProduct(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const productId: string | string[] = request.query.id ? request.query.id : '';

  const product = await prisma.product.delete({
    where: {
      id: Number(productId),
    },
  });

  return response.json({
    data: product,
  });
}

async function handleUpdateProduct(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { productId, productName, productStock } = request.body;

  const product = await prisma.product.update({
    where: {
      id: Number(productId),
    },
    data: {
      name: String(productName),
      stock: String(productStock),
    },
  });

  return response.json({
    data: product,
  });
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  if (method === 'GET') {
    return await handleGetProducts(request, response);
  }

  if (method === 'POST') {
    return await handleCreateProduct(request, response);
  }

  if (method === 'DELETE') {
    return await handleDeleteProduct(request, response);
  }

  if (method === 'PUT') {
    return await handleUpdateProduct(request, response);
  }

  return response.status(404).json({ message: 'Route no found.' });
}
