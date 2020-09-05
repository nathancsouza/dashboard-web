import styled from "styled-components";

/** **************************************
 * CONTAINER
 ************************************** */
export const Container = styled.div``;

/** **************************************
 * HEADER
 ************************************** */
export const Header = styled.header`
  height: 64px;
  background: #1070ca;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftContentText = styled.div`
  margin-left: 10px;
  font-size: 20px;
  color: #ffffff;
`;

export const RightContent = styled.div``;

/** **************************************
 * WRAPPER CONTENT
 ************************************** */

export const WrapperContent = styled.div`
  display: flex;
`;

/** **************************************
 * PROFILE
 ************************************** */
export const Profile = styled.div`
  width: 270px;
  color: #66788a;
`;

export const ProfileContent = styled.aside`
  background: #fff;
  max-height: 940px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

export const AvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  strong {
    margin-top: 16px;
    color: #3a3b3f;
  }

  p {
    color: #9ea0a5;
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 22px;
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
        margin-left: 8px;
      }
    }

    li:last-child {
      margin-bottom: 230px;
    }
  }
  border-bottom: 1px solid #e6ecf0;
`;
export const Support = styled.div`
  height: 400px;
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

/** **************************************
 * MAIN PAGE
 ************************************** */

export const MainPage = styled.div`
  flex: 1;
  padding: 0 30px;
  max-width: 1600px;
`;

export const MainPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
`;

export const LeftMain = styled.div`
  display: flex;

  button {
    border-radius: 5px;
    width: 106px;
    height: 36px;
    border: 0;
    background: #fafafa;
    box-shadow: 2px 2px #ccc;
  }

  span {
    margin-left: 8px;
    color: #3a3b3f;
    font-size: 14px;
  }

  div {
    display: flex;

    img {
      width: 24px;
      position: relative;
      right: 610px;
    }

    input {
      margin-left: 30px;
      border: 0;
      border-radius: 4px;
      height: 36px;
      width: 620px;
      padding: 10px 44px;
      font-size: 14px;
    }
  }
`;

export const RightMain = styled.div`
  display: flex;
  padding-left: 30px;

  button {
    border-radius: 5px;
    width: 106px;
    height: 36px;
    border: 0;
    background: #1070ca;
    box-shadow: 2px 2px #e4e7eb;
    margin-right: 23px;

    span {
      font-size: 14px;
      color: #ffffff;
      font-weight: 500;
    }
  }

  button:last-child {
    margin: 0;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e4e7eb;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    border-top: 1px solid #e4e7eb;
    align-items: center;

    li {
      width: 250px;
      height: 55px;
      padding: 18px 60px;
      font-size: 14px;
      color: #3a3b3f;
    }
  }

  main {
    li:last-child {
      color: #9ea0a5;
    }
  }
`;

/** **************************************
 * FOOTER
 ************************************** */

export const Footer = styled.div`
  max-width: 1600px;
  margin-top: 250px;

  p {
    border-top: 1px solid #cccc;
    margin-bottom: 20px;
  }
  span {
    color: #616161;
    font-size: 14px;
  }
`;
