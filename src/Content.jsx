import { useState } from "react";
import styled from "@emotion/styled";

import Navigation from "./Navigation";
import Page from "./Page";

import { PAGES } from "./constants";

const StyledContent = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  margin-top: 24px;
`;

export default function Content() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  return (
    <StyledContent>
      <Navigation {...{ setCurrentPage }} />
      <Page {...{ currentPage }} />
    </StyledContent>
  );
}
