/* Alex Joshua (c) 2023 */

import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'msg': '1rem 1fr'
      },
      gridTemplateRows: {
        'msg': '1rem 1fr'
      },
      textColor: {
        'primary': colors.slate[200],
        'secondary': colors.slate[400],
        'tertiary': colors.slate[500],
        'black-primary': colors.slate[950],
        'black-secondary': colors.slate[800],
        'black-tertiary': colors.slate[700]
      },
      backgroundColor: {
        'primary': colors.gray[950],
        'secondary': colors.gray[800],
        'tertiary': colors.gray[700],
        'input': colors.gray[300],
      },
    },
  },
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    options: {
      safelist: [
        'bg-yellow-500', 'bg-green-500', 'bg-red-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-teal-500'
      ],
    },
  },
  plugins: [],
}
export default config
