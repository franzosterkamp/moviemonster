import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";
import close from "../assets/close.svg";
import { keyframes } from "@emotion/core";

// const spin =

const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  background: white;
  cursor: pointer;
  outline-color: #f5c342;
`;

const Icon = styled.img`
  margin: 4px;
`;
/* animation:  1s ease ${props => props.aninmationCount} */

export default function SearchIcon({ active, onClick }) {
  return (
    <SearchButton onClick={onClick}>
      <Icon active={active} src={active ? close : search} alt="SearchButton" />
    </SearchButton>
  );
}
