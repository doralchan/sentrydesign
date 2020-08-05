import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

export const Container = styled('div')`
  color: ${theme.white};
  background-color: ${theme.black};
  height: 100vh;
`;

class Main extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
      </Container>
  )}
}

export default Main;