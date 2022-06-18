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
        xxs: '0.675rem !important',
        x3s: '0.5rem !important'
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
      scale: {
        '08': '0.5'
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
        visa: {
          '0%,100%':{ background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 0%)' },
          '2%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 2%)'},
          '4%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 4%)'},
          '6%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 6%)'},
          '8%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 8%)'},
          '10%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 10%)'},
          '12%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 12%)'},
          '14%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 14%)'},
          '16%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 16%)'},
          '18%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 18%)'},
          '20%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 20%)'},
          '22%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 22%)'},
          '24%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 24%)'},
          '26%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 26%)'},
          '28%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 28%)'},
          '30%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 30%)'},
          '32%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 32%)'},
          '34%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 34%)'},
          '36%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 36%)'},
          '38%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 38%)'},
          '40%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 40%)'},
          '42%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 42%)'},
          '44%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 44%)'},
          '46%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 46%)'},
          '48%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 48%)'},
          '50%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 50%)'},
          '52%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 52%)'},
          '54%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 54%)'},
          '56%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 56%)'},
          '58%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 58%)'},
          '60%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 60%)'},
          '62%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 62%)'},
          '64%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 64%)'},
          '66%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 66%)'},
          '68%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 68%)'},
          '70%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 70%)'},
          '72%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 72%)'},
          '74%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 74%)'},
          '76%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 76%)'},
          '78%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 78%)'},
          '80%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 80%)'},
          '82%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 82%)'},
          '84%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 84%)'},
          '86%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 86%)'},
          '88%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 88%)'},
          '90%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 90%)'},
          '92%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 92%)'},
          '94%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 94%)'},
          '96%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 96%)'},
          '98%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 98%)'},
          '100%':  {background: 'linear-gradient(90deg, rgba(34,181,255,1) 0%, rgba(255,255,255,0.6797312675070029) 100%)'},

        },
        mastercard: {
          '0%,100%':{ background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 0%)' },
          '2%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 2%)'},
          '4%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 4%)'},
          '6%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 6%)'},
          '8%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 8%)'},
          '10%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 10%)'},
          '12%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 12%)'},
          '14%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 14%)'},
          '16%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 16%)'},
          '18%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 18%)'},
          '20%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 20%)'},
          '22%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 22%)'},
          '24%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 24%)'},
          '26%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 26%)'},
          '28%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 28%)'},
          '30%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 30%)'},
          '32%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 32%)'},
          '34%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 34%)'},
          '36%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 36%)'},
          '38%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 38%)'},
          '40%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 40%)'},
          '42%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 42%)'},
          '44%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 44%)'},
          '46%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 46%)'},
          '48%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 48%)'},
          '50%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 50%)'},
          '52%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 52%)'},
          '54%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 54%)'},
          '56%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 56%)'},
          '58%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 58%)'},
          '60%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 60%)'},
          '62%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 62%)'},
          '64%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 64%)'},
          '66%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 66%)'},
          '68%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 68%)'},
          '70%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 70%)'},
          '72%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 72%)'},
          '74%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 74%)'},
          '76%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 76%)'},
          '78%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 78%)'},
          '80%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 80%)'},
          '82%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 82%)'},
          '84%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 84%)'},
          '86%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 86%)'},
          '88%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 88%)'},
          '90%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 90%)'},
          '92%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 92%)'},
          '94%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 94%)'},
          '96%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 96%)'},
          '98%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 98%)'},
          '100%':  {background: 'linear-gradient(90deg, rgba(240,114,0,1) 0%, rgba(255,255,255,0.6797312675070029) 100%)'},

        },
        toplvl: {
          '0%,100%': {transform: 'translate(0,0)'},
          '50%': {transform: 'translate(0,-50px)'}
        }

      },
      animation: {
        slideRed: 'slideRed 1s ease-in-out paused',
        slideGreen: 'slideGreen 1s ease-in-out paused',
        visa: 'visa 1s ease-in-out forwards',
        mastercard: 'mastercard 1s ease-in-out forwards',
        toplvl: 'toplvl 1s ease-in-out 1'
      },
    },
  },
  plugins: [],
}