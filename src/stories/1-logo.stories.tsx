import React from 'react';
import Logo from '../components/logo';

export default {
  title: 'Logos',
  component: Logo,
};

export const Glyph = () => <Logo fullLogo={false} />;
export const Wordmark = () => <Logo />;
