import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
    },
    title: {
      display: false,
      text: 'Bar chart',
    },
  },
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Project X',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderRadius: 5,
      hoverBackgroundColor: 'rgba(225, 253, 94, 1)',
      backgroundColor: 'rgba(227, 227, 227, 0.8)',
    },
    {
      label: 'Project Y',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderRadius: 5,
      hoverBackgroundColor: 'rgba(235, 182, 163, 1)',
      backgroundColor: 'rgba(33, 34, 43, 0.8)',
    },
  ],
};

const TimeSpend: React.FC = () => {
  return (
    <div className="flex-col">
      <div className="flex flex justify-between">
        <span className="text-lg font-bold p-4">Time Spend on projects</span>
        <div>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="Last 6 days"
          >
            <option>Last 6 days</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default TimeSpend;
