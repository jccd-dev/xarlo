import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        westar: {
          DEFAULT: '#E1DFDD',
          50: '#FEFDFD',
          100: '#FCFCFC',
          200: '#F8F7F7',
          300: '#F3F2F1',
          400: '#EAE9E7',
          500: '#E1DFDD',
          600: '#CBC9C7',
          700: '#878685',
          800: '#656463',
          900: '#444342',
        },
        foreground: '#000000',
      },
      fontFamily: {
        uncage: 'var(--font-uncage)',
        roboto: 'var(--font-roboto)',
        funnel: 'var(--font-funnel)',
      },
    },
  },
  plugins: [],
} satisfies Config;
