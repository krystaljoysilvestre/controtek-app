import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { device } from "../../constants/devices";

export const SwiperContainer = styled.div`
  position: relative;
  background-color: #ff391a;
  padding: 16 0px;
  transition: background-color 300ms ease-in-out;

  @media ${device.tablet} {
    padding: 56px 0;
  }
`;

export const StyledSwiper = styled(Swiper)``;

export const Container = styled.div`
  padding: 0 16px;

  @media ${device.tablet} {
    padding: 0 32px;
  }

  @media (min-width: 1200px) {
    padding: 0 56px;
  }
`;

export const Row = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  position: relative;
`;

export const StyledSwiperSlide = styled(SwiperSlide)``;

export const SwiperControls = styled.div`
  background: #ffffff;
  position: absolute;
  left: 0;
  z-index: 3;
  display: flex;
`;

export const LeftControl = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    display: block;
  }
`;

export const RightControl = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    display: block;
  }
`;

export const Paper = styled.div`
  background: #ffffff;
  display: flex;

  @media (min-width: 1200px) {
    height: 550px;
  }

  @media (min-width: 1300px) {
    height: 600px;
  }

  @media ${device.laptopL} {
    height: 682px;
  }
`;

export const Content = styled.div`
  padding: 56px;
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
`;

export const SquareBullet = styled.div`
  width: 8px;
  height: 8px;
  margin-top: 6px;
  aspect-ratio: 1/1;
`;

export const Title = styled.h4`
  margin: 0;
  color: #000000;
  font-family: "Funnel Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Background = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1;
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: auto;
  height: 100%;
  object-fit: cover;

  @media (min-width: 1200px) {
    width: 100%;
    height: auto;
    min-height: 550px;
  }

  @media (min-width: 1300px) {
    width: 100%;
    height: auto;
    min-height: 550px;
  }

  @media ${device.laptopL} {
    width: auto;
    height: 682px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1260px) {
    gap: 40px;
  }
`;

export const Headline = styled.h1`
  color: #000000;
  leading-trim: both;
  text-edge: cap;
  margin: 0;
  font-family: "Funnel Display", sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1.12px;
  max-width: 428px;

  @media (min-width: 1200px) {
    font-size: 48px;
  }

  @media (min-width: 1260px) {
    font-size: 56px;
  }
`;

export const Paragraph = styled.div`
  color: #707070;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: 0.24px;

  @media (min-width: 1200px) {
    font-size: 20px;
  }

  @media (min-width: 1260px) {
    font-size: 24px;
  }
`;
