import React from "react";
import Navigation from "./Navigation";

describe("<Navigation />", () => {
  it("mounts", () => {
    cy.mount(<Navigation {...{ setCurrentPage: "" }} />);
  });
});
