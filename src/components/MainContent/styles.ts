import styled from "styled-components";

export const Container = styled.div`
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

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 800px;
`;

export const MainContentPage = styled.div`
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
