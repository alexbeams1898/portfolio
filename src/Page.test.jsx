import React from "react";
import Page from "./Page";

import { PAGES } from "./constants";

describe("<Page />", () => {
  it("mounts", () => {
    cy.mount(<Page {...{ currentPage: PAGES.HOME }} />);
  });
});
