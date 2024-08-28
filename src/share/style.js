export const size = {
  mobile: "414px",
  mobileBigger: "550px",
  tablet: "744px",
  tabletBigger: "1024px",
  desktop: "1280px",
  desktopBigger: "1440px",
  temporalDskMaxSize: "1600px",
  desktopMaxBigger: "2048px",
};

export const maxWidthQueries = {
  mobile: { query: `(max-width: ${size.mobile})` },
  mobileBigger: { query: `(max-width: ${size.mobileBigger})` },
  tablet: { query: `(max-width: ${size.tablet})` },
  tabletBigger: { query: `(max-width: ${size.tabletBigger})` },
  desktop: { query: `(max-width: ${size.desktop})` },
};

export const minWidthQueries = {
  mobile: { query: `(min-width: ${size.mobile})` },
  mobileBigger: { query: `(min-width: ${size.mobileBigger})` },
  tablet: { query: `(min-width: ${size.tablet})` },
  tabletBigger: { query: `(min-width: ${size.tabletBigger})` },
  desktop: { query: `(min-width: ${size.desktop})` },
};

//COLORES DEL PROYECTO
export const PRIMARY_COLOR = "#3D7DCA";
export const SECONDARY_COLOR = "#003A70";
export const TERTIARY_COLOR = "#FFCB05";

//COLORES
export const WHITE = "#FFFFFF";
export const GREY = "#595a5c";
export const GREY_LIGHT = "#D9D9D9";
export const GREY_DARK = "#5B5B5B";
export const RED = "#ff0000";
export const BLUE_SKY = "#b1c6f3";
export const BLACK = "#000000";
