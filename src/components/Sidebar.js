// lib imports
import React from "react";
import styled from "styled-components";

// shared imports
import UserDropDown from "./UserDropDown";

const Box = styled.div`
  display: flex;
  min-width: 300px;
  height: 100%;
  flex-direction: column;
  background: #d8d8f3;
`;
const RoundImage = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  border: solid white 5px;
`;
const userImage = <RoundImage src="https://via.placeholder.com/1500" />;

const dropDownItems = [
  { label: "Chat" },
  { label: "Calender" },
  { label: "Settings" },
  { label: "Offers" },
  { label: "Documents" }
];

const Footer = () => {
  return (
    <Box>
      <UserDropDown
        userImage={userImage}
        userName="John Doe"
        items={dropDownItems}
      />
    </Box>
  );
};

export default Footer;
