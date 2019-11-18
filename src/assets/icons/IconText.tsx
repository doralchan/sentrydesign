import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconText: React.FunctionComponent<IconProps> = ({
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
      <path d="M13.25,16H2.75A2.75,2.75,0,0,1,0,13.25V2.75A2.75,2.75,0,0,1,2.75,0h10.5A2.75,2.75,0,0,1,16,2.75v10.5A2.75,2.75,0,0,1,13.25,16ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v10.5A1.25,1.25,0,0,0,2.75,14.5h10.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,13.25,1.5Z"/>
      <path d="M12.33,5.52a.75.75,0,0,1-.75-.75V4.33H4.42v.44a.75.75,0,0,1-1.5,0V3.58a.76.76,0,0,1,.75-.75h8.66a.76.76,0,0,1,.75.75V4.77A.76.76,0,0,1,12.33,5.52Z"/>
      <rect x="7.25" y="3.58" width="1.5" height="8.83"/>
      <path d="M9,13.17H7a.75.75,0,0,1,0-1.5H9a.75.75,0,0,1,0,1.5Z"/>
    </svg>
  )
};
