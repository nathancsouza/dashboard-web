import React from "react";

import {
  Container,
  Topside,
  Title,
  MenuButton,
  DashboardIcon,
  DatabaseIcon,
  SettingsIcon,
  ProfileIcon,
  Botside,
  ProfileData,
  DevIcon,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Title>
          <div>
            <DashboardIcon />
          </div>
          <span>Dashboard</span>
        </Title>

        <MenuButton>
          <DatabaseIcon />
          <span>Users database</span>
        </MenuButton>

        <MenuButton>
          <SettingsIcon />
          <span>Settings</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon className="active" />
          <span>Profile</span>
        </MenuButton>
      </Topside>
      <Botside>
        <ProfileData>
          <div>
            <DevIcon />
          </div>
          <strong>Nathan Souza</strong>
        </ProfileData>
      </Botside>
    </Container>
  );
};

export default SideBar;
