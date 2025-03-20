import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { device } from "../../constants/devices";

export const SwiperContainer = styled.div`
  position: relative;
  background-color: #ff391a;
  padding: 16px 0px;
  transition: background-color 300ms ease-in-out;

  @media ${device.mobileL} {
    padding: 40px 0px;
  }

  @media ${device.tablet} {
    padding: 56px 0;
  }
`;

export const StyledSwiper = styled(Swiper)``;

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

export const StyledSwiperSlide = styled(SwiperSlide)``;

export const SwiperControls = styled.div`
  background: #ffffff;
  position: absolute;
  top: 330px;
  left: 0;
  z-index: 3;
  display: flex;

  @media ${device.mobileL} {
    top: 280px;
  }

  @media ${device.tablet} {
    top: 330px;
  }

  @media (min-width: 992px) {
    top: auto;
  }
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
  flex-direction: column;

  @media (min-width: 992px) {
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

export const Content = styled.div`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;

  @media ${device.mobileL} {
    height: 200px;
  }

  @media ${device.tablet} {
    padding: 40px;
    height: 250px;
  }

  @media (min-width: 992px) {
    height: auto;
    flex-basis: 33%;
  }

  @media ${device.laptop} {
    padding: 56px;
  }
`;

export const Heading = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
`;

export const SquareBullet = styled.div`
  width: 8px;
  height: 8px;
  margin-top: 4px;
  aspect-ratio: 1/1;

  @media ${device.tablet} {
    margin-top: 6px;
  }
`;

export const Title = styled.h4`
  margin: 0;
  color: #000000;
  font-family: "Funnel Display";
  font-size: 12px;
  min-height: 20px;
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

export const Background = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1;
`;

export const DesktopImage = styled.img`
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: none;

  @media (min-width: 992px) {
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

export const MobileImageContainer = styled.div`
  position: relative;
  height: 300px;

  @media ${device.tablet} {
    height: 400px;
  }

  @media (min-width: 800px) {
    height: 450px;
  }

  @media (min-width: 992px) {
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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    gap: 30px;
  }

  @media ${device.laptopL} {
    gap: 40px;
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

export const Paragraph = styled.div`
  color: #707070;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: 0.14px;

  @media ${device.tablet} {
    letter-spacing: 0.24px;
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }

  @media ${device.laptopL} {
    font-size: 24px;
  }
`;
