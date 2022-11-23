import { ChangeEvent, Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { useModal } from '../../hooks/useModal';
import { useProduct } from '../../hooks/useProduct';

export const ProductModal = () => {
  const { isModalOpen, setIsModalOpen, action } = useModal();

  const {
    createProduct,
    updateProduct,
    deleteProduct,
    currentProductId,
    currentProductName,
    setCurrentProductName,
  } = useProduct();

  function handleChangeProduct(event: ChangeEvent<HTMLInputElement>) {
    setCurrentProductName(event.target.value);
  }

  async function handleCreateProduct() {
    await createProduct(currentProductName);

    setIsModalOpen(false);
  }

  async function handleUpdateProduct() {
    await updateProduct(currentProductId, currentProductName);

    setIsModalOpen(false);
  }

  async function handleDeleteProduct() {
    await deleteProduct(currentProductId);

    setIsModalOpen(false);
  }

  function isCreateProductAction() {
    return action === 'CREATE';
  }

  function isUpdateProductAction() {
    return action === 'UPDATE';
  }

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsModalOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {isCreateProductAction() && (
                          <span>Cadastra produto</span>
                        )}

                        {isUpdateProductAction() && (
                          <span>Atualizar produto</span>
                        )}
                      </Dialog.Title>

                      <div className="mt-5">
                        <label
                          htmlFor="product-name"
                          className="block text-sm font-medium text-gray-700 mb-5"
                        >
                          Nome do produto
                        </label>

                        <input
                          type="text"
                          value={currentProductName}
                          onChange={handleChangeProduct}
                          name="product-name"
                          id="product-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 flex justify-between flex-col-reverse sm:flex-row sm:px-6">
                  <div>
                    {isUpdateProductAction() && (
                      <button
                        type="button"
                        className="mt-3 bg-red-500 text-white inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-base font-medium shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleDeleteProduct}
                      >
                        Deletar
                      </button>
                    )}
                  </div>

                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={
                        isCreateProductAction()
                          ? handleCreateProduct
                          : handleUpdateProduct
                      }
                    >
                      {isCreateProductAction() && <span>Cadastrar</span>}

                      {isUpdateProductAction() && <span>Atualizar</span>}
                    </button>

                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
