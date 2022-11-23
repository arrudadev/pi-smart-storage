import { useEffect } from 'react';

import { Chart } from 'chart.js/auto';

import { useCalendar } from '../../hooks/useCalendar';
import { useProduct } from '../../hooks/useProduct';

type LineChartProps = {
  chartId: string;
  title: string;
  legend: string;
  type: string;
};

export const LineChart = ({ chartId, title, legend, type }: LineChartProps) => {
  const { selectedMonth, selectedYear } = useCalendar();

  const {
    fetchProductsEntries,
    fetchProductsOutputs,
    chartProductId,
    chartProductName,
  } = useProduct();

  function getChartLabels(data: any) {
    return data.map((item: any) => item.day);
  }

  function getChartData(data: any) {
    return data.map((item: any) => item.total);
  }

  async function fetchChartData() {
    return type === 'ENTRIE'
      ? await fetchProductsEntries()
      : await fetchProductsOutputs();
  }

  useEffect(() => {
    fetchChartData().then((response: any) => {
      const { data } = response.data;

      const config = {
        type: 'line',
        data: {
          labels: getChartLabels(data),
          datasets: [
            {
              label: legend,
              backgroundColor: '#4c51bf',
              borderColor: '#4c51bf',
              data: getChartData(data),
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
    });
  }, [selectedMonth, selectedYear, chartProductId]);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              {title}
            </h6>

            <span className="text-white text-sm">
              Produto: {chartProductName}
            </span>
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
