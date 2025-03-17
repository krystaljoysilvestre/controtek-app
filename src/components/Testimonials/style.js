import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperContainer = styled.div`
  position: relative;
`;

export const TestimonialsIcon = styled.div`
  width: 180px;
  height: 180px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  background: #ffa6d7;
  color: #000000;
  position: relative;
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

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 360px;
`;

export const Container = styled.div`
  padding: 0 56px;
`;

export const Row = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 56px;
  height: 100%;
  justify-content: center;
`;

export const Testimonial = styled.div`
  color: #000000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: 0.24px;
`;

export const Author = styled.h4`
  margin: 0;
  color: #000000;
  font-family: "Funnel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;
