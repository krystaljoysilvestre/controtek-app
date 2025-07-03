import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ddff02;
  min-height: 388px;

  @media ${device.tablet} {
    min-height: 500px;
  }

  @media ${device.laptop} {
    min-height: 578px;
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

export const Center = styled.div`
  max-width: 584px;
`;

export const Title = styled.h4`
  color: #000000;
  margin-bottom: 24px;
  font-family: "Funnel Display";
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.6px;
  text-transform: uppercase;

  @media ${device.tablet} {
    margin-bottom: 40px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
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
  font-size: 40px;

  @media ${device.tablet} {
    max-width: 584px;
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
