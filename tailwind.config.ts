import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2F5',
          100: '#CCE5EB',
          200: '#99CBD7',
          300: '#66B1C3',
          400: '#3397AF',
          500: '#013E50',
          600: '#013547',
          700: '#012C3E',
          800: '#012335',
          900: '#001A2C',
        },
      },
    },
  },
  plugins: [],
};
export default config;
