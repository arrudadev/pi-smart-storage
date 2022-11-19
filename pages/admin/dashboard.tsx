import { LineChart } from '../../components/Charts/LineChart';
import { DashboardHeader } from '../../components/Headers/DashboardHeader';
import { Sidebar } from '../../components/Navbars/Sidebar';
import { ProductTable } from '../../components/Tables/ProductTable';

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="relative md:ml-64 bg-blueGray-100">
        <DashboardHeader />

        <section className="px-4 md:px-10 mx-auto w-full -m-24 md:-mt-32">
          <div className="flex flex-wrap">
            <ProductTable />
          </div>

          <LineChart />

          <footer className="block py-4">
            <div className="container mx-auto px-4">
              <hr className="mb-4 border-b-1 border-blueGray-200" />
              <div className="flex flex-wrap items-center justify-center">
                <div className="w-full md:w-4/12 px-4">
                  <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                    Copyright © {new Date().getFullYear()} Smart Storage.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
