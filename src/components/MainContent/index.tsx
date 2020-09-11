import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  List,
  CellMeasurer,
  CellMeasurerCache,
  AutoSizer,
} from "react-virtualized";

import api from "../../services/api";

import {
  Container,
  MainPageHeader,
  Search,
  MainContentPage,
  Header,
  Main,
} from "./styles";

import searchIcon from "../../assets/search.svg";

interface Player {
  id: string;
  name: string;
  money: number;
  email: string;
  created_at: string;
}

const MainContent: React.FC = () => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  const [players, setPlayers] = useState<Player[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadUsers(): Promise<void> {
      const response = await api.get("/users");

      setPlayers(response.data);
    }

    loadUsers();
  }, []);

  const filteredUser = players.filter(
    (player) =>
      player.name.toLowerCase().includes(String(search.toLowerCase())) ||
      String(player.id) === String(search)
  );

  return (
    <Container>
      <MainPageHeader>
        <Search>
          <div>
            <input
              type="text"
              placeholder="Search users by name, id"
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src={searchIcon} alt="Search" />
          </div>
          <section>
            <strong>Accounts:</strong>
            <span>{players.length}</span>
          </section>
        </Search>
      </MainPageHeader>

      <MainContentPage>
        <Header>
          <div>
            <ul>
              <li>Name</li>
              <li>User Id</li>
              <li>Money</li>
              <li>E-mail Address</li>
              <li>Account Created</li>
            </ul>
          </div>
        </Header>

        <Main>
          <div
            style={{
              minHeight: "min(100vh - 208px)",
            }}
          >
            <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={height}
                  rowHeight={cache.current.rowHeight}
                  deferredMeasurementCache={cache.current}
                  rowCount={filteredUser.length}
                  rowRenderer={({ key, index, style, parent }) => {
                    const player = filteredUser[index];

                    return (
                      <CellMeasurer
                        cache={cache.current}
                        parent={parent}
                        columnIndex={0}
                        rowIndex={index}
                        key={key}
                      >
                        <ul style={style}>
                          <li>
                            <Link
                              to={`/users/${player.id}`}
                              style={{
                                textDecoration: "none",
                                color: "var(--white)",
                                fontSize: "12px",
                              }}
                              className="link"
                            >
                              <span>{player.name}</span>
                            </Link>
                          </li>
                          <li>{player.id}</li>
                          <li>{player.money}</li>
                          <li>{player.email}</li>
                          <li>{player.created_at}</li>
                        </ul>
                      </CellMeasurer>
                    );
                  }}
                />
              )}
            </AutoSizer>
          </div>
        </Main>
      </MainContentPage>
    </Container>
  );
};

export default MainContent;
