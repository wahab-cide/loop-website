import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: {
  				DEFAULT: '#F97316',
  				dark: '#EA580C',
  				light: '#FB923C'
  			},
  			poolup: {
  				orange: '#F97316',
  				'orange-dark': '#EA580C',
  				'orange-light': '#FB923C',
  				'orange-lighter': '#FDBA74'
  			}
  		},
  		fontFamily: {
  			'jua': ['Jua', 'sans-serif'],
  			'sans': ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
