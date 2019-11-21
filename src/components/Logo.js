import React from "react";
import styled from "@emotion/styled";

const HeadLine = styled.h1`
  margin: 0;
  text-shadow: 2px 2px 2px #fcef87;
  letter-spacing: 4px;
`;

export default function Logo({ text }) {
  return <HeadLine>{text}</HeadLine>;
}
