
module.exports = {
  mode: "jit",
  content: [
    './app.vue',
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'large': '24px',
      },
      // fontSize: {
      //   xl: ['36px', '60px'],
      // },
      colors: {
        orange: '#FE4731',
        thin_orange: '#FFF2EB',
        light_orange: '#FF751F',
        yellow: '#FFB62C',
        gray: "#ACACAC",
        thin_gray: '#F7F8FA',
        border_gray: '#EAEAEA',
        date_gray: '#909090',
        hr_gray: '#707070',
      },
      borderWidth: {
        '0.5': '0.5px',
        '1': '1px',
      },
      inset: {
        '1/2': '50%',
      },
      letterSpacing: {
        '1': '0.1',
        '2': '0.150em',
        '3': '0.2em',
        '4': '0.250em',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '200': '65rem',
      },
      opacity: {
        '85': '0.85',
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.5s ease-out',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(80px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        }
      },
    },
    fontFamily: {
      // 'title': ['GreycliffCF-Heavy'],
      // 'body': ['GreycliffCF-medium ','Noto sans JP'],
      'noto-medium': ['notosans-jp-mediam'],
      'noto-black': ['notosans-jp-black'],
      'greycliffcf-medium': ['greycliffcf-medium'],
      'greycliffcf-heavy': ['greycliffcf-heavy'],
    },
    boxShadow: {
      normal: '3px 3px 6px #00000029',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};
