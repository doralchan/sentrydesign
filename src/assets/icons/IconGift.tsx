import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconGift: React.FunctionComponent<IconProps> = ({
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
      <path d="M13.27,16H2.75A1.75,1.75,0,0,1,1,14.21V5.71A.76.76,0,0,1,1.75,5H14.27a.76.76,0,0,1,.75.75v8.5A1.75,1.75,0,0,1,13.27,16ZM2.5,6.46v7.75a.25.25,0,0,0,.25.25H13.27a.25.25,0,0,0,.25-.25V6.46Z"/>
      <rect x="7.25" y="5.71" width="1.5" height="9.5"/>
      <rect x="1.8" y="9.36" width="12.42" height="1.5"/>
      <path d="M14.76,6.46h-.49A.75.75,0,0,1,14,5V3.64a.25.25,0,0,0-.25-.25H2.26A.25.25,0,0,0,2,3.64V5a.75.75,0,0,1-.26,1.45H1.26a.75.75,0,0,1-.75-.75V3.64A1.75,1.75,0,0,1,2.26,1.89h11.5a1.76,1.76,0,0,1,1.75,1.75V5.71A.75.75,0,0,1,14.76,6.46Z"/>
      <path d="M8.76,2.64H7.26A1.13,1.13,0,0,0,5,2.64H3.51a2.63,2.63,0,0,1,5.25,0Z"/>
      <path d="M12.51,2.64H11a1.13,1.13,0,0,0-2.25,0H7.26a2.63,2.63,0,0,1,5.25,0Z"/>
    </svg>
  )
};