import React from "react";
import { FiLogOut, FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom";

import defaultAvatar from "../../assets/default-avatar.png";
import dashboard from "../../assets/dashboard.svg";
import users from "../../assets/users.svg";
import support from "../../assets/support.svg";
import filter from "../../assets/filter.svg";
import search from "../../assets/search.svg";

import {
  Container,
  Header,
  Content,
  LeftContent,
  RightContent,
  LeftContentText,
  WrapperContent,
  Profile,
  ProfileContent,
  AvatarContent,
  ProfileText,
  Support,
  SupportText,
  SupportContent,
  MainPage,
  MainPageHeader,
  LeftMain,
  RightMain,
  MainContent,
  Footer,
} from "./styles";

const Dashboard: React.FC = () => (
  <Container>
    <Header>
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
    </Header>

    <WrapperContent>
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
                <img src={users} alt="Users" />
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

      <MainPage>
        <MainPageHeader>
          <LeftMain>
            <button type="button">
              <img src={filter} alt="Filter" />
              <span>FILTER</span>
            </button>
            <div>
              <input type="text" placeholder="Search users by name, id" />
              <img src={search} alt="Search" />
            </div>
          </LeftMain>
          <RightMain>
            <button type="button">
              <span>SHOW USER</span>
            </button>
            <button type="button">
              <span>EDIT USER</span>
            </button>
            <button type="button">
              <span>BAN USER</span>
            </button>
          </RightMain>
        </MainPageHeader>

        <MainContent>
          <header>
            <ul>
              <li>Name</li>
              <li>User Id</li>
              <li>Money</li>
              <li>E-mail Address</li>
              <li>Account Created</li>
            </ul>
          </header>

          <main>
            <ul>
              <li>Nathan Souza</li>
              <li>DEV2222</li>
              <li>$ 3,000,000.00</li>
              <li>nathancsouza@gmail.com</li>
              <li>04/28/2018</li>
            </ul>
            <ul>
              <li>Nathan Souza</li>
              <li>DEV2222</li>
              <li>$ 3,000,000.00</li>
              <li>nathancsouza@gmail.com</li>
              <li>04/28/2018</li>
            </ul>
            <ul>
              <li>Nathan Souza</li>
              <li>DEV2222</li>
              <li>$ 3,000,000.00</li>
              <li>nathancsouza@gmail.com</li>
              <li>04/28/2018</li>
            </ul>
            <ul>
              <li>Nathan Souza</li>
              <li>DEV2222</li>
              <li>$ 3,000,000.00</li>
              <li>nathancsouza@gmail.com</li>
              <li>04/28/2018</li>
            </ul>
            <ul>
              <li>Nathan Souza</li>
              <li>DEV2222</li>
              <li>$ 3,000,000.00</li>
              <li>nathancsouza@gmail.com</li>
              <li>04/28/2018</li>
            </ul>
            <ul>
              <li>Nathan Souza</li>
              <li>DEV2222</li>
              <li>$ 3,000,000.00</li>
              <li>nathancsouza@gmail.com</li>
              <li>04/28/2018</li>
            </ul>
            <ul>
              <li>Nathan Souza</li>
              <li>DEV2222</li>
              <li>$ 3,000,000.00</li>
              <li>nathancsouza@gmail.com</li>
              <li>04/28/2018</li>
            </ul>
            <ul>
              <li>Nathan Souza</li>
              <li>DEV2222</li>
              <li>$ 3,000,000.00</li>
              <li>nathancsouza@gmail.com</li>
              <li>04/28/2018</li>
            </ul>
          </main>
        </MainContent>
        <Footer>
          <p />
          <span>© Nathan Souza. 2020</span>
        </Footer>
      </MainPage>
    </WrapperContent>
  </Container>
);

export default Dashboard;
