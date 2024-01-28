/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontWeight: {
      'normal': '400',
      'bold': '700',
    },
    fontSize: {
      'sm': 'clamp(.7rem, 2vw, .8rem)',
      'md': 'clamp(.9rem, 1vw, 1rem)',
      'lg': 'clamp(2rem, 1vw, 3rem)'
    },
    extend: {
      colors: {
        // Primary
        brightBlue: 'hsl(220, 98%, 61%)',
        checkBackground: 'linear-gradient(hsl(192, 100%, 67%) to hsl(280, 87%, 65%))',

        // Neutral
        // Light Theme
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        lightGrayishBlue: 'hsl(233, 11%, 84%)',
        darkGrayishBlue: 'hsl(236, 9%, 61%)',
        veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',

        // Dark Theme
        veryDarkBlue: 'hsl(235, 21%, 11%)',
        veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        _lightGrayishBlue: 'hsl(234, 39%, 85%)',
        h_lightGrayishBlue: 'hsl(236, 33%, 92%)',
        _darkGrayishBlue: 'hsl(234, 11%, 52%)',
        _veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        h_veryDarkGrayishBlue: 'hsl(237, 14%, 26%)',

        // Gradient
        from: 'hsl(192, 100%, 67%)',
        to: 'hsl(280, 87%, 65%)',
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-light': "url('assets/bg-mobile-light.jpg')",
        'mobile-dark': "url('assets/bg-mobile-dark.jpg')",
        'desktop-light': "url('assets/bg-desktop-light.jpg')",
        'desktop-dark': "url('assets/bg-desktop-dark.jpg')",
      },
      minWidth: {
        'sm': '320px'
      }
    },
  },
  plugins: [],
}
