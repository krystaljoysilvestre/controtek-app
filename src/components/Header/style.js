import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  background: #ffffff;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 56px;

  @media ${device.tablet} {
    padding: 0 16px;
    height: 72px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

export const Brand = styled.div`
  z-index: 2;

  svg {
    display: block;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .brand-logo {
    height: 62px;
    width: auto;
    margin-top: -2px;
  }

  .brand-name {
    display: none;
  }

  @media ${device.tablet} {
    .brand-logo {
      margin-top: 0;
      height: 44px;
    }
  }

  @media ${device.laptop} {
    .brand-logo {
      height: auto;
      width: auto;
    }

    .brand-name {
      display: block;
    }
  }
`;

export const Link = styled.a`
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

export const DesktopNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const DesktopActions = styled.div`
  z-index: 2;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const MobileActions = styled.div`
  display: flex;
  margin-right: 16px;

  svg {
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 16px;
  width: 24px;
  padding: 3px 0;
  cursor: pointer;
  -webkit-transition: 0.08s;
  transition: 0.08s;
  z-index: 9;

  div {
    position: relative;
    display: block;
    width: 19px;
    height: 2px;
    background: #000000;
    -webkit-transition: 0.08s;
    transition: 0.08s;
  }

  &.cross {
    div:nth-of-type(1) {
      -webkit-transform: translateY(7px) rotate(-45deg);
      -ms-transform: translateY(7px) rotate(-45deg);
      transform: translateY(7px) rotate(-45deg);
    }

    div:nth-of-type(2) {
      opacity: 0;
    }

    div:nth-of-type(3) {
      -webkit-transform: translateY(-7px) rotate(45deg);
      -ms-transform: translateY(-7px) rotate(45deg);
      transform: translateY(-7px) rotate(45deg);
    }
  }
`;
