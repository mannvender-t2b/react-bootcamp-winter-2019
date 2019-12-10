import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  min-width: 300px;
  height: 100%;
  flex-direction: column;
  background: black;
`;

const Footer = () => {
  return <Box>This is sidebar</Box>;
};

export default Footer;
