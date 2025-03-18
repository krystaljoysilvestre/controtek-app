import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  padding: 16px 0;
  background: #52e2c8;

  @media ${device.mobileL} {
    padding: 40px 0px;
  }

  @media ${device.tablet} {
    padding: 56px 0;
  }
`;

export const Container = styled.div`
  padding: 0 16px;
  flex: 1;

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

export const Paper = styled.div`
  background: #ffffff;
  display: flex;
  gap: 64px;
  padding: 56px 0;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media ${device.tablet} {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h4`
  color: #000000;
  margin: 0;
  font-family: "Funnel Display";
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.6px;

  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
  }
`;

export const SolutionItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  @media ${device.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 64px 24px;
  }
`;

export const SolutionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #000000;
  font-family: "Funnel Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.12px;

  @media ${device.mobileL} {
    gap: 24px;
    width: calc(50% - 28px);
    font-size: 14px;
    padding-right: 12px;
    letter-spacing: 0.14px;
  }

  @media ${device.tablet} {
    gap: 24px;
    width: calc(33.33% - 48px);
    padding-right: 24px;
    font-size: 14px;
    letter-spacing: 0.14px;
  }
`;

export const Label = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SquareBullet = styled.div`
  width: 8px;
  height: 8px;
  aspect-ratio: 1/1;
`;

export const Name = styled.h4`
  color: #000000;
  margin: 0;
  font-family: "Funnel Display";
  font-size: 12px;
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

export const Type = styled.h4`
  color: #000000;
  margin: 0;
  margin-left: 16px;
  font-family: "Funnel Display";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 0.6px;

  @media ${device.tablet} {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
`;

export const Banner = styled.div`
  background: #52e2c8;
  position: relative;
  overflow: hidden;
  max-height: 380px;
  display: flex;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .gap-cover {
    border-top: 1px solid #52e2c8;
    position: absolute;
    height: 50px;
    width: 100%;
  }

  @media (min-width: 991px) {
    height: 300px;

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: auto;
      object-fit: cover;
      height: 301px;
      width: auto;
    }
  }

  @media ${device.laptop} {
    height: 350px;

    img {
      height: 351px;
    }
  }

  @media ${device.laptopL} {
    height: 400px;

    img {
      height: 401px;
    }
  }
`;
