module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#22222d',
        'sidebar-current': '#383842',
        'sidebar-hover': '#2a2a39',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
