import React from "react";
import styled from "@emotion/styled";

const SearchBar = styled.input`
  text-align: center;
  border: none;
  flex-grow: 1;
  font-size: 1rem;
  height: 100%;
  padding: 0;
  outline-color: #f5c342;
`;

export default function Search() {
  const [searchValue, setSearchValue] = React.useState();

  return (
    <SearchBar
      placeholder="Enter Moviename"
      value={searchValue}
      onChange={event => setSearchValue(event.target.value)}
    ></SearchBar>
  );
}
