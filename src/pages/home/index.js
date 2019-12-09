import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 100%;
  background: gray;
  flex-grow: 1;
`;

const HomePage = () => {
  return <Box>This is home page</Box>;
};

export default HomePage;
