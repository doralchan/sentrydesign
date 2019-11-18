import * as React from 'react';
import { IconProps } from '../types';
import theme from '../../theme';

export const IconStop: React.FunctionComponent<IconProps> = ({
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
      <path d="M14.53,15.27H1.47a.75.75,0,0,1-.75-.75v-13A.75.75,0,0,1,1.47.73H14.53a.75.75,0,0,1,.75.75v13A.75.75,0,0,1,14.53,15.27ZM2.22,13.77H13.78V2.23H2.22Z"/>
    </svg>
  )
};
