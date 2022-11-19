import { CalendarDaysIcon } from '@heroicons/react/20/solid';

import { Datepicker } from '../Inputs/Datepicker';

export const DashboardHeader = () => (
  <>
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
      <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <h1 className="text-white text-sm uppercase lg:inline-block font-semibold">
          Dashboard
        </h1>

        <div className="md:flex flex-row flex-wrap items-center lg:ml-auto mr-3">
          <div className="flex items-center w-full">
            <CalendarDaysIcon
              className="h-10 w-10 mr-5 text-white"
              aria-hidden="true"
            />

            <Datepicker />
          </div>
        </div>
      </div>
    </nav>

    <header className="bg-blueGray-800 md:pt-32 pb-32 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full" />
    </header>
  </>
);
