import * as React from 'react';
import './layout.css';
import Sidebar from './sidebar';
import SidebarMobile from './sidebar-mobile';
import Toolbar from './toolbar';

const Layout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <div>
        <SidebarMobile
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <Sidebar />

        <div className="md:pl-20 flex flex-col">
          <Toolbar setSidebarOpen={setSidebarOpen} />
          <main className="flex-1">
            <div className="py-6">
              <div className="px-4 sm:px-6 md:px-8">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
