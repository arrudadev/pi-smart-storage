import { useEffect } from 'react';

import { Chart } from 'chart.js/auto';

import { useCalendar } from '../../hooks/useCalendar';

type LineChartProps = {
  chartId: string;
  title: string;
  legend: string;
};

export const LineChart = ({ chartId, title, legend }: LineChartProps) => {
  const { selectedMothDescription, selectedMonth, selectedYear } =
    useCalendar();

  function getDaysInMonth() {
    return new Date(selectedYear, selectedMonth, 0).getDate();
  }

  function generateDayLabels() {
    const quantityDays = getDaysInMonth();

    const days = [];

    for (let day = 1; day <= quantityDays; day++) {
      days.push(`${day}`);
    }

    return days;
  }

  function generateRandomData() {
    return Math.floor(Math.random() * (100 - 1) + 1);
  }

  function generateData() {
    const quantityDays = getDaysInMonth();

    const data = [];

    for (let day = 1; day <= quantityDays; day++) {
      data.push(generateRandomData());
    }

    return data;
  }

  useEffect(() => {
    const config = {
      type: 'line',
      data: {
        labels: generateDayLabels(),
        datasets: [
          {
            label: legend,
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: generateData(),
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title(context: any) {
                const { label } = context[0];

                return `Dia ${label}`;
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: 'rgba(255,255,255,1)',
            },
          },
          y: {
            ticks: {
              color: 'rgba(255,255,255,1)',
            },
          },
        },
      },
    };

    const chartStatus = Chart.getChart(chartId); // <canvas> id
    if (chartStatus !== undefined) {
      chartStatus.destroy();
    }

    // eslint-disable-next-line
    //@ts-ignore
    const ctx = document.getElementById(chartId)?.getContext('2d');

    // eslint-disable-next-line
    //@ts-ignore
    window.myLine = new Chart(ctx, config);
  }, [selectedMonth, selectedYear]);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              {title} - {selectedMothDescription}
            </h6>

            <span className="text-white text-sm">Produto: Todos</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <canvas id={chartId} />
        </div>
      </div>
    </div>
  );
};
