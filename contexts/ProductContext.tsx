import { createContext, ReactNode, useState } from 'react';

import { Product } from '@prisma/client';

import { useCalendar } from '../hooks/useCalendar';
import { useSpinner } from '../hooks/useSpinner';
import { api } from '../services/axios';

type DashboardData = {
  total: string;
  day: string;
};

type ProductContextData = {
  currentProductId: number;
  chartProductId: number;
  chartProductName: string;
  currentProductName: string;
  currentProductStock: string;
  setCurrentProductId: (productId: number) => void;
  setChartProductId: (productId: number) => void;
  setChartProductName: (productId: string) => void;
  setCurrentProductName: (productName: string) => void;
  setCurrentProductStock: (productStock: string) => void;
  products: Product[];
  fetchProducts: () => Promise<void>;
  createProduct: (productName: string) => Promise<void>;
  updateProduct: (
    productId: number,
    productName: string,
    productStock: string,
  ) => Promise<void>;
  deleteProduct: (productId: number) => Promise<void>;
  fetchProductsEntries: () => Promise<DashboardData[]>;
  fetchProductsOutputs: () => Promise<DashboardData[]>;
};

type ProductContextProviderProps = {
  children: ReactNode;
};

export const ProductContext = createContext({} as ProductContextData);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const { setIsSpinnerVisible } = useSpinner();

  const { selectedMonth, selectedYear } = useCalendar();

  const [currentProductId, setCurrentProductId] = useState<number>(0);
  const [currentProductName, setCurrentProductName] = useState('');
  const [currentProductStock, setCurrentProductStock] = useState('');

  const [chartProductId, setChartProductId] = useState<number>(0);
  const [chartProductName, setChartProductName] = useState('Todos');

  const [products, setProducts] = useState<Product[]>([]);

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

  async function updateProduct(
    productId: number,
    productName: string,
    productStock: string,
  ) {
    try {
      setIsSpinnerVisible(true);

      const response = await api.put('/products', {
        productId,
        productName,
        productStock,
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

  async function fetchProductsEntries(): Promise<DashboardData[]> {
    try {
      setIsSpinnerVisible(true);

      const queryParams = `month=${selectedMonth}&year=${selectedYear}&type=ENTRIE${
        chartProductId !== 0 ? `&id=${chartProductId}` : ''
      }`;

      return await api.get(`/dashboard?${queryParams}`);
    } catch (error) {
      console.log(error);

      return [];
    } finally {
      setIsSpinnerVisible(false);
    }
  }

  async function fetchProductsOutputs(): Promise<DashboardData[]> {
    try {
      setIsSpinnerVisible(true);

      const queryParams = `month=${selectedMonth}&year=${selectedYear}&type=OUTPUT${
        chartProductId !== 0 ? `&id=${chartProductId}` : ''
      }`;

      return await api.get(`/dashboard?${queryParams}`);
    } catch (error) {
      console.log(error);

      return [];
    } finally {
      setIsSpinnerVisible(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        currentProductId,
        chartProductId,
        chartProductName,
        currentProductName,
        setCurrentProductId,
        setChartProductId,
        setCurrentProductName,
        setChartProductName,
        currentProductStock,
        setCurrentProductStock,
        products,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct,
        fetchProductsEntries,
        fetchProductsOutputs,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
