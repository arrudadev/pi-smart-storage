import { useState } from 'react';

import Link from 'next/link';

import {
  Bars4Icon,
  XMarkIcon,
  ChartBarSquareIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/20/solid';

export const Sidebar = () => {
  const [collapseShow, setCollapseShow] = useState('hidden');

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-100 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
        >
          <Bars4Icon className="h-5 w-5" aria-hidden="true" />
        </button>

        <h1 className="md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
          Smart Storage
        </h1>

        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative" />
        </ul>

        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
        >
          <div className="md:min-w-full md:hidden block">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <h1 className="md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                  Smart Storage
                </h1>
              </div>

              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow('hidden')}
                >
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <hr className="my-4 md:min-w-full" />

          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Admin
          </h6>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center ml-2">
              <Link
                href="/admin/dashboard"
                className="flex items-center text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600"
              >
                <ChartBarSquareIcon
                  className="h-5 w-5 mr-2"
                  aria-hidden="true"
                />

                <span>Dashboard</span>
              </Link>
            </li>

            <li className="items-center ml-2">
              <Link
                href="/"
                className="flex items-center text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
              >
                <ArrowRightOnRectangleIcon
                  className="h-5 w-5 mr-2"
                  aria-hidden="true"
                />

                <span>Sair</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
