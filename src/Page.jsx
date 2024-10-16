import { useState } from "react";
import styled from "@emotion/styled";

import { PAGES } from "./constants";

import Home from "./Home";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Page({ currentPage }) {
  const PageComponent = {
    [PAGES.HOME]: Home,
    [PAGES.EXPERIENCE]: Experience,
    [PAGES.CONTACT]: Contact,
  }[currentPage];

  return <PageComponent></PageComponent>;
}
