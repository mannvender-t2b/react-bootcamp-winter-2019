// lib imports
import React from "react";
import styled from "styled-components";

// shared imports
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Box = styled.div`
  flex-direction: column;
  display: flex;
`;
const Container = styled(Box)`
  height: 100vh;
`;
const OverflowAutoBox = styled(Box)`
  overflow-y: auto;
  flex-grow: 1;
`;
const Row = styled.div`
  flex-grow: 1;
  display: flex;
`;

const DashboardLayout = ({ component: Component }) => {
  return (
    <Container>
      <Navbar />
      <Row>
        <Sidebar />
        <OverflowAutoBox>
          <Component />
          <Footer />
        </OverflowAutoBox>
      </Row>
    </Container>
  );
};

export default DashboardLayout;
