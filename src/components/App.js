import React from 'react';
import styled from '@emotion/styled'
import {
  IconActivity,
  IconAdd,
  IconArrow,
  IconAttachment,
  IconBell,
  IconBookmark,
  IconBranch,
  IconBroadcast,
  IconCalendar,
  IconChat,
  IconCheckmark,
  IconChevron,
  IconClock
} from '../assets';

function App() {
  return (
    <Container>
      <IconActivity />
      <IconAdd />
      <IconAdd circle={true} />
      <IconArrow />
      <IconArrow direction='right' />
      <IconArrow direction='down' />
      <IconArrow direction='left' />
      <IconAttachment />
      <IconBell />
      <IconBookmark />
      <IconBookmark fill={true} />
      <IconBranch />
      <IconBroadcast />
      <IconCalendar />
      <IconChat />
      <IconCheckmark />
      <IconCheckmark circle={true} />
      <IconChevron />
      <IconChevron direction='right' />
      <IconChevron direction='down' />
      <IconChevron direction='left' />
      <IconChevron circle={true} />
      <IconChevron direction='right' circle={true} />
      <IconChevron direction='down' circle={true} />
      <IconChevron direction='left' circle={true} />
      <IconClock />
    </Container>
  );
}

const Container = styled('div')`
  display: flex;
`

export default App;
