import ReactBarcode from 'react-barcode';

import { PlusIcon, PencilIcon } from '@heroicons/react/20/solid';

export const ProductTable = () => {
  function generateBarcode() {
    return Math.floor(100000000 + Math.random() * 900000000);
  }

  const products = [
    {
      id: '1212332',
      name: 'Product',
      stock: '20',
      barcode: generateBarcode(),
    },
    {
      id: '8097989',
      name: 'Product 2',
      stock: '18',
      barcode: generateBarcode(),
    },
    {
      id: '676876687',
      name: 'Product 3',
      stock: '67',
      barcode: generateBarcode(),
    },
    {
      id: '9784578',
      name: 'Product 4',
      stock: '90',
      barcode: generateBarcode(),
    },
    {
      id: '9809789',
      name: 'Product 5',
      stock: '37',
      barcode: generateBarcode(),
    },
  ];

  return (
    <div className="w-full mb-12 px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center justify-between">
            <div className="relative px-4">
              <h3 className="font-semibold text-lg text-blueGray-700">
                Produtos
              </h3>
            </div>

            <div className="relative px-4 text-right">
              <button
                className="flex items-center bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <PlusIcon className="h-4 w-4" aria-hidden="true" />

                <span>Novo</span>
              </button>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Nome
                </th>

                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Estoque
                </th>

                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Barcode
                </th>

                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100" />
              </tr>
            </thead>

            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/3">
                    {product.name}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/3">
                    {product.stock}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/3">
                    <ReactBarcode
                      value={product.barcode}
                      height={20}
                      width={1}
                      fontSize={10}
                    />
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <PencilIcon className="h-4 w-4" aria-hidden="true" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
