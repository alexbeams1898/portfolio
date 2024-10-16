import styled from "@emotion/styled";

import { PAGES } from "./constants";

import NavigationLink from "./NavigationLink";

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledNavigationLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledName = styled.h1`
  color: #282c34;
  margin-top: 0;
  font-family: "VC2 OSD Mono";
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Navigation({ setCurrentPage }) {
  return (
    <StyledNavigation>
      <StyledName>Alex Beams</StyledName>

      <StyledNavigationLinks>
        <NavigationLink {...{ page: PAGES.HOME, setCurrentPage }} />
        <NavigationLink {...{ page: PAGES.EXPERIENCE, setCurrentPage }} />
        <NavigationLink {...{ page: PAGES.CONTACT, setCurrentPage }} />
      </StyledNavigationLinks>
    </StyledNavigation>
  );
}
