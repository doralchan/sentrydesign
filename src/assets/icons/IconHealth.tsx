import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconHealth: React.FunctionComponent<IconProps> = ({
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
      <path d="M10.33,15.06a1.25,1.25,0,0,1-1.21-.91L5.87,2.85,4.29,8.18a.76.76,0,0,1-.72.54H.79a.75.75,0,0,1,0-1.5H3L4.67,1.6A1.24,1.24,0,0,1,5.87.7h0a1.24,1.24,0,0,1,1.19.91l3.25,11.27,1.4-5.11a.75.75,0,0,1,.72-.55h2.81a.75.75,0,0,1,0,1.5H13l-1.49,5.42a1.23,1.23,0,0,1-1.2.91Z"/>
    </svg>
  )
};