import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Integration: React.FC = () => {
  return (
    <div className="flex-col">
      <div className="flex flex justify-start">
        <span className="text-lg font-bold p-4">Integration</span>
      </div>
      <div className="rounded-lg p-4 bg-white">
        <ul role="list" className="grid grid-cols-1 gap-6">
          <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="w-full flex flex-col p-2 gap-4">
              <div className="w-full flex justify-between">
                <div className="w-full flex items-center justify-between">
                  <StaticImage
                    src="../images/slack-logo.png"
                    alt="Notion"
                    className="w-20"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    Connected
                  </button>
                </div>
              </div>
              <div className="text-gray-500 text-xs">
                Integration involves identifying which components to integrate
                and how to get a reference.
              </div>
            </div>
          </li>
          <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="w-full flex flex-col p-2 gap-4">
              <div className="w-full flex justify-between">
                <div className="w-full flex items-center justify-between">
                  <StaticImage
                    src="../images/notion-logo.png"
                    alt="Notion"
                    className="w-20"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    Connect
                  </button>
                </div>
              </div>
              <div className="text-gray-500 text-xs">
                Integration involves identifying which components to integrate
                and how to get a reference.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Integration;
