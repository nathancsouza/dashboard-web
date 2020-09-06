import styled from "styled-components";

export const Profile = styled.div`
  width: 270px;
  color: #66788a;
`;

export const ProfileContent = styled.aside`
  background: #fff;
  padding: 24px 32px;
`;

export const AvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  strong {
    padding-top: 16px;
    color: #3a3b3f;
  }

  p {
    color: #9ea0a5;
    font-size: 12px;
    margin-top: 4px;
    padding-bottom: 22px;
  }

  border-bottom: 1px solid #e6ecf0;
`;

export const ProfileText = styled.div`
  ul {
    list-style: none;

    li {
      display: flex;
      padding-top: 30px;
      img {
        width: 19px;
      }
      span {
        padding-left: 8px;
      }
    }

    li:last-child {
      margin-bottom: 230px;
    }
  }
  border-bottom: 1px solid #e6ecf0;
`;
export const Support = styled.div`
  height: 355px;
`;

export const SupportText = styled.div`
  margin-top: 24px;
  color: #9ea0a5;
  font-size: 13px;
  margin-bottom: 22px;
`;

export const SupportContent = styled.div`
  img {
    margin-right: 8px;
    width: 19px;
  }
`;
