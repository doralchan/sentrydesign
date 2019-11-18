import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconSpaceship: React.FunctionComponent<IconProps> = ({
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
      <path d="M6.76,16.06A1.86,1.86,0,0,1,5,14.83,27.42,27.42,0,0,1,3.08,6.54C3.08,3.78,5.51.09,8,.09s4.92,3.69,4.92,6.45A27.42,27.42,0,0,1,11,14.83a1.86,1.86,0,0,1-1.74,1.23ZM8,1.59c-1.32,0-3.42,2.7-3.42,5a26.19,26.19,0,0,0,1.85,7.79.36.36,0,0,0,.33.23H9.24a.36.36,0,0,0,.33-.23,26.19,26.19,0,0,0,1.85-7.79C11.42,4.29,9.32,1.59,8,1.59Z"/>
      <path d="M8,8.69a2.15,2.15,0,1,1,2.15-2.15A2.15,2.15,0,0,1,8,8.69ZM8,5.9a.65.65,0,1,0,.65.64A.65.65,0,0,0,8,5.9Z"/>
      <path d="M.68,15.77.8,12a1.7,1.7,0,0,1,.94-1.47L4,9.42l.68,1.33L2.42,11.91a.21.21,0,0,0-.12.17l0,1.34,2.6-1.17.62,1.37Z"/>
      <path d="M15.32,15.77l-4.8-2.15.62-1.37,2.6,1.17,0-1.34a.21.21,0,0,0-.12-.17l-2.27-1.16L12,9.42l2.27,1.15A1.7,1.7,0,0,1,15.2,12Z"/>
    </svg>
  )
};
