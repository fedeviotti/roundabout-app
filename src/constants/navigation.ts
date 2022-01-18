import {
  CalendarIcon,
  ClipboardListIcon,
  ClockIcon,
  CogIcon,
  SupportIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';

interface Navigation {
  name: string;
  to: string;
  icon: any;
  current: boolean;
}

export const navigation: Navigation[] = [
  { name: 'Dashboard', to: '/', icon: ViewGridIcon, current: true },
  { name: 'Schedule', to: '/page-2/', icon: ClockIcon, current: false },
  {
    name: 'Projects',
    to: '/using-typescript/',
    icon: ClipboardListIcon,
    current: false,
  },
  { name: 'Support', to: '#', icon: SupportIcon, current: false },
  { name: 'Calendar', to: '#', icon: CalendarIcon, current: false },
  { name: 'Settings', to: '#', icon: CogIcon, current: false },
];
