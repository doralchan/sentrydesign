import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconFix: React.FunctionComponent<IconProps> = ({
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
      <path d="M2.68,15.94A2.63,2.63,0,0,1,.82,11.45L5.71,6.56l0,0a4.72,4.72,0,0,1,.79-5.24A4.74,4.74,0,0,1,11.75.49a.74.74,0,0,1,.46.54.77.77,0,0,1-.21.68L9.72,4l.62,1.67L12,6.27,14.28,4a.76.76,0,0,1,1.23.25,4.78,4.78,0,0,1-.78,5.27,4.76,4.76,0,0,1-5.28.78h0L4.55,15.17A2.62,2.62,0,0,1,2.68,15.94Zm6.9-14.4a2.83,2.83,0,0,0-2,.79A3.3,3.3,0,0,0,7.09,6l.19.53a.75.75,0,0,1-.17.78L1.88,12.51a1.13,1.13,0,0,0,0,1.6,1.17,1.17,0,0,0,1.61,0L8.71,8.89a.75.75,0,0,1,.79-.18l.49.18a3.3,3.3,0,0,0,3.68-.44A2.92,2.92,0,0,0,14.42,6l-1.7,1.7a.75.75,0,0,1-.79.18L9.49,6.94a.71.71,0,0,1-.44-.44l-.9-2.44a.75.75,0,0,1,.17-.79L10,1.57Z"/>
    </svg>
  )
};
