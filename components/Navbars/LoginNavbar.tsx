import Link from 'next/link';

import { ButtonPrimary } from '../Buttons/ButtonPrimary';

export const LoginNavbar = () => {
  return (
    <nav className="top-0 fixed z-50 w-full flex items-center justify-between px-2 py-3 navbar-expand-lg bg-transparent shadow">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            href="/"
            className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
            Smart Storage
          </Link>
        </div>

        <div className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none block">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <Link href="/">
                <ButtonPrimary>Home</ButtonPrimary>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
