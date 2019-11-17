import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconAdd: React.FunctionComponent<IconProps> = ({
  color: providedColor,
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
      <path d="M15.19,8.75H.81a.75.75,0,1,1,0-1.5H15.19a.75.75,0,0,1,0,1.5Z"/>
      <path d="M8,15.94a.76.76,0,0,1-.75-.75V.81a.75.75,0,0,1,1.5,0V15.19A.76.76,0,0,1,8,15.94Z"/>
    </svg>
  )
};
