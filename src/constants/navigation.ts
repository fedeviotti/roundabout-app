import {
  CalendarIcon,
  ClipboardListIcon,
  ClockIcon,
  CogIcon,
  SupportIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';

export interface Navigation {
  name: string;
  to: string;
  icon: any;
  current: boolean;
}

export const navigation: Navigation[] = [
  { name: 'Dashboard', to: '/', icon: ViewGridIcon, current: true },
  { name: 'Schedule', to: '/schedule/', icon: ClockIcon, current: false },
  {
    name: 'Projects',
    to: '/projects/',
    icon: ClipboardListIcon,
    current: false,
  },
  { name: 'Support', to: '/support/', icon: SupportIcon, current: false },
  { name: 'Calendar', to: '/calendar/', icon: CalendarIcon, current: false },
  { name: 'Settings', to: '/settings/', icon: CogIcon, current: false },
];
