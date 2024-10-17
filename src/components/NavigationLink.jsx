import React, { useState } from "react";
import styled from "@emotion/styled";

export default function NavigationLink({ page, setCurrentPage }) {
  const StyledNavigationLink = styled.button`
    // Colors //
    color: #282c34;
    background-color: white;

    // Size //
    height: 48px;
    width: 120px;

    // Border //
    border: none;
    border-radius: 10%;

    // Font //
    font-size: 18px;
    font-family: "VC2 OSD Mono";

    // Flex //
    display: flex;
    justify-content: center;
    align-items: center;

    // Transition //
    transition-property: background-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    // Misc //
    cursor: pointer;

    &:hover {
      background-color: #dcdcdc;
    }
  `;

  return (
    <StyledNavigationLink
      onClick={() => {
        setCurrentPage(page);
      }}
    >
      {page}
    </StyledNavigationLink>
  );
}
