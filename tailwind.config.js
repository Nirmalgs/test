const typography = require('./src/theme/typography'); 
const palette = require('./src/theme/palette');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@embitel/widgets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        radioSelect: "#72FF80",
        borderColor: "#B1B1B1",
        fieldBgColor: "#EEF5FC",
        fieldBorderColor: "#0671E0",
        fieldDisabled: "#ABBED1",
        fieldColor:"#212121",
        
        placeHolder: "#454545",
        //Button Component
        buttonColor: "#ED2541",
        buttonHover: "#083A81",
        buttonDisabled: "#ed254138",
        buttonBorderColor: "#4D4D4D",
        outlineColor: "#0671E0",
        outlineBgColor: "#EEF5FC",
        oulineDisable: "#EEF5FC",
        outlineIconDisable: "#ABBED1",
        blue: {
          500: "#1DA1F2",
          400: "#1A91DA",
          300: "#1A85BC",
        },
        gray: {
          300: "#D1D5DB",
          200: "#E5E7EB",
        },
        yellow: {
          100:'#FFF8EC',
          800:'#E48900'
        },
        red:{
          100:'#FFF1F0',
          600:"#E02B1D"
        },
        green:{
          600:"#009262"
        },
        ...palette.neutral,
        ...palette.primary,
        ...palette.success,
        ...palette.danger,
        ...palette.warning,
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        8: "2rem",
        16: "4rem",
      },
      width: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "12/12": "100%",
      },
      typography,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
],
};

