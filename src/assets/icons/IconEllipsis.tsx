import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconEllipsis: React.FunctionComponent<IconProps> = ({
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
      <circle cx="8" cy="8" r="1.31"/>
      <circle cx="1.31" cy="8" r="1.31"/>
      <circle cx="14.69" cy="8" r="1.31"/>
    </svg>
  )
};
