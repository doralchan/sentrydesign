import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconNetwork: React.FunctionComponent<IconProps> = ({
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
      <path d="M13,5.78a2.86,2.86,0,1,1,2.85-2.86A2.86,2.86,0,0,1,13,5.78Zm0-4.21a1.36,1.36,0,1,0,1.35,1.35A1.36,1.36,0,0,0,13,1.57Z"/>
      <path d="M3,10.86A2.86,2.86,0,1,1,5.82,8,2.86,2.86,0,0,1,3,10.86ZM3,6.64A1.36,1.36,0,1,0,4.32,8,1.35,1.35,0,0,0,3,6.64Z"/>
      <path d="M13,15.93a2.86,2.86,0,1,1,2.85-2.85A2.86,2.86,0,0,1,13,15.93Zm0-4.21a1.36,1.36,0,1,0,1.35,1.36A1.36,1.36,0,0,0,13,11.72Z"/>
      <path d="M11.16,12.88a.81.81,0,0,1-.34-.08L4.5,9.62a.75.75,0,0,1,.68-1.34l6.32,3.18a.75.75,0,0,1-.34,1.42Z"/>
      <path d="M4.84,7.8A.75.75,0,0,1,4.5,6.38L10.82,3.2a.76.76,0,0,1,1,.33.75.75,0,0,1-.33,1L5.18,7.72A.71.71,0,0,1,4.84,7.8Z"/>
    </svg>
  )
};