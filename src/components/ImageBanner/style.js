import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  max-height: 380px;
  overflow: hidden;

  @media (min-width: 991px) {
    height: 300px;
    max-height: 100%;
  }

  @media ${device.laptop} {
    height: 350px;
  }

  @media ${device.laptopL} {
    height: 400px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: -1px;

  @media (min-width: 991px) {
    position: absolute;
    height: 300px;
    width: auto;
  }

  @media ${device.laptop} {
    height: 350px;
  }

  @media ${device.laptopL} {
    height: 400px;
  }
`;
