import React from "react";
import NavigationLink from "./NavigationLink";

describe("<NavigationLink />", () => {
  it("mounts", () => {
    cy.mount(<NavigationLink {...{ label: "", setCurrentPage: "" }} />);
  });
});
