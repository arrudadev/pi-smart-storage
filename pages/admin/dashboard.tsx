import { LineChart } from '../../components/Charts/LineChart';
import { DashboardFooter } from '../../components/Footers/DashboardFooter';
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

          <DashboardFooter />
        </section>
      </main>
    </>
  );
}
