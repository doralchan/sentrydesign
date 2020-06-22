import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import sentryWordmark from '../assets/logo-wordmark.svg';
import sentryGlyph from '../assets/logo-glyph.svg';

type Props = {
  fullLogo: boolean
}

class Logo extends React.Component<Props> {
  static propTypes = {
    fullLogo: PropTypes.bool,
  }

  static defaultProps = {
    fullLogo: true
  }

  render() {
    return (
      <LogoImage src={this.props.fullLogo === true ? sentryWordmark : sentryGlyph} alt='logo'/>
    )
  }
}

const LogoImage = styled('img')`
  height: 60px;
`;

export default Logo;