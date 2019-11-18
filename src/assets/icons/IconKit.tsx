import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconKit: React.FunctionComponent<IconProps> = ({
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
      <path d="M14.77,16H1.23A1.25,1.25,0,0,1,0,14.76V3.7A1.25,1.25,0,0,1,1.23,2.45H14.77A1.25,1.25,0,0,1,16,3.7V14.76A1.25,1.25,0,0,1,14.77,16ZM1.48,14.51h13V4h-13Z"/>
      <rect x="0.73" y="6.27" width="14.53" height="1.5"/>
      <path d="M10.51,3.49l-.81-2H6.3l-.81,2L4.1,2.92,5,.78A1.26,1.26,0,0,1,6.13,0H9.87A1.26,1.26,0,0,1,11,.78l.87,2.14Z"/>
      <path d="M8.94,10.38H7.06a.76.76,0,0,1-.75-.75V7h1.5V8.88h.38V7h1.5V9.63A.76.76,0,0,1,8.94,10.38Z"/>
    </svg>
  )
};
