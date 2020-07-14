import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Nav = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  min-height: 100vh;
  padding: 24px;
  background-color: #4f3e7a;
`;

export const Link = styled(LinkRouter)`
  display: block;
  margin: 8px 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #f3f1f8;
  text-decoration: none;
  &:hover {
    color: #ada0cf;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 700;
  margin: 0 auto;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 300;
  margin: 0 auto;
  margin-bottom: 40px;
  text-transform: uppercase;
`;
