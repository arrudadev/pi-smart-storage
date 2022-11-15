import Link from 'next/link';

import { HomeNavBar } from '../components/Navbars/HomeNavbar';

export default function Home() {
  return (
    <>
      <HomeNavBar />

      <section className="header relative pt-16 items-center flex h-screen">
        <div className="container mx-auto items-center flex flex-wrap mt-0 sm:mt-20 md:mt-10">
          <div className="w-full md:w-full lg:w-6/12 xl:w-6/12 px-4">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              Gestão de Estoque Inteligente
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Controle e consulte informações sobre o estoque da sua empresa com
              facilidade e integração, essa solução permite ao gestor uma visão
              geral e completa das mercadorias, bem como de todas as
              movimentações realizadas no estoque da empresa, permitindo total
              controle da entrada e saída de materiais.
            </p>

            <div className="mt-12">
              <Link
                href="/"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                target="_blank"
                rel="noreferrer"
              >
                Entrar
              </Link>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 mt-0 hidden sm:block sm:h-2/4 lg:h-full"
          src="/images/home-hero.png"
          alt="Hero"
        />
      </section>

      <footer className="container mx-auto relative w-full pt-12 pb-6">
        <hr className="my-6 border-blueGray-300" />

        <div className="px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Smart Storage.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
