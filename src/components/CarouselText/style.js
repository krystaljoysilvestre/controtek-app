import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { device } from "../../constants/devices";

export const SwiperContainer = styled.div`
  position: relative;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
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

export const StyledSwiperSlide = styled(SwiperSlide)`
  background: #4200e8;
  color: #ffffff;
  position: relative;
  height: 370px;

  @media ${device.mobileL} {
    height: 340px;
  }

  @media ${device.tablet} {
    height: 380px;
  }

  @media (min-width: 991px) {
    height: 420px;
  }

  @media ${device.laptop} {
    height: 500px;
  }

  @media ${device.laptopL} {
    height: 540px;
  }
`;

export const SwiperControlsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 16px;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 880px) {
    left: 16px;
  }

  @media (min-width: 880px) and (max-width: 990px) {
    left: 32px;
  }

  @media ${device.laptop} {
    left: 0;
  }
`;

export const SwiperControls = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 56px;
  display: flex;
`;

export const LeftControl = styled.div`
  background: #ffffff;
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
  background: #ffffff;
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

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

export const Image = styled.img`
  display: block;
  height: 370px;
  width: auto;

  @media ${device.mobileL} {
    height: 340px;
  }

  @media ${device.tablet} {
    height: 380px;
  }

  @media (min-width: 991px) {
    height: 420px;
  }

  @media ${device.laptop} {
    height: 500px;
  }

  @media ${device.laptopL} {
    height: 540px;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  margin-left: 75px;

  @media (min-width: 991px) {
    padding-top: 80px;
    margin-left: 0;
  }

  @media ${device.laptop} {
    padding-top: 100px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 56px;

  @media ${device.laptop} {
    gap: 40px;
  }
`;

export const Title = styled.h4`
  margin: 0;
  color: #fff;
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

export const Subheader = styled.h3`
  margin: 0;
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

export const Paragraph = styled.div`
  color: #ffffff;
  font-family: "Funnel Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: 0.12px;

  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.16px;
  }
`;
