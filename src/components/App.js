import React from 'react';
import {
  IconActivity,
  IconAdd,
  IconAddCircle,
  IconArrow,
  IconAttachment
} from '../assets';

function App() {
  return (
    <div>
      <IconActivity />
      <IconAdd />
      <IconAddCircle />
      <IconArrow />
      <IconArrow direction='right' />
      <IconArrow direction='down' />
      <IconArrow direction='left' />
      <IconAttachment />
    </div>
  );
}

export default App;
