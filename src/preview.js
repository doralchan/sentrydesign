import React from 'react';
import Logo from './components/logo';

import styled from '@emotion/styled';

function Preview() {
  return (
    <Landing>
      <Logo fullLogo={false} />
      <Message>      
        <h1>Sentry Design System</h1>
        <Subtext>Coming soon so hold onto your butts</Subtext>
      </Message>
    </Landing>
  );
}

const Landing = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ffffff;
  background-color: #120F15;
`;

const Message = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 0 24px 0;
`;

const Subtext = styled('p')`
  margin: 8px;
  color: #4A3E56;
`;

export default Preview;
