import styled from "styled-components";
import { device } from "../../constants/devices";

export const Container = styled.div`
  padding: 0 16px;

  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media ${device.laptop} {
    padding: 0 56px;
  }
`;

export const FluidRow = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  position: relative;
`;

export const Content = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.tablet} {
    padding: 40px;
  }

  @media ${device.laptop} {
    gap: 56px;
    padding: 56px;
  }
`;

export const BrandLogo = styled.div`
  svg {
    display: block;
    height: 36px;
    width: auto;
  }

  @media ${device.tablet} {
    svg {
      display: block;
      height: 40px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;

  p {
    max-width: 350px;
    margin: 0;
    color: #000000;
    font-family: "Funnel Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.14px;
  }

  .email {
    margin-top: -20px;
  }

  @media ${device.tablet} {
    .email {
      margin-top: 0;
    }
  }

  @media (min-width: 991px) {
    p {
      max-width: 250px;
    }
  }

  @media ${device.laptop} {
    p {
      max-width: 300px;
    }
  }

  @media ${device.laptopL} {
    p {
      max-width: 350px;
    }
  }
`;

export const Title = styled.h4`
  margin: 0;
  min-height: 20px;
  color: #000000;
  font-family: "Funnel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Bottom = styled.div`
  background: #ff391a;
  position: relative;
  overflow-x: hidden;
`;

export const BottomLogoContainer = styled.div`
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  svg {
    display: block;
    height: 87.5px;
    width: auto;
  }

  @media (min-width: 1524px) {
    display: block;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-family: "Funnel Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;

  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media (min-width: 991px) {
    height: 87.5px;
  }

  @media ${device.laptop} {
    padding: 0 56px;
  }
`;

export const Copyright = styled.div`
  color: #ffffff;
  font-family: "Funnel Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;
`;

export const Links = styled.div`
  display: none;

  @media ${device.laptop} {
    display: flex;
    gap: 40px;
  }
`;

export const Link = styled.a`
  color: #ffffff;
  text-align: right;
  font-family: "Funnel Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
