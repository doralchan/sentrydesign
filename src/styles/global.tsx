import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Rubik';
        src: url('./fonts/rubik-regular.woff') format('woff2'),
          url('./fonts/rubik-regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'Rubik';
        src: url('./fonts/rubik-medium.woff') format('woff2'),
          url('./fonts/rubik-medium.woff') format('woff');
        font-weight: bold;
        font-style: normal;
      }
      body {
        margin: 0;
        font-family: 'Rubik', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
      }
      h1 {
        font-size: 2.488em;
      }
      h2 {
        font-size: 2.074em;
      }
      h3 {
        font-size: 1.728em;
      }
      h4 {
        font-size: 1.44em;
      }
      h5 {
        font-size: 1.2em;
      }
      p {
        font-size: 1em;
      }
      small {
        font-size: 0.833em;
      }
    `}
  />
)
