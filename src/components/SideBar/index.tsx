import React from "react";

import defaultAvatar from "../../assets/default-avatar.png";
import dashboard from "../../assets/dashboard.svg";
import usersAvatar from "../../assets/users.svg";
import support from "../../assets/support.svg";

import {
  Profile,
  ProfileContent,
  AvatarContent,
  ProfileText,
  Support,
  SupportText,
  SupportContent,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Profile>
      <ProfileContent>
        <AvatarContent>
          <img src={defaultAvatar} alt="Avatar" />
          <strong>Nathan Souza</strong>
          <p>Admin</p>
        </AvatarContent>
        <ProfileText>
          <ul>
            <li>
              <img src={dashboard} alt="Dashboard" />
              <span>Dashboard</span>
            </li>
            <li>
              <img src={usersAvatar} alt="Users" />
              <span>Users</span>
            </li>
          </ul>
        </ProfileText>
        <Support>
          <SupportText>Support</SupportText>
          <SupportContent>
            <img src={support} alt="Support" />
            Support
          </SupportContent>
        </Support>
      </ProfileContent>
    </Profile>
  );
};

export default SideBar;
