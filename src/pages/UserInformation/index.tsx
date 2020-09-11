import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Container, UserInfo, Wrapper } from "./styles";

import api from "../../services/api";

interface Player {
  id: string;
  name: string;
  money: string;
  email: string;
  created_at: string;
}

const UserInformation: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  const { params } = useRouteMatch<Player>();

  useEffect(() => {
    api.get(`users/${params.id}`).then((response) => {
      setPlayers(response.data);
    });
  }, [params.id]);

  return (
    <Container>
      <Wrapper>
        <UserInfo>
          {players &&
            players.map((player) => (
              <h1 key={player.id}>{`Hello ${player.name}`}</h1>
            ))}
        </UserInfo>
      </Wrapper>
    </Container>
  );
};

export default UserInformation;
