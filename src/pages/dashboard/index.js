import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: gray;
  height: 2000px;
  flex-shrink: 0;
`;

const DashboardPage = () => {
  return <Box>This is DashboardPage</Box>;
};

export default DashboardPage;
