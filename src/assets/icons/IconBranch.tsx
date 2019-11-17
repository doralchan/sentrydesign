import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconBranch: React.FunctionComponent<IconProps> = ({
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
      <path d="M2.84,6.72A2.86,2.86,0,1,1,5.7,3.86,2.86,2.86,0,0,1,2.84,6.72Zm0-4.22A1.36,1.36,0,1,0,4.2,3.86,1.36,1.36,0,0,0,2.84,2.5Z"/>
      <path d="M2.84,15A2.86,2.86,0,1,1,5.7,12.14,2.86,2.86,0,0,1,2.84,15Zm0-4.21A1.36,1.36,0,1,0,4.2,12.14,1.35,1.35,0,0,0,2.84,10.79Z"/>
      <path d="M13.16,6.72A2.86,2.86,0,1,1,16,3.86,2.87,2.87,0,0,1,13.16,6.72Zm0-4.22a1.36,1.36,0,1,0,1.35,1.36A1.36,1.36,0,0,0,13.16,2.5Z"/>
      <path d="M11.05,4.61H5a.75.75,0,0,1,0-1.5h6.1a.75.75,0,1,1,0,1.5Z"/>
      <path d="M7.16,12.89H5a.75.75,0,1,1,0-1.5H7.16a5.26,5.26,0,0,0,5.25-5.25V6a.75.75,0,1,1,1.5,0v.17A6.76,6.76,0,0,1,7.16,12.89Z"/>
    </svg>
  )
};
