import React from "react";

import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import SideBar from "../../components/SideBar";

import { Container, WrapperContent } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <WrapperContent>
        <SideBar />
        <MainContent />
      </WrapperContent>
    </Container>
  );
};

export default Dashboard;
