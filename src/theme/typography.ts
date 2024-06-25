const typography = () => ({
  //for Mobile
  DEFAULT: {
    css: {
      'h1': { 
        fontWeight: 800,
        fontSize: '26px',
        lineHeight: '32px',
      },
      'h2': { 
        fontWeight: 800,
        fontSize: '20px',
        lineHeight: '28px',
       },
      'h3': { 
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '24px',
       },
      'body1': {
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '24px',
      },
      'body2': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',
      },
      'body3': {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '18px',
      },
      'body4': {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '14px',
      },
    },
  },
  //for Desktop
  'lg': {
    css: {
      'h1': { 
        fontWeight: 800,
        fontSize: '40px'
      },
      'h2': { 
        fontWeight: 800,
        fontSize: '36px'
      },
      'h3': { 
        fontWeight: 700,
        fontSize: '30px'
      },
      'h4': { 
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '28px',
       },
      'body2': {
        fontWeight: 800,
        fontSize: '20px',
        lineHeight: '28px',
      },
      'body3': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
  },
});

export default typography;
