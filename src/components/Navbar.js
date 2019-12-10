import React, { forwardRef } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
`;

const Footer = forwardRef((props, ref) => {
  return <Box ref={ref}>This is navbar</Box>;
});

export default Footer;
