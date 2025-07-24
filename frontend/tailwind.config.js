/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grow: {
          '0%, 100%': { transform: 'scaleX(0.8)', opacity: '0.5' },
          '50%': { transform: 'scaleX(1)', opacity: '1' },
        },
        height: {
          '0%, 100%': { height: '0.75rem', opacity: '0.5' },
          '50%': { height: '1.5rem', opacity: '1' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '300' },
          '100%': { strokeDashoffset: '0' }
        },
        drawCurve: {
          '0%': { strokeDashoffset: '800' },
          '100%': { strokeDashoffset: '0' }
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        spin: {
          'to': {
            transform: 'rotate(360deg)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '.5',
          },
        },
        transform: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '20%': { transform: 'scale(0.8) rotate(45deg)', opacity: '0.7' },
          '40%': { transform: 'scale(1.1) rotate(90deg)', opacity: '0.9' },
          '60%': { transform: 'scale(0.9) rotate(135deg)', opacity: '0.8' },
          '80%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' }
        },
        moveNext: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '50%': { transform: 'translateX(100px)', opacity: '0' },
          '51%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        dataStage1: {
          '0%, 20%': { opacity: '1', transform: 'scale(1)' },
          '25%': { opacity: '0', transform: 'scale(0.8) translateX(-20px)' },
          '100%': { opacity: '0', transform: 'scale(0.8) translateX(-20px)' }
        },
        dataStage2: {
          '0%, 20%': { opacity: '0', transform: 'scale(0.8) translateX(20px)' },
          '25%, 45%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0', transform: 'scale(0.8) translateX(-20px)' },
          '100%': { opacity: '0', transform: 'scale(0.8) translateX(-20px)' }
        },
        dataStage3: {
          '0%, 45%': { opacity: '0', transform: 'scale(0.8) translateX(20px)' },
          '50%, 70%': { opacity: '1', transform: 'scale(1)' },
          '75%': { opacity: '0', transform: 'scale(0.8) translateX(-20px)' },
          '100%': { opacity: '0', transform: 'scale(0.8) translateX(-20px)' }
        },
        dataStage4: {
          '0%, 70%': { opacity: '0', transform: 'scale(0.8) translateX(20px)' },
          '75%, 95%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.8) translateX(20px)' }
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float-delay-1': 'float 3s ease-in-out infinite',
        'float-delay-2': 'float 3s ease-in-out infinite 0.5s',
        'float-delay-3': 'float 3s ease-in-out infinite 1s',
        'float-delay-4': 'float 3s ease-in-out infinite 1.5s',
        'pulse-delay-1': 'pulse 2s ease-in-out infinite 0.2s',
        'pulse-delay-2': 'pulse 2s ease-in-out infinite 0.4s',
        'pulse-delay-3': 'pulse 2s ease-in-out infinite 0.6s',
        'grow': 'grow 1.5s ease-out infinite',
        'grow-delay-1': 'grow 1.5s ease-out infinite 0.2s',
        'grow-delay-2': 'grow 1.5s ease-out infinite 0.4s',
        'height': 'height 2s ease-in-out infinite',
        'height-delay-1': 'height 2s ease-in-out infinite 0.2s',
        'height-delay-2': 'height 2s ease-in-out infinite 0.4s',
        'height-delay-3': 'height 2s ease-in-out infinite 0.6s',
        'height-delay-4': 'height 2s ease-in-out infinite 0.8s',
        'height-delay-5': 'height 2s ease-in-out infinite 1s',
        'draw-line': 'drawLine 1s ease-in-out forwards',
        'draw-line-delay-1': 'drawLine 1s ease-in-out forwards 1s',
        'draw-line-delay-2': 'drawLine 1s ease-in-out forwards 2s',
        'draw-line-delay-3': 'drawCurve 1.5s ease-in-out forwards 3s',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'data-transform': 'transform 2s ease-in-out forwards',
        'move-next': 'moveNext 1.5s ease-in-out forwards',
        'data-stage-1': 'dataStage1 8s ease-in-out infinite',
        'data-stage-2': 'dataStage2 8s ease-in-out infinite',
        'data-stage-3': 'dataStage3 8s ease-in-out infinite',
        'data-stage-4': 'dataStage4 8s ease-in-out infinite'
      },
      // moved custom keyframes and animation definitions into extend above
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // BigFish Design System Colors
        'black': '#151515',
        'white': '#fff',
        'dark-grey': '#717171',
        'mid-grey': '#aaa',
        'grey': '#b6cbcb',
        'dark-blue': '#1f47e6',
        'mid-blue': '#88a2ff',
        'light-blue': '#b7fbff',
        'dark-orange': '#d1903a',
        'mid-orange': '#ff965a',
        'mid-pink': '#ff84e4',
        'light-pink': '#ffd1e7',
        'mid-purple': '#d987ff',
        'mid-yellow': '#ffe03d',
        'light-yellow': '#f6fd87',
        'dark-green': '#a1a500',
        'mid-green': '#78d692',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        'display': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1920px',
      },
      screens: {
        'xs': '475px',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};
