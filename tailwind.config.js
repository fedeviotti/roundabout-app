module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#22222d',
        'sidebar-current': '#383842',
        'sidebar-hover': '#2a2a39',
        primary: '#baf0f4',
        secondary: '#eeb6a2',
        tertiary: '#e1fd5e',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
