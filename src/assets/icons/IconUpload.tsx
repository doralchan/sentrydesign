import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconUpload: React.FunctionComponent<IconProps> = ({
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
      <path d="M15.24,16H.76A.76.76,0,0,1,0,15.27V9.74A.76.76,0,0,1,.76,9a.76.76,0,0,1,.75.75v4.78h13V9.74a.75.75,0,0,1,1.5,0v5.53A.76.76,0,0,1,15.24,16Z"/>
      <path d="M12.15,5.86a.74.74,0,0,1-.53-.22L8,2,4.38,5.64A.75.75,0,0,1,3.32,4.58L7.47.43a.75.75,0,0,1,1.06,0l4.15,4.15a.75.75,0,0,1,0,1.06A.73.73,0,0,1,12.15,5.86Z"/>
      <path d="M8,12.08a.76.76,0,0,1-.75-.75V1a.75.75,0,0,1,1.5,0V11.33A.76.76,0,0,1,8,12.08Z"/>
    </svg>
  )
};