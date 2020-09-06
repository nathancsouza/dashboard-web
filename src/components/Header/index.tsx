import React from "react";
import { Link } from "react-router-dom";

import { FiLogOut, FiMonitor } from "react-icons/fi";

import {
  Container,
  Content,
  LeftContent,
  RightContent,
  LeftContentText,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <FiMonitor size={24} color="#FFFFFF" />
          <LeftContentText>Dashboard</LeftContentText>
        </LeftContent>
        <RightContent>
          <Link to="/">
            <FiLogOut size={22} color="#FFFFFF" />
          </Link>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Header;
