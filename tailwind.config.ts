import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'next-trello-bg-color': '#838c91',
        'text-area-border-color': 'rgb(133, 133, 133)',
        'check-icon-color': 'rgb(97, 189, 79)',
        'c-grey-0': 'rgb(235, 236, 240)',
        'c-grey-1': 'rgba(9, 30, 66, 0.04)',
        'c-grey-2': 'rgb(97, 97, 97)',
        'c-grey-3': 'rgb(49, 49, 49)',
        'c-white-blur-0': 'rgba(255, 255, 255, 0.24)',
        'c-white-blur-1': 'rgba(255, 255, 255, 0.32)',
        'c-green-0': 'rgb(90, 172, 68)',
        'c-green-1': 'rgb(97, 189, 79)',
        'c-black-0': 'rgb(17, 17, 17)'
      }
    }
  },
  plugins: []
};
export default config;
