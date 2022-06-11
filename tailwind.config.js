module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      height: {
        'card': '192px'
      },
      width: {
        'card': '336px'
      },
      maxWidth: {
        '1600': '1600px',
      },
      fontSize: {
        xxs: '0.675rem'
      },
      backgroundImage: {
        'form': "url('./images/bg/stars.png')"
      },
      letterSpacing: {
        wideXl: '0.35em'
      },
      boxShadow: {
        'form': '0 0 10px rgba(1,1,122,1)',
      },
      translate: {
        '30': '30rem',
      },
      fontFamily: {
        montserratThin: ['Montserrat-Thin'],
        montserratRegular: ['Montserrat-Regular'],
        montserratLight: ['Montserrat-Light'],
        montserratBold: ['Montserrat-Bold'],
      },
      keyframes: {
        slideRed:{
          '0%,100%': { background: 'green' },
          '50%' : {background :  'red'}
        },
        slideGreen: {
          '0%,100%': { background: 'green' },
          '50%' : {background: 'red'}
        },

      },
      animation: {
        slideRed: 'slideRed 1s ease-in-out paused',
        slideGreen: 'slideGreen 1s ease-in-out paused'
      },
    },
  },
  plugins: [],
}