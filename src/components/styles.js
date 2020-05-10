import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f6f6f6;
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export const NoResults = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  width: 720px;
  background-color: #fff;
  border: 1px solid #d6d6d6;
`;

export const Cover = styled.div`
  width: 96%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1320px) {
    justify-content: center;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 32px;
  margin: 24px 0 48px;
`;

export const Section = styled.div`
  &.left {
    width: 60%;
    min-width: 720px;
    position: relative;
  }
  &.right {
    width: 40%;
    margin-top: 64px;
  }
  @media (max-width: 1320px) {
    &.left {
      width: 100%;
      min-width: 720px;
      max-width: 720px;
    }
    &.right {
      width: 100%;
      max-width: 720px;
    }
  }
`;
