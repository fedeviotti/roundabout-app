import * as React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StaticImage } from 'gatsby-plugin-image';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Transport', 'Branding', 'Office'],
  datasets: [
    {
      label: '# of hours',
      data: [4, 7, 3],
      backgroundColor: [
        'rgba(225, 253, 94, 0.9)',
        'rgba(235, 182, 163, 0.9)',
        'rgba(184, 238, 242, 0.9)',
      ],
      borderColor: [
        'rgba(225, 253, 94, 1)',
        'rgba(235, 182, 163, 1)',
        'rgba(184, 238, 242, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const totalHours = `${data.datasets[0].data.reduce(
  (prev, curr) => prev + curr,
  0,
)} Hr`;

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        boxWidth: 10,
        usePointStyle: true,
        color: 'rgba(183, 183, 183, 1)',
      },
    },
    title: {
      display: true,
      text: totalHours,
    },
  },
  elements: {
    arc: {
      hoverOffset: 10,
    },
  },
};

const Report: React.FC = () => {
  return (
    <div className="flex-col">
      <div className="flex flex justify-between">
        <span className="text-lg font-bold p-4">Report</span>
        <div className="flex items-center gap-2">
          <select
            id="location"
            name="location"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="Today"
          >
            <option>Weekly</option>
          </select>
        </div>
      </div>

      <div className="rounded-lg p-2 bg-white flex flex-col md:flex-row">
        <div className="w-full lg:w-6/12 xl:w-full">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col w-full justify-center gap-2">
          <div className="rounded-lg p-1 bg-secondary/80 flex">
            <StaticImage
              className="h-6 w-6 rounded-full"
              src="../images/money-icon.png"
              alt="Branding"
            />
            <div className="flex flex-col">
              <div className="font-bold text-gray-700">Branding</div>
              <div className="text-gray-500">7 hours</div>
            </div>
          </div>
          <div className="rounded-lg p-1 bg-primary/80 flex">
            <StaticImage
              className="h-6 w-6 rounded-full"
              src="../images/fix-icon.png"
              alt="Office"
            />
            <div className="flex flex-col">
              <div className="font-bold text-gray-700">Office</div>
              <div className="text-gray-500">3 hours</div>
            </div>
          </div>
          <div className="rounded-lg p-1 bg-tertiary/80 flex">
            <StaticImage
              className="h-6 w-6 rounded-full"
              src="../images/pen-icon.png"
              alt="Transport"
            />
            <div className="flex flex-col">
              <div className="font-bold text-gray-700">Transport</div>
              <div className="text-gray-500">4 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
