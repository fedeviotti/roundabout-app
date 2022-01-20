import * as React from 'react';
import { classNames } from '../utils/classnames';
import { Link } from 'gatsby';
import { navigation } from '../constants/navigation';
import logo from '../images/home-logo.png';
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex md:w-20 md:flex-col md:fixed md:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex-1 flex flex-col min-h-0 bg-sidebar">
        <div className="flex items-center justify-center h-16 flex-shrink-0 px-4 bg-sidebar">
          <img className="h-8 w-auto" src={logo} alt="Snowflake" />
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto justify-between">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={classNames(
                  item.current
                    ? 'bg-sidebar-current'
                    : 'text-gray-300 hover:bg-sidebar-hover hover:text-white',
                  'group flex justify-center px-2 py-2 text-sm font-medium rounded-md',
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-gray-300'
                      : 'text-gray-400 group-hover:text-gray-300',
                    'flex-shrink-0 h-6 w-6',
                  )}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex self-center mb-5 items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
