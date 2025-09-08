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
  				DEFAULT: '#7C3AED',
  				dark: '#6D28D9',
  				light: '#8B5CF6'
  			},
  			poolup: {
  				purple: '#7C3AED',
  				'purple-dark': '#6D28D9',
  				'purple-light': '#8B5CF6',
  				'purple-lighter': '#A78BFA'
  			}
  		},
  		fontFamily: {
  			'jua': ['Jua', 'sans-serif'],
  			'sans': ['Jua', 'Arial', 'Helvetica', 'sans-serif']
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
