import styled from "styled-components";

export const StyledNav = styled.nav`
  z-index: 1;
  display: flex;
  gap: 8px;
`;

export const NavItem = styled.div`
  display: flex;
  height: 44px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
`;

export const Link = styled.a`
  border: none;
  cursor: pointer;
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
  text-decoration: none;
`;
