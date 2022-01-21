import * as React from 'react';
import {
  DotsCircleHorizontalIcon,
  PlayIcon,
  FilterIcon,
  ClockIcon,
} from '@heroicons/react/solid';
import { StaticImage } from 'gatsby-plugin-image';

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
          <li>
            <a href="#" className="block">
              <div className="flex items-center px-4 py-4 sm:px-6 hover:bg-white bg-gray-50 sm:rounded-2xl my-2">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0 self-start">
                    <StaticImage
                      className="h-8 w-8 rounded-full"
                      src="../images/fix-icon.png"
                      alt="Fixing Bug"
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-4 md:gap-4">
                    <div>
                      <p className="text-sm font-medium truncate">Fixing Bug</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate">Project X</span>
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
                            className={`flex items-center justify-center bg-primary/30 rounded-full mr-2 h-6 w-6`}
                          >
                            <ClockIcon
                              className={`flex-shrink-0 h-5 w-5 text-primary`}
                              aria-hidden="true"
                            />
                          </div>
                          3:00 - 3:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          0.30 m
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
          <li>
            <a href="#" className="block">
              <div className="flex items-center px-4 py-4 sm:px-6 hover:bg-white bg-gray-50 sm:rounded-2xl my-2">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0 self-start">
                    <StaticImage
                      className="h-8 w-8 rounded-full"
                      src="../images/pen-icon.png"
                      alt="Illustration"
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-4 md:gap-4">
                    <div>
                      <p className="text-sm font-medium truncate">
                        Illustration
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate">Acme</span>
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
                            className={`flex items-center justify-center bg-gray-400/30 rounded-full mr-2 h-6 w-6`}
                          >
                            <ClockIcon
                              className={`flex-shrink-0 h-5 w-5 text-gray-400`}
                              aria-hidden="true"
                            />
                          </div>
                          4:00 - 4:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          0.30 m
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
          <li>
            <a href="#" className="block">
              <div className="flex items-center px-4 py-4 sm:px-6 hover:bg-white bg-gray-50 sm:rounded-2xl my-2">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0 self-start">
                    <StaticImage
                      className="h-8 w-8 rounded-full"
                      src="../images/money-icon.png"
                      alt="Filling Tax Return"
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-4 md:gap-4">
                    <div>
                      <p className="text-sm font-medium truncate">
                        Filling Tax Return
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate">Office</span>
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
                            className={`flex items-center justify-center bg-secondary/30 rounded-full mr-2 h-6 w-6`}
                          >
                            <ClockIcon
                              className={`flex-shrink-0 h-5 w-5 text-secondary`}
                              aria-hidden="true"
                            />
                          </div>
                          5:00 - 5:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          0.30 m
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
        </ul>
      </div>
    </div>
  );
};

export default TimeTracker;
