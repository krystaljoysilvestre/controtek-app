import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
`;

export const Head = styled.div`
  height: 56px;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const NavItem = styled.div`
  display: flex;
  height: 44px;
  padding: 0 16px;
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

  &:active {
    color: #ff391a;
  }
`;
