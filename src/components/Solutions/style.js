import styled from "styled-components";
import { device } from "../../constants/devices";

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
