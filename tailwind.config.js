/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datetimepicker/dist/react-tailwindcss-datetimepicker.js',
  ],
  theme: {
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
      fuchsia: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#c026d3',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#4a044e',
      },
      green: {
        400: '#4ade80',
        500: '#22c55e',
        600: '#c026d3',
        700: '#15803d',
      },
      cyan: {
        100: '#67e8f9',
        200: '#67e8f9',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#67e8f9',
        800: '#67e8f9',
        900: '#67e8f9',
      },
      red: {
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
      },
      purple: {
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#a21caf',
      },
    },

    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(to bottom, #ffffff, #f5d0fe)',
        radial: 'radial-gradient(white, #fdf4ff)',
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
