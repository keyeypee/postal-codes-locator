import styled from "styled-components";

export const Container = styled.div`
  max-width: 722px;
  border: 1px solid #f6f6f6;
  border-radius: 8px;
  margin-top: 24px;
  & > div {
    background-color: #fff;
    border-radius: 8px;
  }
  div[role="rowgroup"] {
    outline: none;
  }
  div[role="row"] {
    display: flex;
    border-bottom: 1px solid #d6d6d6;
    &.ReactVirtualized__Table__headerRow {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }
    &:hover {
      background-color: #f6f6f6;
    }
    div[role="columnheader"],
    div[role="gridcell"] {
      width: 20%;
      white-space: nowrap;
      display: inline-block;
      text-overflow: ellipsis;
      &:first-child {
        width: calc(40%);
      }
      padding: 8px;
    }
    div[role="columnheader"] {
      font-weight: bold;
      background-color: #aaa;
    }
  }
`;
