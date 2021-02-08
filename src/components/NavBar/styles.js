import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Nav = styled.div`
  position: fixed;
  min-width: 25%;
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  min-height: 100vh;
  padding: 32px;
  background-color: #4f3e7a;
`;

export const PrimaryLink = styled(LinkRouter)`
  display: block;
  margin: 16px 24px 0px 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #f3f1f8;
  text-decoration: none;
  &:hover {
    color: #ada0cf;
  }
`;

export const SecondaryLink = styled(LinkRouter)`
  display: block;
  margin: 4px 24px 4px 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #d0c9e4;
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
  font-size: 16px;
  font-weight: 300;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
