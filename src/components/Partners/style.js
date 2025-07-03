import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  padding: 80px 0px;

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
  position: relative;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;
  }
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

export const Paragraph = styled.p`
  margin: 0;
  color: #000000;
  font-family: "Funnel Sans";
  font-weight: 400;
  line-height: normal;
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.12px;
  max-width: 344px;

  @media ${device.tablet} {
    font-size: 16px;

    letter-spacing: 0.16px;
  }
`;

export const PartnerLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px 32px;

  svg {
    display: block;
  }

  @media ${device.mobileL} {
    margin: 0 -5px;
    justify-content: center;
    gap: 40px 56px;
  }
`;
