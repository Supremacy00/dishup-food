import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ss: "350px",
        xs: "576px",
        sm: "680px",
        md: "768px",
        lg: "993px",
        xl: "1200px",
        xxl: "1300px",
        "2xl": "1536px",
      },
      colors: {
        primary: '#393737',
        secondary: '#646464'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      aspectRatio: {
        '2/2': '2 / 2',
        '4/2': '4 / 2',
        '4/3': '3 / 2',
        '4/4': '4 / 4',
        '3/2': '3 / 2',
        '300/270': '300 / 270',
        '300/300': '300 / 300',

      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero1.jpg')",
        'hero-pattern2': "url('/assets/images/hero5.jpg')"
      },
      boxShadow: {
        '3xl': '0 0 17px -2px rgb(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ],
};
export default config;
