import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconPlanet: React.FunctionComponent<IconProps> = ({
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
      <path d="M8,15.9A7.92,7.92,0,1,1,15.9,8,7.92,7.92,0,0,1,8,15.9ZM8,1.57A6.42,6.42,0,1,0,14.4,8,6.42,6.42,0,0,0,8,1.57Z"/>
      <path d="M1.17,16a1.12,1.12,0,0,1-.83-.33c-.67-.68-.32-1.87,1.18-4l1.22.86a11,11,0,0,0-1.08,1.81c1.08-.48,3.61-2.22,7-5.65s5.17-5.95,5.65-7a10.6,10.6,0,0,0-1.8,1.08l-.87-1.22C13.79,0,15-.33,15.66.34S16,2.19,14.52,4.26a44.51,44.51,0,0,1-4.76,5.5,44.51,44.51,0,0,1-5.5,4.76A6.35,6.35,0,0,1,1.17,16Z"/>
    </svg>
  )
};