import React from 'react';
import styled from '@emotion/styled'
import theme from '../theme';
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
  IconCreditCard,
  IconDashboard,
  IconDelete,
  IconDocs,
  IconDownload,
  IconDuplicate,
  IconEdit,
  IconEllipsis,
  IconFile,
  IconFilter,
  IconFire,
  IconFix,
  IconFolder,
  IconGift,
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
  IconTelescope,
  IconText,
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
        <IconClose />
        <IconClose circle={true} />
        <IconCode />
        <IconCommit />
        <IconCreditCard />
        <IconDashboard />
        <IconDelete />
        <IconDocs />
        <IconDownload />
        <IconDuplicate />
        <IconEdit />
        <IconEllipsis />
        <IconFile />
        <IconFilter />
        <IconFire />
        <IconFix />
        <IconFolder />
        <IconGift />
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
        <IconLightning fill={true} />
        <IconLink />
        <IconList />
        <IconLocation />
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
        <IconPin fill={true} />
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
        <IconStar fill={true} />
        <IconStop />
        <IconSubtract />
        <IconSubtract circle={true} />
        <IconSupport />
        <IconSwitch />
        <IconSync />
        <IconTelescope />
        <IconText />
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
