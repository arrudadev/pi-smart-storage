import Link from 'next/link';

import { ButtonPrimary } from '../components/Buttons/ButtonPrimary';
import { HomeFooter } from '../components/Footers/HomeFooter';
import { HomeNavBar } from '../components/Navbars/HomeNavbar';

export default function Home() {
  return (
    <>
      <HomeNavBar />

      <main className="header relative pt-16 items-center flex h-screen">
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
              <Link href="/login">
                <ButtonPrimary additionalClass="text-sm px-6 py-4">
                  Entrar
                </ButtonPrimary>
              </Link>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 mt-0 hidden sm:block sm:h-2/4 lg:h-full"
          src="/images/home-hero.png"
          alt="Hero"
        />
      </main>

      <HomeFooter />
    </>
  );
}
