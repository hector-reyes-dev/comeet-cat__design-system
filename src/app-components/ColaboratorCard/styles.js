import styled from "styled-components";

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
`;

export const CardColaborator = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 8px;
  width: 420px;
  height: 480px;
  padding: 32px;
  margin: 32px;
  background-color: #7424c9;
  box-shadow: 2px 8px 16px 0px rgba(0, 0, 0, 0.7);
  & h4 {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: normal;
    color: white;
    margin: 0;
  }
  & h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 34px;
    font-weight: bold;
    color: white;
    margin: 0;
  }
`;
