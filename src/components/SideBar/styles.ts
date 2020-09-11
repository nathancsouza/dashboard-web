import styled, { css } from "styled-components";

import {
  Github,
  Database,
  Person,
  Settings,
  Dashboard,
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: min(12vw);

  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  padding: 15px 25px 20px 25px;

  height: calc(100vh - 100px);
  box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.6);
  margin-top: 80px;
  margin-left: 20px;
  overflow-y: auto;

  background: var(--custom);

  border-radius: 5px;
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Title = styled.div`
  span {
    display: none;
  }

  @media (min-width: 1280px) {
    width: 100%;
    text-align: center;

    > div {
      display: none;
    }

    > span {
      display: inline;
      color: var(--white);
    }
  }
  border-bottom: 1px solid var(--white);
  padding-bottom: 10px;
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      font-weight: normal;
      font-size: 12px;
      color: var(--white);
      margin-left: 12px;
    }
    padding-right: 15px;
  }

  margin-top: 16.5px;
  padding: 8px 0;
  outline: 0;

  & + button {
    margin-top: 8px;
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover,
  &.active {
    span,
    svg {
      color: var(--like);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--white);
`;

export const DatabaseIcon = styled(Database)`
  ${iconCSS}
`;

export const SettingsIcon = styled(Settings)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const DashboardIcon = styled(Dashboard)`
  ${iconCSS}
`;

export const Botside = styled.div`
  > strong {
    display: none;
  }

  @media (min-width: 1280px) {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  > strong {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    margin-left: 10px;

    > strong {
      display: inline;
      color: var(--white);
      font-size: 10px;
      margin-left: 12px;
      white-space: nowrap;
    }
  }
`;

export const DevIcon = styled(Github)`
  display: flex;
  width: 18px;
  height: 18px;
  color: var(--white);
  cursor: pointer;
  &:hover {
    > path {
      color: var(--like);
    }
  }
`;
