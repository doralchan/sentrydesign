import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconMoon: React.FunctionComponent<IconProps> = ({
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
      <path d="M8,15.9A7.92,7.92,0,0,1,.09,8c0-.24,0-.49,0-.73a.77.77,0,0,1,.31-.58.75.75,0,0,1,.89,0,.81.81,0,0,1,.18.19A3.83,3.83,0,1,0,6.82,1.47a.75.75,0,0,1-.28-.8A.77.77,0,0,1,7.19.11c.26,0,.53,0,.81,0A7.92,7.92,0,0,1,8,15.9ZM1.68,9.06A6.41,6.41,0,1,0,9,1.66a5.27,5.27,0,0,1,.88,2.92A5.34,5.34,0,0,1,1.68,9.06Z"/>
    </svg>
  )
};
