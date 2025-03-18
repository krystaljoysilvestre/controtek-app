import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  max-height: 350px;
  overflow: hidden;

  @media (min-width: 991px) {
    height: 300px;
    max-height: 100%;
  }

  @media (min-width: 1050px) {
    height: 350px;
  }

  @media ${device.laptop} {
    height: auto;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  position: relative;

  @media (min-width: 991px) {
    position: absolute;
    height: 300px;
    width: auto;
  }

  @media (min-width: 1050px) {
    height: 350px;
  }

  @media ${device.laptop} {
    position: relative;
    height: auto;
    width: 100%;
  }

  @media ${device.laptopL} {
    height: 400px;
    width: auto;
  }
`;
