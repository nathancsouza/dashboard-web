import styled from "styled-components";

export const Container = styled.header`
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
