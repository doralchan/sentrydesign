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
  IconClock,
  IconClose,
  IconCode,
  IconCommit,
  IconCopy,
  IconCreditCard,
  IconDashboard,
  IconDelete,
  IconDocs,
  IconDownload,
  IconEdit,
  IconEllipsis,
  IconFile,
  IconFilter,
  IconFire,
  IconFix,
  IconFolder,
  IconGift,
  IconGithub,
  IconGrabbable,
  IconGraph,
  IconGrid,
  IconGroup,
  IconHealth,
  IconHide,
  IconHome,
  IconImage,
  IconInfo,
  IconInput,
  IconInternational,
  IconIssues,
  IconKit,
  IconLab,
  IconLaptop,
  IconLightbulb,
  IconLightning,
  IconLink,
  IconList,
  IconLocation,
  IconLock,
  IconMail,
  IconMegaphone,
  IconMenu,
  IconMobile,
  IconMoon,
  IconNetwork,
  IconNext,
  IconNot,
  IconOpen,
  IconPin,
  IconPlanet,
  IconPlay,
  IconPrevious,
  IconPrint,
  IconProject,
  IconProjects,
  IconQuestion,
  IconRefresh,
  IconReleases,
  IconReturn,
  IconSearch,
  IconSend,
  IconSettings,
  IconShow,
  IconSiren,
  IconSliders,
  IconSpaceship,
  IconStack,
  IconStar,
  IconStop,
  IconSubtract,
  IconSupport,
  IconSwitch,
  IconSync,
  IconTag,
  IconTelescope,
  IconText,
  IconToggle,
  IconUnlock,
  IconUpgrade,
  IconUpload,
  IconUser,
  IconWallet,
  IconWarning,
  IconWindow
} from '../assets';

function App() {
  return (
    <Container>
      <Wrapper>
        <IconActivity />
        <IconAdd />
        <IconAdd circle />
        <IconArrow />
        <IconArrow direction='right' />
        <IconArrow direction='down' />
        <IconArrow direction='left' />
        <IconAttachment />
        <IconBell />
        <IconBookmark />
        <IconBookmark solid />
        <IconBranch />
        <IconBroadcast />
        <IconCalendar />
        <IconChat />
        <IconCheckmark />
        <IconCheckmark circle />
        <IconChevron />
        <IconChevron direction='right' />
        <IconChevron direction='down' />
        <IconChevron direction='left' />
        <IconChevron circle />
        <IconChevron direction='right' circle />
        <IconChevron direction='down' circle />
        <IconChevron direction='left' circle />
        <IconClock />
        <IconClose />
        <IconClose circle />
        <IconCode />
        <IconCommit />
        <IconCopy />
        <IconCreditCard />
        <IconDashboard />
        <IconDelete />
        <IconDocs />
        <IconDownload />
        <IconEdit />
        <IconEllipsis />
        <IconFile />
        <IconFilter />
        <IconFire />
        <IconFix />
        <IconFolder />
        <IconGift />
        <IconGithub />
        <IconGrabbable />
        <IconGraph />
        <IconGraph type='circle' />
        <IconGraph type='bar' />
        <IconGrid />
        <IconGroup />
        <IconHealth />
        <IconHide />
        <IconHome />
        <IconImage />
        <IconInfo />
        <IconInput />
        <IconInternational />
        <IconIssues />
        <IconKit />
        <IconLab />
        <IconLaptop />
        <IconLightbulb />
        <IconLightning />
        <IconLightning solid />
        <IconLink />
        <IconList />
        <IconLocation />
        <IconLocation solid />
        <IconLock />
        <IconMail />
        <IconMegaphone />
        <IconMenu />
        <IconMobile />
        <IconMoon />
        <IconNetwork />
        <IconNext />
        <IconNot />
        <IconOpen />
        <IconPin />
        <IconPin solid />
        <IconPlanet />
        <IconPlay />
        <IconPrevious />
        <IconPrint />
        <IconProject />
        <IconProjects />
        <IconQuestion />
        <IconRefresh />
        <IconReleases />
        <IconReturn />
        <IconSearch />
        <IconSend />
        <IconSettings />
        <IconShow />
        <IconSiren />
        <IconSliders />
        <IconSliders direction='right' />
        <IconSpaceship />
        <IconStack />
        <IconStar />
        <IconStar solid />
        <IconStop />
        <IconSubtract />
        <IconSubtract circle />
        <IconSupport />
        <IconSwitch />
        <IconSync />
        <IconTag />
        <IconTelescope />
        <IconText />
        <IconToggle />
        <IconUnlock />
        <IconUpgrade />
        <IconUpload />
        <IconUser />
        <IconWallet />
        <IconWarning />
        <IconWindow />
      </Wrapper>
    </Container>
  );
}

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(12, 1em);
  grid-template-rows: repeat(12, 1em);
  justify-items: center;
  align-items: center;
  grid-gap: 8px;
`

export default App;
