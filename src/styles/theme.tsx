const colors = {
  white: '#FFFFFF',
  black: '#1D1127',

  gray100: '#FAF9FB',
  gray200: '#C6BECF',
  gray300: '#9386A0',
  gray400: '#776589',
  gray500: '#2B1D38',

  purple100: '#D4D1EC',
  purple200: '#A396DA',
  purple300: '#6C5FC7',

  blue100: '#D2DFF7',
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

const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px',
  xxl: '72px',
} as const;

const iconDirections = {
  up: '0',
  right: '90',
  down: '180',
  left: '270',
} as const;

const lightMode = {
  text: colors.gray500,
  background: colors.white,
  labels: colors.gray400, 
  border: colors.gray200,
} as const;

const darkMode = {
  text: colors.gray500,
  background: colors.white,
  labels: colors.gray300, 
  border: colors.gray400,
}

const theme = {
  ...iconSizes,
  ...iconDirections,
  ...colors,
  ...lightMode,
  ...darkMode,
}

export type Theme = typeof theme;
export type Color = keyof typeof colors;

export default theme;