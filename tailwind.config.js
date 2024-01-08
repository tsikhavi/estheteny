/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datetimepicker/dist/react-tailwindcss-datetimepicker.js',
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"'],
    },
    screens: {
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px', // Extra-large screens
      '2xl': '1536px', // 2x extra-large screens
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      allports: {
        50: '#f2f8fd',
        100: '#e4f0fa',
        200: '#c3e0f4',
        300: '#8ec8eb',
        400: '#52abde',
        500: '#2c91cb',
        600: '#1d73ac',
        700: '#195c8b',
        800: '#184f74',
        900: '#194261',
        950: '#112a40',
      },
      green: {
        400: '#4ade80',
        500: '#22c55e',
        600: '#c026d3',
        700: '#15803d',
      },
      red: {
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
      },
    },

    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(to bottom, #ffffff, #f2f8fd)',
        radial: 'radial-gradient(white, #8ec8eb)',
      },
      fontSize: {
        '2xs': '0.625rem', // Extra Extra Small
        xs: '0.75rem', // Extra Small
        sm: '0.875rem', // Small
        base: '1rem', // Base (default)
        lg: '1.125rem', // Large
        xl: '1.25rem', // Extra Large
        '2xl': '1.5rem', // Double Extra Large
        '3xl': '1.875rem', // Triple Extra Large
        '4xl': '2.25rem', // Quadruple Extra Large
        '5xl': '3rem', // 5 times Extra Large
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tw-elements/dist/plugin.cjs'), require('@tailwindcss/typography')],
};
