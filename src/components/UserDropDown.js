import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

// shared imports
import Box from "./Box";

const UserDropDown = ({ userImage, userName, items }) => {
  return (
    <Box>
      {userImage}
      <Box direction="row">
        {userName}
        <IoIosArrowDown />
      </Box>
    </Box>
  );
};

export default UserDropDown;
