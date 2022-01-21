import * as React from 'react';

const CallToAction: React.FC = () => {
  return (
    <>
      <div className="callToAction pt-auto">
        <div className="flex flex-col items-start justify-end h-full pb-6 lg:pb-1 xl:pb-4 pl-3">
          <p className="pb-10 lg:pb-1 xl:pb-4 text-2xl lg:text-base xl:text-xl">
            Welcome back to your
          </p>
          <p className="pb-10 lg:pb-1 xl:pb-4 font-bold text-3xl lg:text-base xl:text-2xl">
            Daily Time Tracker
          </p>
          <button
            type="button"
            className="items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            Button text
          </button>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
