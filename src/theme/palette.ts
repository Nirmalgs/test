export interface PaletteOptions {
  neutral: Record<string, string>,
  primary: Record<string, string>,
  success: Record<string, string>,
  warning: Record<string, string>,
  danger: Record<string, string>,
}

const palette = {
    neutral : {
      black: "#1E1E1E",
      d_grey: "#4D4D4D",
      grey: "#666666",
      l_grey: "#898989",
      b_grey: "#B9B9B9",
      silver: "#CCCCCC",
      steel: "#ECECEC",
      white: "#FFFFFF",
    },
    primary: {
      red: '#ED2541',
      navy_blue: '#083A81',
      black: "#1E1E1E",
    },
    success: {
      d_green: '#25D366',
      forest: '#4DE184',
      m_green: '#009262',
      herbal: "#94EEB6",
      mint: "#C2F5D5",
      l_green: "#DCFEE9"
    },
    warning: {
      d_yellow: "#E48900",
      lemon: "#FFA826",
      m_yellow: "#FFB240",
      straw: "#FFC670",
      sand: "#FFD596",
      l_yellow: "#FFF8EC",
    },
    danger: {
      d_red: "#C33025",
      scarlet: "#E01507",
      m_red: "#E02B1D",
      raspberry: "#FF5A4F",
      rubicund: "#F0857D",
      l_red: "#FFF1F0",
    },
};

export default palette;
