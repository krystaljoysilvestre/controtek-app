import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  padding: 16px 0px;
  background: #ffffff;

  @media ${device.tablet} {
    padding: 56px 0;
  }
`;

export const Container = styled.div`
  padding: 0 16px;

  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media ${device.laptop} {
    padding: 0 56px;
  }
`;

export const Row = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  position: relative;
`;

export const Paper = styled.div`
  background: #ff391a;
  display: flex;

  @media (min-width: 1200px) {
    height: 762px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 16px;
  flex: 1;
  gap: 24px;

  p {
    margin: 0;
    color: #ffffff;
    leading-trim: both;
    text-edge: cap;
    font-family: "Funnel Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%;
    letter-spacing: 0.14px;
  }

  strong {
    font-weight: 700;
  }

  @media ${device.tablet} {
    padding: 40px;
    gap: 32px;

    p {
      font-size: 16px;
      letter-spacing: 0.2px;
    }
  }

  @media ${device.laptop} {
    padding: 56px;
    gap: 40px;

    p {
      font-size: 18px;
    }
  }

  @media (min-width: 1300px) {
    p {
      max-width: 542px;
      font-size: 20px;
    }
  }
`;

export const Background = styled.div`
  position: relative;
  overflow: hidden;
`;

export const DesktopImage = styled.img`
  height: 100%;
  width: auto;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

export const MobileImageContainer = styled.div`
  display: block;
  overflow: hidden;
  max-height: 400px;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MobileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Title = styled.h4`
  margin: 0;
  color: #ffffff;
  font-family: "Funnel Display";
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 0.6px;

  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
  }
`;

export const Subheader = styled.h3`
  margin: 0;
  max-width: 540px;
  color: #ffffff;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.24px;

  @media ${device.tablet} {
    font-size: 40px;
    letter-spacing: -0.4px;
  }
`;
