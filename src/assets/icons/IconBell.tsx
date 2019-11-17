import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconBell: React.FunctionComponent<IconProps> = ({
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
      <path d="M8,16a2.64,2.64,0,0,1-2.63-2.64h1.5a1.13,1.13,0,1,0,2.26,0h1.5A2.64,2.64,0,0,1,8,16Z"/>
      <path d="M14,14.07H2a.76.76,0,0,1-.56-.24.74.74,0,0,1-.19-.57l.57-6.55V6.65A6.42,6.42,0,0,1,8,0a6.42,6.42,0,0,1,6.2,6.61.13.13,0,0,1,0,.06l.57,6.55a.74.74,0,0,1-.19.57A.76.76,0,0,1,14,14.07ZM2.8,12.57H13.2l-.5-5.73V6.65A4.92,4.92,0,0,0,8,1.54,4.92,4.92,0,0,0,3.3,6.65v.13Z"/>
    </svg>
  )
};
