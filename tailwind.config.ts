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
  				DEFAULT: '#00E5FF',
  				dark: '#00B8CC',
  				light: '#40EEFF'
  			},
  			poolup: {
  				cyan: '#00E5FF',
  				'cyan-dark': '#00B8CC',
  				'cyan-light': '#40EEFF',
  				'cyan-lighter': '#80F5FF'
  			},
  			// Override orange → cyan so all orange-* classes become cyan
  			orange: {
  				300: '#67F3FF',
  				400: '#00E5FF',
  				500: '#00E5FF',
  				600: '#00B8CC',
  				950: '#001820',
  			},
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
