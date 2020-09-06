import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import Footer from "../Footer";

import filter from "../../assets/filter.svg";
import searchIcon from "../../assets/search.svg";

import {
  Container,
  MainPageHeader,
  LeftMain,
  RightMain,
  MainContentWrapper,
  MainContentPage,
} from "./styles";

interface User {
  id: string;
  name: string;
  money: number;
  email: string;
  created_at: string;
}

const MainContent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadUsers(): Promise<void> {
      const response = await api.get("/users");

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(String(search.toLowerCase()))
  );

  return (
    <Container>
      <MainPageHeader>
        <LeftMain>
          <button type="button">
            <img src={filter} alt="Filter" />
            <span>FILTER</span>
          </button>
          <div>
            <input
              type="text"
              placeholder="Search users by name, id"
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src={searchIcon} alt="Search" />
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

      <MainContentWrapper>
        <MainContentPage>
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
            {filteredUser &&
              filteredUser.map((user) => (
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "#3a3b3f" }}
                    >
                      {user.name}
                    </Link>
                  </li>
                  <li>{user.id}</li>
                  <li>{user.money}</li>
                  <li>{user.email}</li>
                  <li>{user.created_at}</li>
                </ul>
              ))}
          </main>
        </MainContentPage>
        <Footer />
      </MainContentWrapper>
    </Container>
  );
};

export default MainContent;
