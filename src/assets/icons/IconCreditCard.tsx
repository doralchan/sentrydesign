import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconCreditCard: React.FunctionComponent<IconProps> = ({
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
      <path d="M13.25,14H2.75A2.75,2.75,0,0,1,0,11.25V4.75A2.75,2.75,0,0,1,2.75,2h10.5A2.75,2.75,0,0,1,16,4.75v6.5A2.75,2.75,0,0,1,13.25,14ZM2.75,3.5A1.25,1.25,0,0,0,1.5,4.75v6.5A1.25,1.25,0,0,0,2.75,12.5h10.5a1.25,1.25,0,0,0,1.25-1.25V4.75A1.25,1.25,0,0,0,13.25,3.5Z"/>
      <rect x="0.75" y="5.57" width="14.5" height="1.5"/>
    </svg>
  )
};
