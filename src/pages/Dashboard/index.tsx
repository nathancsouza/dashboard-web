import React from "react";

import MainContent from "../../components/MainContent";
import SideBar from "../../components/SideBar";

import { Container, Wrapper } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <SideBar />
        <MainContent />
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
