import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconImage: React.FunctionComponent<IconProps> = ({
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
      <path d="M4.37,7.29a2.06,2.06,0,1,1,2.06-2A2.05,2.05,0,0,1,4.37,7.29Zm0-2.61a.56.56,0,1,0,.56.56A.56.56,0,0,0,4.37,4.68Z"/>
      <path d="M1.56,13.23l-1.1-1L3.92,8.51a.75.75,0,0,1,1,0L6.45,9.78l3-3.25A.71.71,0,0,1,10,6.29a.77.77,0,0,1,.56.25l5,5.68-1.12,1L10,8.16,7.05,11.34a.75.75,0,0,1-1,.05L4.52,10.07Z"/>
      <path d="M13.25,16H2.75A2.75,2.75,0,0,1,0,13.25V2.75A2.75,2.75,0,0,1,2.75,0h10.5A2.75,2.75,0,0,1,16,2.75v10.5A2.75,2.75,0,0,1,13.25,16ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v10.5A1.25,1.25,0,0,0,2.75,14.5h10.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,13.25,1.5Z"/>
    </svg>
  )
};
