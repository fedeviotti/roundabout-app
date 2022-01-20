import * as React from 'react';
import { MenuAlt2Icon } from '@heroicons/react/outline';
import {
  BellIcon,
  ChatAltIcon,
  TemplateIcon,
  SearchIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import { classNames } from '../utils/classnames';
import { userNavigation } from '../constants/user-navigation';

interface ToolbarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toolbar: React.FC<ToolbarProps> = ({ setSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex items-center font-bold">Dashboard</div>
          <div className="flex">
            <span className="text-xs">17 January, 2022</span>
            <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
        <div className="flex-1 flex">
          <form className="flex md:ml-0" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="bg-white p-1 ml-3 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <span className="sr-only">View messages</span>
            <ChatAltIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="bg-white p-1 ml-3 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <span className="sr-only">View apps</span>
            <TemplateIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="bg-white p-1 ml-3 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="max-w-xs bg-gray-100 border border-solid border-gray-300 px-4 py-2 flex items-center text-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary">
                <span className="sr-only">Open user menu</span>
                {/* <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-3">
                      <div className="flex">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          Stephanie
                        </span>
                        <ChevronDownIcon
                          className="h-4 w-4 mt-0.5"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex">
                        <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                          Designer
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        to={item.to}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
