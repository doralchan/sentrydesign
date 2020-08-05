import React from 'react';
import styled from '@emotion/styled';
import theme from '../styles/theme';

export default {
  title: 'Colors',
};

export const Basics = (() => {
  const colorsToDisplay = Object.entries(theme).filter(([_name, val]) => {
    return typeof val === 'string' && val.match(/^\#[0-9a-fA-F]{6}$/);
  });

  return (
    <Swatches>
      {colorsToDisplay.map(([name, color]) => (
        <Swatch key={name} color={color}>
          {name}
        </Swatch>
      ))}
    </Swatches>
  );
});

const Swatches = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 16px;
`;

const Swatch = styled('div')`
  height: 150px;
  background-color: ${p => p.color};
`;

