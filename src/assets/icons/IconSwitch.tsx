import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconSwitch: React.FunctionComponent<IconProps> = ({
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
      <path d="M3.91,15.49a.79.79,0,0,1-.53-.22L.51,12.39a.74.74,0,0,1,0-1.06L3.38,8.46A.75.75,0,0,1,4.44,9.52L2.1,11.86l2.34,2.35a.74.74,0,0,1,0,1.06A.77.77,0,0,1,3.91,15.49Z"/>
      <path d="M15,12.61H1a.75.75,0,1,1,0-1.5H15a.75.75,0,0,1,0,1.5Z"/>
      <path d="M12.09,7.87a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06L13.9,4.25,11.56,1.9a.74.74,0,0,1,0-1.06.75.75,0,0,1,1.06,0l2.87,2.88a.75.75,0,0,1,0,1.06L12.62,7.65A.74.74,0,0,1,12.09,7.87Z"/>
      <path d="M15,5H1A.75.75,0,0,1,1,3.5H15A.75.75,0,0,1,15,5Z"/>
    </svg>
  )
};
