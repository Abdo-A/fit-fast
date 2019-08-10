import { Dimensions } from 'react-native';
import Color from 'color';

// DIMENTIONS

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

Dimensions.addEventListener('change', (dims) => {
  dimensions.fullHeight = dims.window.height;
  dimensions.fullWidth = dims.window.width;
});

export const sizes = {
  bottomTabHeight: 70,
  bottomTabHeight: 65,
  mainContentWidth: '90%',
  mainContentWidthWithoutPercent: 90
};

// GAPS

export const gaps = {
  xsm: 5,
  sm: 10,
  msm: 15,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50,
  xxxl: 80,
  filler: 120
};

// FONT SIZES

export const fontSizes = {
  xxs: 8,
  xs: 10,
  sm: 12,
  msm: 15,
  md: 18,
  lg: 28,
  xlg: 40,
  huge: 50
};

// FONT TYPES

// export const fontTypes = {
//   main: 'montserratMedium',
//   mainBold: 'montserratBold',
//   logoFont: 'montserratLight'
// };

// COLORS

const primaryColor = Color('#4e88a2');
const secondaryColor = Color('#25ecaf');
const tertiaryColor = Color('#F5F5DC');
const black = Color('#232323');
const white = Color('#EAEEFF');
const trueWhite = Color('#FFFFFF');
const red = Color('#FF0000');
const disclaimer = Color('#3385ff');
const facebook = Color('#3b5998');
const gray01 = Color('#959595');
const transparent = '#00FFFF00';

export const colors = {
  primary: primaryColor,
  primaryLight: primaryColor.lighten(0.4),
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  black,
  white,
  trueWhite,
  red,
  disclaimer,
  facebook,
  gray01,
  transparent
};
