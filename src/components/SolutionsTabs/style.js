import styled, { keyframes } from "styled-components";
import {
  Tab as RTTab,
  Tabs as RTTabs,
  TabList as RTTabList,
  TabPanel as RTTabPanel,
} from "react-tabs";
import { device } from "../../constants/devices";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  background: #f1f1f1;
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
  max-width: 1330px;
  margin: 0 auto;
`;

export const Title = styled.h4`
  color: #000000;
  margin: 0;
  margin-bottom: 24px;
  font-family: "Funnel Display";
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.6px;

  @media ${device.tablet} {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
  }
`;

export const SquareBullet = styled.div`
  width: 8px;
  height: 8px;
  aspect-ratio: 1/1;
  background: ${(props) => props.color || "#000"};
`;

export const TabsContainer = styled.div`
  margin-top: 32px;
`;

export const Tabs = styled(RTTabs)`
  display: flex;
  position: relative;
`;

export const TabList = styled(RTTabList)`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 290px;

  @media (min-width: 1300px) {
    width: 300px;
  }

  @media (min-width: 1350px) {
    width: 320px;
  }

  @media ${device.laptopL} {
    width: 332px;
  }
`;

export const Tab = styled(RTTab)`
  padding: 0 20px;
  height: 58px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000;
  font-family: "Funnel Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  &.react-tabs__tab--selected {
    background: #fff;
  }

  &:hover:not(.react-tabs__tab--selected) {
    background: #e8e8e8;
  }

  @media (min-width: 1250px) {
    height: 60px;
  }

  @media (min-width: 1300px) {
    height: 65px;
  }

  @media (min-width: 1350px) {
    font-size: 15px;
    letter-spacing: 0.75px;
  }

  @media (min-width: 1400px) {
    height: 70px;
  }

  @media ${device.laptopL} {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
`;

export const TabPanelContainer = styled.div`
  flex: 1;
  position: relative;
  background: #fff;
`;

export const TabPanel = styled(RTTabPanel)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  animation: ${fadeIn} ease 0.75s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media (min-width: 1300px) {
    padding: 40px;
    gap: 40px;
  }

  @media ${device.laptopL} {
    padding: 48px;
    gap: 48px;
  }
`;

export const Background = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
`;

export const SolutionHeading = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;

  @media (min-width: 1300px) {
    gap: 12px;
  }

  @media (min-width: 1400px) {
    gap: 16px;
  }
`;

export const SolutionName = styled.h2`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Display";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.64px;
  margin: 0;

  @media (min-width: 1300px) {
    font-size: 40px;
    letter-spacing: -0.8px;
  }

  @media (min-width: 1400px) {
    font-size: 45px;
    letter-spacing: -0.9px;
  }

  @media ${device.laptopL} {
    font-size: 48px;
    letter-spacing: -0.96px;
  }
`;

export const Solution = styled.h4`
  color: #000;
  font-family: "Funnel Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: 1350px) {
    font-size: 15px;
    letter-spacing: 0.75px;
  }

  @media ${device.laptopL} {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
`;

export const SolutionDescription = styled.p`
  margin: 0;
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: 0.18px;

  @media (min-width: 1300px) {
    font-size: 20px;
    letter-spacing: 0.2px;
  }

  @media (min-width: 1400px) {
    font-size: 24px;
    letter-spacing: 0.24px;
  }
`;
