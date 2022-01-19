import * as React from 'react';
import {
  DotsCircleHorizontalIcon,
  PlayIcon,
  FilterIcon,
  ClockIcon,
} from '@heroicons/react/solid';
import fixIcon from '../images/fix-icon.png';
import penIcon from '../images/pen-icon.png';
import moneyIcon from '../images/money-icon.png';

const cards = [
  {
    info: {
      title: 'Fixing bug',
      subject: 'Project X',
      imageUrl: fixIcon,
    },
    time: '3:00 - 3:30 PM',
    color: 'text-primary',
    colorBg: 'bg-primary/30',
    duration: '0.30 m',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    info: {
      title: 'Illustration',
      subject: 'Acme',
      imageUrl: penIcon,
    },
    time: '4:00 - 4:30 PM',
    color: 'text-gray-400',
    colorBg: 'bg-gray-400/30',
    duration: '0.30 m',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    info: {
      title: 'Filling tax return',
      subject: 'Office',
      imageUrl: moneyIcon,
    },
    time: '5:00 - 5:30 PM',
    color: 'text-secondary',
    colorBg: 'bg-secondary/30',
    duration: '0.30 m',
    stage: 'Completed phone screening',
    href: '#',
  },
];

const TimeTracker: React.FC = () => {
  return (
    <div className="flex-col">
      <div className="flex flex justify-between">
        <span className="text-lg font-bold p-4">Time Tracker</span>
        <div className="flex items-center gap-2">
          <select
            id="location"
            name="location"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="Today"
          >
            <option>Today</option>
          </select>
          <button
            type="button"
            className="inline-flex items-center px-1.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Filter</span>
            <FilterIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <ul role="list">
          {cards.map((card) => (
            <li key={card.info.subject}>
              <a href={card.href} className="block">
                <div className="flex items-center px-4 py-4 sm:px-6 hover:bg-white bg-gray-50 sm:rounded-2xl my-2">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 self-start">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={card.info.imageUrl}
                        alt={card.info.title}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-4 md:gap-4">
                      <div>
                        <p className="text-sm font-medium truncate">
                          {card.info.title}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">{card.info.subject}</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            $ Billable
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <div
                              className={`flex items-center justify-center ${card.colorBg} rounded-full mr-2 h-6 w-6`}
                            >
                              <ClockIcon
                                className={`flex-shrink-0 h-5 w-5 ${card.color}`}
                                aria-hidden="true"
                              />
                            </div>
                            {card.time}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            {card.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <PlayIcon
                      className="h-5 w-5 text-gray-700"
                      aria-hidden="true"
                    />
                    <DotsCircleHorizontalIcon
                      className="h-5 w-5 text-gray-700"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeTracker;
