import styled from "styled-components";

export const RowColor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 16px;
  &:hover {
    background-color: rgba(208, 201, 228, 0.2);
  }
`;

export const ColorContainer = styled.div`
  max-width: 25%;
  padding: 8px;
  & p {
    margin: 2px;
  }
`;

export const ColorWrap = styled.div`
  background-color: ${(props) => props.inputColor || "palevioletred"};
  min-width: 100%;
  min-height: 40px;
  margin-bottom: 16px;
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
