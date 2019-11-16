import * as React from "react";
import { IconProps } from '../types';
import IconSizes from '../../theme/sizes';

export const IconAddCircle: React.FunctionComponent<IconProps> = ({
  color: providedColor,
  size: providedSize = 'sm',
  ...other
}) => {
  const size = IconSizes[providedSize];
  const color = providedColor;

  return (
    <svg
      viewBox="0 0 16 16"
      fill={color}
      height={size}
      width={size}
      {...other}
    >
      <path d="M11.28,8.75H4.72a.75.75,0,1,1,0-1.5h6.56a.75.75,0,1,1,0,1.5Z"/>
      <path d="M8,12a.76.76,0,0,1-.75-.75V4.72a.75.75,0,0,1,1.5,0v6.56A.76.76,0,0,1,8,12Z"/>
      <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"/>
    </svg>
  )
}
