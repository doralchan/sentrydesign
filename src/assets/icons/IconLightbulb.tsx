import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconLightbulb: React.FunctionComponent<IconProps> = ({
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
      <path d="M10.56,16H5.61a.76.76,0,0,1-.74-.61l-.57-2.8a4.52,4.52,0,0,0-.64-1.52,5.17,5.17,0,1,1,9.6-2.68A5.12,5.12,0,0,1,12.53,11a5.52,5.52,0,0,0-.69,1.63l-.55,2.73A.76.76,0,0,1,10.56,16Zm-4.34-1.5H9.94l.43-2.14a7.06,7.06,0,0,1,.87-2.1,3.61,3.61,0,0,0,.52-1.87A3.69,3.69,0,0,0,7.28,4.79,3.62,3.62,0,0,0,4.47,7.7a3.7,3.7,0,0,0,.47,2.59,6,6,0,0,1,.83,2Z"/>
      <path d="M4,3.45a.75.75,0,0,1-.64-.36L2.56,1.77a.75.75,0,0,1,.24-1,.76.76,0,0,1,1,.24L4.65,2.3a.76.76,0,0,1-.24,1A.79.79,0,0,1,4,3.45Z"/>
      <path d="M2.15,5.94H.77a.75.75,0,0,1,0-1.5H2.15a.75.75,0,0,1,0,1.5Z"/>
      <path d="M8,2.92a.76.76,0,0,1-.75-.75V.77a.75.75,0,1,1,1.5,0v1.4A.76.76,0,0,1,8,2.92Z"/>
      <path d="M12,3.45a.79.79,0,0,1-.39-.11.76.76,0,0,1-.24-1L12.16,1a.76.76,0,0,1,1-.24.75.75,0,0,1,.24,1l-.82,1.32A.75.75,0,0,1,12,3.45Z"/>
      <path d="M15.23,5.94H13.85a.75.75,0,0,1,0-1.5h1.38a.75.75,0,0,1,0,1.5Z"/>
    </svg>
  )
};
