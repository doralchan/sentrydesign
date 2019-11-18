import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconMobile: React.FunctionComponent<IconProps> = ({
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
      <path d="M11.63,16H4.37a1.76,1.76,0,0,1-1.75-1.75V1.75A1.76,1.76,0,0,1,4.37,0h7.26a1.76,1.76,0,0,1,1.75,1.75v12.5A1.76,1.76,0,0,1,11.63,16Zm-.9-14.09a.76.76,0,0,1-.75.75H6.19a.75.75,0,0,1-.75-.75V1.5H4.37a.25.25,0,0,0-.25.25v12.5a.25.25,0,0,0,.25.25h7.26a.25.25,0,0,0,.25-.25V1.75a.25.25,0,0,0-.25-.25h-.9Z"/>
    </svg>
  )
};
