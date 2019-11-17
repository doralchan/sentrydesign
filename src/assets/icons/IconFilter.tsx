import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconFilter: React.FunctionComponent<IconProps> = ({
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
      <path d="M15.19,2.53H.81A.75.75,0,0,1,.81,1H15.19a.75.75,0,1,1,0,1.5Z"/>
      <path d="M11.63,15H4.36a.75.75,0,0,1,0-1.5h7.27a.75.75,0,0,1,0,1.5Z"/>
      <path d="M13.41,8.75H2.58a.75.75,0,0,1,0-1.5H13.41a.75.75,0,0,1,0,1.5Z"/>
    </svg>
  )
};
