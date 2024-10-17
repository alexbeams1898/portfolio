import React from "react";
import Contact from "./Contact";

describe("<Contact />", () => {
  it("mounts", () => {
    cy.mount(<Contact />);
  });
});