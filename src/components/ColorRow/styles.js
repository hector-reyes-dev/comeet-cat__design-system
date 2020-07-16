import styled from "styled-components";

export const RowColor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 16px 0;
`;

export const ColorContainer = styled.div`
  max-width: 25%;
  padding: 8px;
`;

export const ColorWrap = styled.div`
  background-color: #6952a3;
  min-width: 100%;
  min-height: 40px;
  border-radius: 8px;
`;

export const ColorInfo = styled.div`
  max-width: 35%;
  padding: 8px;
`;

export const ColorInfoTitle = styled.h4`
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  color: #342951;
`;
