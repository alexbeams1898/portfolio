import React, { useState } from "react";
import styled from "@emotion/styled";

import { PAGES } from "../constants/constants";

import { Home, Experience, Contact } from "./pages";
// import Home from "./pages/Home";
// import Experience from "./pages/Experience";
// import Contact from "./pages/Contact";

export default function Page({ currentPage }) {
  const PageComponent = {
    [PAGES.HOME]: Home,
    [PAGES.EXPERIENCE]: Experience,
    [PAGES.CONTACT]: Contact,
  }[currentPage];

  return <PageComponent></PageComponent>;
}
