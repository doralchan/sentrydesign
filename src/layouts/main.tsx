import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';

class Main extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}></ThemeProvider>
    );
  }
}

export default Main;