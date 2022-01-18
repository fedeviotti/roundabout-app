import * as React from 'react';
import './dashboard.css';
import Sidebar from './sidebar';
import SidebarMobile from './sidebar-mobile';
import Toolbar from './toolbar';

const Dashboard: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <div>
        <SidebarMobile
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <Sidebar />

        <div className="md:pl-64 flex flex-col">
          <Toolbar setSidebarOpen={setSidebarOpen} />
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
