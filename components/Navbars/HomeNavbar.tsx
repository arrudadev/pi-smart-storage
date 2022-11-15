import Link from 'next/link';

export const HomeNavBar = () => {
  return (
    <nav className="top-0 fixed z-50 w-full flex items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            href="/"
            className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
            Smart Storage
          </Link>
        </div>

        <div className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none block">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <Link
                href="/login"
                className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                Entrar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
