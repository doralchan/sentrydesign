import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconHide: React.FunctionComponent<IconProps> = ({
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
      <path d="M8,14.16c-3.67,0-6.18-1.87-7.9-5.86a.78.78,0,0,1,0-.6c1.72-4,4.23-5.86,7.9-5.86s6.18,1.87,7.9,5.86a.78.78,0,0,1,0,.6C14.18,12.29,11.67,14.16,8,14.16ZM1.61,8C3.07,11.22,5.05,12.66,8,12.66S12.93,11.22,14.39,8C12.93,4.78,11,3.34,8,3.34S3.07,4.78,1.61,8Z"/>
      <circle cx="8" cy="8" r="3.61"/>
      <path d="M1.23,15.51a.75.75,0,0,1-.53-.22.74.74,0,0,1,0-1.06L14.24.68a.75.75,0,0,1,1.06,0,.74.74,0,0,1,0,1.06L1.76,15.29A.79.79,0,0,1,1.23,15.51Z"/>
    </svg>
  )
};