const sizes = {
  12: 12,
  14: 14,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
  30: 30,
  32: 32,
  38: 38,
  40: 40,
  46: 46,
  60: 60,
  auto: "auto",
};

export const theme = {
  colors: {
    black: "#000000",
    blue: "#009BA7",
    white: "#FFFFFF",
    grayPrimary: "#1E1E1E",
    graySecondary: "#9C9C9C",
    grayTertiary: "#F5F5F5",
  },
  fontSizes: { ...sizes },
  space: { ...sizes },
  breakpoints: ["768px", "1152px", "1440px"],
  boxshadow: "0px 4px 4px 0px #00000040",
};
