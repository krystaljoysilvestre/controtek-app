import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  background: #ff391a;
  padding: 16px 0px;

  @media ${device.mobileL} {
    padding: 40px 0px;
  }

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
  max-width: 1328px;
  margin: 0 auto;
  position: relative;
`;

export const Paper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;

  @media (min-width: 991px) {
    flex-direction: row;
    height: 450px;
  }

  @media ${device.laptop} {
    height: 550px;
  }

  @media ${device.laptopL} {
    height: 682px;
  }
`;

export const Link = styled.a`
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
`;

export const Content = styled.div`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;

  @media ${device.tablet} {
    padding: 40px;
  }

  @media (min-width: 991px) {
    flex-basis: 33%;
  }

  @media ${device.laptop} {
    padding: 56px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    gap: 24px;
  }

  @media ${device.laptop} {
    gap: 40px;
  }
`;

export const Heading = styled.div`
  color: #707070;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: 0.14px;

  @media ${device.tablet} {
    font-size: 18px;
    letter-spacing: 0.18px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    letter-spacing: 0.24px;
  }
`;

export const Headline = styled.h1`
  color: #000000;
  leading-trim: both;
  text-edge: cap;
  margin: 0;
  font-family: "Funnel Display", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.8px;
  font-size: 32px;

  @media ${device.mobileM} {
    font-size: 40px;
  }

  @media ${device.tablet} {
    max-width: 428px;
    font-size: 42px;
    letter-spacing: -1.12px;
  }

  @media ${device.laptop} {
    font-size: 48px;
  }

  @media ${device.laptopL} {
    font-size: 56px;
  }
`;

export const Actions = styled.div`
  display: contents;
`;

export const Background = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1;
`;

export const MobileImageContainer = styled.div`
  position: relative;
  height: 300px;

  @media ${device.tablet} {
    height: 400px;
  }

  @media (min-width: 800px) {
    height: 450px;
  }

  @media (min-width: 991px) {
    display: none;
  }
`;

export const MobileImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.building-bg {
    top: 35%;
  }
`;

export const DesktopImage = styled.img`
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: none;

  @media (min-width: 991px) {
    display: block;
    min-height: 450px;
  }

  @media ${device.laptop} {
    min-height: 550px;
  }

  @media ${device.laptopL} {
    min-height: 682px;
  }
`;
