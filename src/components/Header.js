import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Search from "./SearchBar";
import SearchButton from "./SearchButton";

const AppBar = styled.header`
  background: ${props => (props.active ? "#eee" : "#F5C342")};
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <AppBar active={showSearch}>
      {!showSearch && <Logo text="Movie Monster" />}
      {showSearch && <Search />}
      <SearchButton
        active={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      />
    </AppBar>
  );
}
