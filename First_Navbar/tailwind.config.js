// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
       'new': '15% 85%',
       'one': '1fr',
      },
      gridTemplateRows:{
        'row': '1fr 2fr 1fr',
      },
      borderRadius:{
        '4xl': '55px',
        '3.5xl': '49px',
        'half': '50%',
      },
      fontSize:{
        'custom': '1.1rem',
        'bigger-custom': '1.2rem',
        'sedang': '1rem',
        'lumayan': '1.5rem',
        'kecil': '0.95rem',
        'smaller': '0.8rem',
        'small-smaller': '0.7rem',
      },
      lineHeight:{
        'extra': '55px',
      },
      textColor:{
        'symbol': '#acacac',
        'cerah': '#aaa',
        'gelap': '#333',
      },
      spacing:{
        '37': '150px',
        '800': '800px',
        '300': '300px',
      },
      width:{
        '11.5': '46px',
        '110': '110px',
        '200': '200px',
        '1500': '1500px',
        '100': '2000px',
        'thirteen': '130px',
      },
      height:{
        '11.5': '46px',
        '100': '2000px',
        '35-px': '35px',
        '1500': '1500px',
        '800': '800px',
        'fourty-one': '41px',
      },
      margin:{
        '0.75': '0.45rem',
      },
      borderColor: theme => ({
        'gelap': '#333',
      }),
      backgroundColor: theme => ({
        'start': '#448leb',
        'end': '#04befe',
        'tidak': 'transparent',
      }),
      gridColumn:{
        'span-half': '1 / 2',
      },
      gridRow:{
        'span-half': '1 / 2',
        'span-0.75': '3 / 4',
      },
      zIndex:{
        '1': '1',
        '2': '2',
        '7': '7',
        '5': '5',
        '6': '6',
      },
      inset:{
        '0.5': '5%',
        '0.10': '-10%',
        '0.30': '-50%',
        '0.48': '48%',
        '0.55': '55%',
        '0.52': '52%',
        '0.95': '95%',
        '0.3': '30%',
        '0.32': '32%',
        '0.28': '28%',
        '0.72': '72%',
        '0.6': '68%',
      },
      padding:{
        'kiri': '3rem 17% 2rem 12%',
        'kanan': '3rem 12% 2rem 17%',
        'panel-p': '0.7rem 0',
        'panel-p-new': '0.5rem 0',
        'form': '0 1.5rem',
        'panel-p-baru': '0.5rem 1rem',
        'phone': '2.5rem 8%',
        '15': '15%',
      },
      transitionDuration:{
        'transisi': '1.1s',
        'transisi-lama': '2s',
        'transisi-konten': '0.9s',
      },
      transitionDelay:{
        '0.6': '0.6s',
        '0.8': '0.8s',
      },
      screens:{
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md-semi': {'max': '870px'},
        // => @media (max-width: 767px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'xm': {'max': '570px'},
        // => @media (max-width: 639px) { ... }
      },
      minHeight:{
        '800': '800px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
}
