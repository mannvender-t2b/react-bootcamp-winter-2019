// lib imports
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// shared imports
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Box = styled.div`
  flex-direction: column;
  display: flex;
`;
const OverflowAutoBox = styled(Box)`
  overflow-y: auto;
  flex-grow: 1;
`;
const Row = styled.div`
  height: ${props =>
    props.navHeight
      ? document.documentElement.clientHeight - props.navHeight + "px"
      : "90vh"}
  display: flex;
`;
function calculateNavHeight(ref, setNavHeight) {
  const navHt = ref.current.clientHeight;
  setNavHeight(navHt);
}

const DashboardLayout = ({ component: Component }) => {
  const [navHeight, setNavHeight] = useState();
  const navRef = useRef();
  useEffect(() => calculateNavHeight(navRef, setNavHeight), [navRef]);
  return (
    <Box>
      <Navbar ref={navRef} />
      <Row navHeight={navHeight}>
        <Sidebar />
        <OverflowAutoBox>
          <Component />
          <Footer />
        </OverflowAutoBox>
      </Row>
    </Box>
  );
};

export default DashboardLayout;
