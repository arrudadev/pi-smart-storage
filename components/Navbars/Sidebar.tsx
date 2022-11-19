import { useState } from 'react';

// import Link from 'next/link';
import { useRouter } from 'next/router';

export const Sidebar = () => {
  const [collapseShow, setCollapseShow] = useState('hidden');
  const router = useRouter();
  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-100 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
        >
          =
        </button>
        {/* Brand */}
        {/* <Link href="/"> */}
        <a
          href="#pablo"
          className="md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        >
          Smart Storage
        </a>
        {/* </Link> */}
        {/* User */}
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            {/* <NotificationDropdown /> */}
          </li>
          <li className="inline-block relative">{/* <UserDropdown /> */}</li>
        </ul>
        {/* Collapse */}
        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                {/* <Link href="/"> */}
                <a
                  href="#pablo"
                  className="md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                >
                  Smart Storage
                </a>
                {/* </Link> */}
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow('hidden')}
                >
                  X
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          {/* Heading */}
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Admin
          </h6>
          {/* Navigation */}

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              {/* <Link href="/admin/dashboard"> */}
              <a
                href="#pablo"
                className={`text-xs uppercase py-3 font-bold block ${
                  router.pathname.indexOf('/admin/dashboard') !== -1
                    ? 'text-lightBlue-500 hover:text-lightBlue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
                }`}
              >
                <i
                  className={`fas fa-tv mr-2 text-sm ${
                    router.pathname.indexOf('/admin/dashboard') !== -1
                      ? 'opacity-75'
                      : 'text-blueGray-300'
                  }`}
                />{' '}
                Dashboard
              </a>
              {/* </Link> */}
            </li>

            <li className="items-center">
              {/* <Link href="/admin/settings"> */}
              <a
                href="#pablo"
                className={`text-xs uppercase py-3 font-bold block ${
                  router.pathname.indexOf('/admin/settings') !== -1
                    ? 'text-lightBlue-500 hover:text-lightBlue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
                }`}
              >
                <i
                  className={`fas fa-tools mr-2 text-sm ${
                    router.pathname.indexOf('/admin/settings') !== -1
                      ? 'opacity-75'
                      : 'text-blueGray-300'
                  }`}
                />{' '}
                Produtos
              </a>
              {/* </Link> */}
            </li>

            <li className="items-center">
              {/* <Link href="/admin/tables"> */}
              <a
                href="#pablo"
                className={`text-xs uppercase py-3 font-bold block ${
                  router.pathname.indexOf('/admin/tables') !== -1
                    ? 'text-lightBlue-500 hover:text-lightBlue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
                }`}
              >
                <i
                  className={`fas fa-table mr-2 text-sm ${
                    router.pathname.indexOf('/admin/tables') !== -1
                      ? 'opacity-75'
                      : 'text-blueGray-300'
                  }`}
                />{' '}
                Usuários
              </a>
              {/* </Link> */}
            </li>
          </ul>

          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          {/* Heading */}
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Usuário
          </h6>
          {/* Navigation */}

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <li className="items-center">
              {/* <Link href="/auth/login"> */}
              <a
                href="#pablo"
                className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
              >
                <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm" />{' '}
                Perfil
              </a>
              {/* </Link> */}
            </li>

            <li className="items-center">
              {/* <Link href="/auth/register"> */}
              <a
                href="#pablo"
                className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
              >
                <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm" />{' '}
                Sair
              </a>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
