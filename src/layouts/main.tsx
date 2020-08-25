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
import CommitSvg from '../assets/tour-commits.svg';
import TerminalSvg from '../assets/tour-terminal.svg';
import ReleasesSvg from '../assets/tour-releases.svg';
import EmailSvg from '../assets/tour-email.svg';
import GraphDoubleSvg from '../assets/tour-graphdouble.svg';
import TagsSvg from '../assets/tour-tags.svg';
import BreadcrumbsSvg from '../assets/tour-breadcrumbs.svg';

const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  height: 100vh;
  margin: 40px;
`

const Image = styled('img')`
  max-width: 300px;
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
        <Image src={CommitSvg} alt='' />
        <Image src={TerminalSvg} alt='' />
        <Image src={ReleasesSvg} alt='' />
        <Image src={EmailSvg} alt='' />
        <Image src={GraphDoubleSvg} alt='' />
        <Image src={TagsSvg} alt='' />
        <Image src={BreadcrumbsSvg} alt='' />
      </Container>
  )}
}

export default Main;