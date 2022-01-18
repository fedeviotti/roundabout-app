interface UserNavigation {
  name: string;
  to: string;
}

export const userNavigation: UserNavigation[] = [
  { name: 'Your Profile', to: '#' },
  { name: 'Settings', to: '#' },
  { name: 'Sign out', to: '#' },
];
