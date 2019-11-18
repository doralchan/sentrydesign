import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconHome: React.FunctionComponent<IconProps> = ({
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
      <path d="M10.85,15.13H9.35V9.74a.25.25,0,0,0-.25-.25h-2a.25.25,0,0,0-.25.25v5.39H5.39V9.74A1.76,1.76,0,0,1,7.14,8h2a1.75,1.75,0,0,1,1.75,1.75Z"/>
      <path d="M12.33,15.88H3.67a1.75,1.75,0,0,1-1.75-1.75V8.93H1.8A1.77,1.77,0,0,1,0,7.16,1.74,1.74,0,0,1,.7,5.78l.06,0L6.9.79a1.77,1.77,0,0,1,2.2,0l6.14,4.94.06,0A1.74,1.74,0,0,1,16,7.16,1.77,1.77,0,0,1,14.2,8.93h-.12v5.2A1.75,1.75,0,0,1,12.33,15.88ZM1.6,7a.3.3,0,0,0-.07.18.27.27,0,0,0,.27.27h.87a.74.74,0,0,1,.75.75v6a.25.25,0,0,0,.25.25h8.66a.25.25,0,0,0,.25-.25v-6a.74.74,0,0,1,.75-.75h.87a.27.27,0,0,0,.27-.27A.3.3,0,0,0,14.4,7l0,0L8.16,2a.27.27,0,0,0-.32,0L1.64,7Z"/>
    </svg>
  )
};
