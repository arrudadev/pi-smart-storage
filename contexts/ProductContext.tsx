import { createContext, ReactNode, useState } from 'react';

import { Product, Movements } from '@prisma/client';

import { useSpinner } from '../hooks/useSpinner';
import { api } from '../services/axios';

type ProductContextData = {
  currentProductId: number;
  currentProductName: string;
  setCurrentProductId: (productId: number) => void;
  setCurrentProductName: (productName: string) => void;
  products: Product[];
  fetchProducts: () => Promise<void>;
  createProduct: (productName: string) => Promise<void>;
  updateProduct: (productId: number, productName: string) => Promise<void>;
  deleteProduct: (productId: number) => Promise<void>;
  productsEntries: Movements[];
  productsOutputs: Movements[];
  fetchProductsEntries: (productId?: number) => Promise<void>;
  fetchProductsOutputs: (productId?: number) => Promise<void>;
};

type ProductContextProviderProps = {
  children: ReactNode;
};

export const ProductContext = createContext({} as ProductContextData);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const { setIsSpinnerVisible } = useSpinner();

  const [currentProductId, setCurrentProductId] = useState<number>(0);
  const [currentProductName, setCurrentProductName] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [productsEntries, setProductsEntries] = useState<Movements[]>([]);
  const [productsOutputs, setProductsOutputs] = useState<Movements[]>([]);

  async function fetchProducts() {
    try {
      setIsSpinnerVisible(true);

      const response = await api.get('/products');

      const { data } = response.data;

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSpinnerVisible(false);
    }
  }

  async function createProduct(productName: string) {
    try {
      setIsSpinnerVisible(true);

      const response = await api.post('/products', {
        productName,
      });

      if (response.status === 200) {
        await fetchProducts();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSpinnerVisible(false);
    }
  }

  async function updateProduct(productId: number, productName: string) {
    try {
      setIsSpinnerVisible(true);

      const response = await api.put('/products', {
        productId,
        productName,
      });

      if (response.status === 200) {
        await fetchProducts();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSpinnerVisible(false);
    }
  }

  async function deleteProduct(productId: number) {
    try {
      setIsSpinnerVisible(true);

      const response = await api.delete(`/products?id=${productId}`);

      if (response.status === 200) {
        await fetchProducts();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSpinnerVisible(false);
    }
  }

  async function fetchProductsEntries(productId?: number) {
    try {
      const queryParams = `month=11&year=2022&type=ENTRIE${
        productId ? `&id=${productId}` : ''
      }`;

      const response = await api.get(`/dashboard?${queryParams}`);

      const { data } = response.data;

      setProductsEntries(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchProductsOutputs(productId?: number) {
    try {
      const queryParams = `month=11&year=2022&type=OUTPUT${
        productId ? `&id=${productId}` : ''
      }`;

      const response = await api.get(`/dashboard?${queryParams}`);

      const { data } = response.data;

      setProductsOutputs(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        currentProductId,
        currentProductName,
        setCurrentProductId,
        setCurrentProductName,
        products,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct,
        productsEntries,
        productsOutputs,
        fetchProductsEntries,
        fetchProductsOutputs,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
