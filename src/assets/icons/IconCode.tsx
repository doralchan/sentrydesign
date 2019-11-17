import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconCode: React.FunctionComponent<IconProps> = ({
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
      <path d="M3.82,11.8a.79.79,0,0,1-.53-.22l-3-3.05a.74.74,0,0,1,0-1.06l3-3a.75.75,0,0,1,1.06,0,.74.74,0,0,1,0,1.06L1.84,8l2.51,2.52a.74.74,0,0,1,0,1.06A.77.77,0,0,1,3.82,11.8Z"/>
      <path d="M12.18,11.8a.77.77,0,0,1-.53-.22.74.74,0,0,1,0-1.06L14.16,8,11.65,5.48a.74.74,0,0,1,0-1.06.75.75,0,0,1,1.06,0l3,3.05a.74.74,0,0,1,0,1.06l-3,3.05A.79.79,0,0,1,12.18,11.8Z"/>
      <path d="M5.69,13.75A.75.75,0,0,1,5,12.69l4.62-10a.75.75,0,0,1,1-.36.74.74,0,0,1,.36,1l-4.62,10A.76.76,0,0,1,5.69,13.75Z"/>
    </svg>
  )
};
