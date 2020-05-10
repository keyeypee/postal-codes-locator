import styled from "styled-components";

export const SearchBox = styled.input`
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  height: 40px;
  font-size: 16px;
  padding: 4px;
  transition: width 0.3s;
  text-indent: 8px;
  width: 720px;

  &:focus {
    width: 720px;
    outline: none;
    border: 1px solid #08a1b6;
  }
`;
