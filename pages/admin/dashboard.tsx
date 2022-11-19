import { LineChart } from '../../components/Charts/LineChart';
import { DashboardHeader } from '../../components/Headers/DashboardHeader';
import { Sidebar } from '../../components/Navbars/Sidebar';

export default function Dashboard() {
  const color = 'light';

  return (
    <>
      <Sidebar />

      <main className="relative md:ml-64 bg-blueGray-100">
        <DashboardHeader />

        <section className="px-4 md:px-10 mx-auto w-full -m-24 md:-mt-32">
          <div className="flex flex-wrap">
            <div className="w-full mb-12 px-4">
              <div
                className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${
                  color === 'light' ? 'bg-white' : 'bg-blueGray-700 text-white'
                }`}
              >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3
                        className={`font-semibold text-lg ${
                          color === 'light' ? 'text-blueGray-700' : 'text-white'
                        }`}
                      >
                        Card Tables
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th
                          className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500'
                          }`}
                        >
                          Project
                        </th>
                        <th
                          className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500'
                          }`}
                        >
                          Budget
                        </th>
                        <th
                          className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500'
                          }`}
                        >
                          Status
                        </th>
                        <th
                          className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500'
                          }`}
                        >
                          Users
                        </th>
                        <th
                          className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500'
                          }`}
                        >
                          Completion
                        </th>
                        <th
                          className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500'
                          }`}
                        />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src="/img/bootstrap.jpg"
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                          />{' '}
                          <span
                            className={`ml-3 font-bold ${+(color === 'light'
                              ? 'text-blueGray-600'
                              : 'text-white')}`}
                          >
                            Argon Design System
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          $2,500 USD
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-orange-500 mr-2" />{' '}
                          pending
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex">
                            <img
                              src="/img/team-1-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                            />
                            <img
                              src="/img/team-2-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-3-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-4-470x470.png"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">60%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div
                                  style={{ width: '60%' }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          {/* <TableDropdown /> */} <p>test 1</p>
                        </td>
                      </tr>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src="/img/angular.jpg"
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                          />{' '}
                          <span
                            className={`ml-3 font-bold ${+(color === 'light'
                              ? 'text-blueGray-600'
                              : 'text-white')}`}
                          >
                            Angular Now UI Kit PRO
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          $1,800 USD
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-emerald-500 mr-2" />{' '}
                          completed
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex">
                            <img
                              src="/img/team-1-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                            />
                            <img
                              src="/img/team-2-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-3-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-4-470x470.png"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">100%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                <div
                                  style={{ width: '100%' }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          {/* <TableDropdown /> */} <p>test 2</p>
                        </td>
                      </tr>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src="/img/sketch.jpg"
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                          />{' '}
                          <span
                            className={`ml-3 font-bold ${+(color === 'light'
                              ? 'text-blueGray-600'
                              : 'text-white')}`}
                          >
                            Black Dashboard Sketch
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          $3,150 USD
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-red-500 mr-2" />{' '}
                          delayed
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex">
                            <img
                              src="/img/team-1-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                            />
                            <img
                              src="/img/team-2-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-3-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-4-470x470.png"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">73%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div
                                  style={{ width: '73%' }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          {/* <TableDropdown /> */} <p>test 3</p>
                        </td>
                      </tr>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src="/img/react.jpg"
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                          />{' '}
                          <span
                            className={`ml-3 font-bold ${+(color === 'light'
                              ? 'text-blueGray-600'
                              : 'text-white')}`}
                          >
                            React Material Dashboard
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          $4,400 USD
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-teal-500 mr-2" /> on
                          schedule
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex">
                            <img
                              src="/img/team-1-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                            />
                            <img
                              src="/img/team-2-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-3-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-4-470x470.png"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">90%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                                <div
                                  style={{ width: '90%' }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          {/* <TableDropdown /> */} <p>test 4</p>
                        </td>
                      </tr>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src="/img/vue.jpg"
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                          />{' '}
                          <span
                            className={`ml-3 font-bold ${+(color === 'light'
                              ? 'text-blueGray-600'
                              : 'text-white')}`}
                          >
                            React Material Dashboard
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          $2,200 USD
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-emerald-500 mr-2" />{' '}
                          completed
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex">
                            <img
                              src="/img/team-1-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                            />
                            <img
                              src="/img/team-2-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-3-800x800.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="/img/team-4-470x470.png"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">100%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                <div
                                  style={{ width: '100%' }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          {/* <TableDropdown /> */} <p>test 5</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
