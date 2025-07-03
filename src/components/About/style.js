import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  padding: 0px;
  background: #ff391a;

  @media ${device.tablet} {
    padding: 56px 0;
    background: #ffffff;
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
  padding: 40px 16px;
  flex: 1;

  p {
    margin-top: 0;
    margin-bottom: 24px;
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

  p:last-child {
    margin: 0;
  }

  @media ${device.tablet} {
    padding: 40px;

    p {
      font-size: 16px;
      letter-spacing: 0.2px;
      margin-bottom: 28px;
    }
  }

  @media ${device.laptop} {
    padding: 56px;

    p {
      font-size: 18px;
      margin-bottom: 32px;
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
  position: relative;
  margin-bottom: 24px;
  max-height: 400px;
  margin-left: -16px;
  margin-right: -16px;

  @media ${device.tablet} {
    max-height: 100%;
    height: 450px;
    margin-bottom: 32px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MobileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;

  @media ${device.tablet} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 900px) {
    top: 70%;
  }
`;

export const Title = styled.h4`
  margin: 0;
  margin-bottom: 24px;
  color: #ffffff;
  font-family: "Funnel Display";
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 0.6px;

  @media ${device.tablet} {
    margin-bottom: 32px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
  }

  @media ${device.laptop} {
    margin-bottom: 40px;
  }
`;
