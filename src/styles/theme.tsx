const colors = {
  white: '#FFFFFF',
  black: '#1D1127',

  gray100: '#FAF9FB',
  gray200: '#C6BECF',
  gray300: '#9386A0',
  gray400: '#776589',
  gray500: '#2B1D38',

  purple100: '#6C5FC7',
  purple200: '#A396DA',
  purple300: '#D4D1EC',

  blue100: '#3D74DB',
  blue200: '#92A8EA',
  blue300: '#3D74DB',

  green100: '#B6ECDF',
  green200: '#7DD6BE',
  green300: '#33BF9E',

  yellow100: '#FDE8B4',
  yellow200: '#FFD577',
  yellow300: '#FFC227',

  red100: '#FCC6C8',
  red200: '#FD918F',
  red300: '#F55459',

  pink100: '#FDC9D7',
  pink200: '#FA93AB',
  pink300: '#F05781',
} as const; 

const theme = {
  breakpoints: ['768px', '992px', '1200px', '1440px', '2560px'],
  ...colors
}

export type Theme = typeof theme;
export type Color = keyof typeof colors;

export default theme;