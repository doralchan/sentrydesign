import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconWallet: React.FunctionComponent<IconProps> = ({
  color: providedColor = theme.Colors.black,
  size: providedSize = 'sm',
  ...other
}) => {
  const color = providedColor;
  const size =
    typeof providedSize === 'string'
      ? theme.IconSizes[providedSize]
      : providedSize;

  return (
    <svg
      viewBox="0 0 16 16"
      fill={color}
      height={size}
      width={size}
      {...other}
    >
      <path d="M14,16H1a.75.75,0,0,1-.75-.75V4.71A.76.76,0,0,1,1,4H14a1.75,1.75,0,0,1,1.75,1.75v8.54A1.75,1.75,0,0,1,14,16ZM1.76,14.5H14a.25.25,0,0,0,.25-.25V5.71A.25.25,0,0,0,14,5.46H1.76Z"/>
      <path d="M15,11.82H11.18a.75.75,0,0,1-.75-.75V8.9a.74.74,0,0,1,.75-.75H15v1.5H11.93v.67H15Z"/>
      <path d="M1.24,5.43.78,4,12.68.12a.7.7,0,0,1,.67.11.72.72,0,0,1,.31.6V4.71h-1.5V1.87Z"/>
    </svg>
  )
};