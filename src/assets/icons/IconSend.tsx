import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconSend: React.FunctionComponent<IconProps> = ({
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
      <path d="M10,16a.75.75,0,0,1-.53-.22L.23,6.56A.74.74,0,0,1,0,5.87.75.75,0,0,1,.5,5.32L15,.06a.74.74,0,0,1,1,1L10.68,15.5a.75.75,0,0,1-.55.47ZM2.12,6.33l7.55,7.55L14,2Z"/>
      <rect x="3.32" y="4.95" width="13.96" height="1.5" transform="translate(-1.01 8.95) rotate(-45)"/>
    </svg>
  )
};
