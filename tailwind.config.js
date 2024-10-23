const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}'
  ],

  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
        lg: '1280px'
      },
      maxWidth: {
        lg: '1280px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        selectable: 'hsl(var(--selectable))',
        actionable: 'hsl(var(--actionable))',

        background: 'hsl(var(--background))',
        'secondary-background': 'hsl(var(--secondary-background))',

        foreground: 'hsl(var(--foreground))',

        aside: {
          DEFAULT: 'hsl(var(--aside))',
          foreground: 'hsl(var(--aside-foreground))',
          accent: 'hsl(var(--aside-accent))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lgbis: 'calc(var(--radius) + 2px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        elevated: 'var(--shadow-elevated)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out'
      },
      backgroundImage: {
        'hero-frame-background':
          "url('/src/assets/images/https___todoist.com_static_product-ui_backgrounds_wave-one-red.avif')"
      },
      fontFamily: {
        inter: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'sans-serif'], // Inter pour les titres
        poppins: ['Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', ' sans-serif'],
        apple: ['apple-system', 'system - ui', 'Segoe UI', 'Roboto']
      },
      fontWeight: {
        regular: '400',
        medium: '500', // Medium pour Helvetica
        semibold: '600' // SemiBold pour Inter
      }
    }
  },
  plugins: [animate]
}
