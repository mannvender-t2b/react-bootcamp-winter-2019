// lib imports
import React from "react";
import styled from "styled-components";

// shared imports
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Box = styled.div`
  flex-direction: column;
  display: flex;
  height: 100vh;
`;

const LinearLayout = ({ component: Component }) => {
  console.log(Component);
  return (
    <Box>
      <Navbar />
      <Component />
      <Footer />
    </Box>
  );
};

export default LinearLayout;
