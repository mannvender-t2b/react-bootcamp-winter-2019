import React from "react";
import styled from "styled-components";

const Box = styled.div`
  flex-direction: column;
  display: flex;
  flex-grow: 2;
  background: gray;
  height: 1000px;
`;

const DashboardPage = () => {
  return <Box>This is DashboardPage</Box>;
};

export default DashboardPage;
