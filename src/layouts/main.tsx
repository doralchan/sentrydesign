import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyle } from '../styles/global';
// import { ThemeProvider } from 'emotion-theming';
// import theme from '../styles/theme';

import AlertSvg from '../assets/tour-alerts.svg';
import IssueSvg from '../assets/tour-issues.svg';
import SummarySvg from '../assets/tour-summary.svg';
import TraceSvg from '../assets/tour-trace.svg';
import BuilderSvg from '../assets/tour-builder.svg';
import GraphSvg from '../assets/tour-graph.svg';
import SearchSvg from '../assets/tour-search.svg';
import QueriesSvg from '../assets/tour-queries.svg';
import DiscoverSvg from '../assets/tour-discover.svg';

const Container = styled('div')`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;
`

const Image = styled('img')`
  max-width: 380px;
  max-height: 200px;
  justify-self: center;
  align-self: center;
`;

class Main extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Image src={SummarySvg} alt='' />
        <Image src={IssueSvg} alt='' />
        <Image src={AlertSvg} alt='' />
        <Image src={TraceSvg} alt='' />
        <Image src={BuilderSvg} alt='' />
        <Image src={GraphSvg} alt='' />
        <Image src={SearchSvg} alt='' />
        <Image src={QueriesSvg} alt='' />
        <Image src={DiscoverSvg} alt='' />
      </Container>
  )}
}

export default Main;