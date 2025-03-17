import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperContainer = styled.div`
  position: relative;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

export const Container = styled.div`
  padding: 0 56px;
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
  height: 540px;
`;

export const SwiperControlsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SwiperControls = styled.div`
  width: 100%;
  max-width: 720px;

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
  height: 540px;
  width: auto;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 56px;
`;

export const Title = styled.h4`
  margin: 0;
  color: #fff;
  font-family: "Funnel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Subheader = styled.h3`
  margin: 0;
  color: #ffffff;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Display";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.4px;
`;

export const Paragraph = styled.div`
  color: #ffffff;
  font-family: "Funnel Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
`;
