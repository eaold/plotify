export * from './Button';
export * from './GraphContainer';

// Colours
export const colorLight = "#FFFFFF";
export const colorDark = "#131313";
export const colorAccentPrimary = "#5ed3a4";
export const colorSpotify = '';

export const Styles = {
  background: {
    backgroundPrimary: `${colorLight}`,
    backgroundSecondary: `${colorDark}`,
    accentColor: `${colorAccentPrimary}`,
  },
  font: {
    family: "'Roboto', sans-serif",
    titlePrimary: `${colorDark}`,
    titleSecondary: `${colorLight}`,
    text: `${colorDark}`,
  },
  media: {
    mobile: "(max-device-width : 480px)",
    tablet: "(max-device-width : 1024px)",
  },
};

export default Styles;
