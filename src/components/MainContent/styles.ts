import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  min-width: min(82vw);

  /* FIREFOX */
  scrollbar-width: none;

  /* GOOGLE CHROME */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MainPageHeader = styled.div`
  margin-top: 80px;
`;

export const Search = styled.div`
  display: flex;

  div {
    background: var(--secondary);

    position: relative;
    height: 100%;
    border-radius: 5px;

    display: flex;
    align-items: center;
    padding: 5px 15px;

    input {
      color: var(--white);
      margin-left: 50px;
      width: 100%;
      padding: 0 10px 0 0;
    }

    img {
      position: absolute;
    }
  }

  section {
    margin-left: 30px;
    background: var(--secondary);
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.6);

    height: 100%;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 5px;

    strong,
    span {
      color: var(--like);
      padding: 0px 5px;
      font-weight: normal;
    }
  }
`;

export const MainContentPage = styled.div`
  margin-top: 20px;
  background: var(--secondary);
  border-radius: 5px;
`;

export const Header = styled.div`
  div {
    ul {
      list-style: none;

      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        width: 250px;
        padding: 20px 20px 20px 20px;
        color: var(--white);
        font-weight: 500;
        font-size: 12.5px;
        padding-left: 20px;
      }
    }
  }
`;

export const Main = styled.div`
  div {
    text-align: left;
    ul {
      list-style: none;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-top: 1px solid var(--outline);

      li {
        width: 250px;
        padding: 20px 20px 20px 20px;
        color: var(--white);
        font-size: 12px;

        span {
          color: var(--white);
          font-size: 12px;
        }
      }

      .link:hover {
        span {
          color: var(--like);
        }
      }
    }

    ul:last-child {
      border-bottom: 1px solid var(--outline);
    }
  }
`;
