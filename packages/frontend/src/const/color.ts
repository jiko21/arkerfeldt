export const Color = {
  BLACK: '#2d2d2d',
  LIGHT: '#878686',
  ENABLE: '#007AAE',
  ENABLE_HOVER: '#005b82',
  DISABLE: '#F0F0F0',
  DISABLE_HOVER: '#d1d1d1',
  LIGHT_GRAY: '#C4C4C4',
  LIGHT_TEXT: '#6A6A6A',
  WHITE: '#FFFFFF',
  WHITE_LIGHT: '#FCFCFC',
  WHITE_LIGHT_HOVER: '#ECECEC',
} as const;

export type Color = typeof Color[keyof typeof Color];
