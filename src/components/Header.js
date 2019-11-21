import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";

const AppBar = styled.header`
  background: #f5bd42;
  height: 55px;
`;

export default function Header() {
  return (
    <AppBar>
      <Logo text="Movie Monvster" />
    </AppBar>
  );
}
