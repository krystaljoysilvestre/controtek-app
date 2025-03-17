import styled from "styled-components";

export const Container = styled.div`
  padding: 0 56px;
`;

export const FluidRow = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  position: relative;
`;

export const Content = styled.div`
  padding: 56px 0;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

export const BrandLogo = styled.div`
  svg {
    display: block;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 24px;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    max-width: 350px;
    margin: 0;
    color: #000000;
    font-family: "Funnel Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.14px;
  }
`;

export const Title = styled.h4`
  margin: 0;
  min-height: 20px;
  color: #000000;
  font-family: "Funnel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Bottom = styled.div`
  background: #ff391a;
  position: relative;
`;

export const BottomLogoContainer = styled.div`
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  svg {
    display: block;
    height: 87.5px;
    width: auto;
  }

  @media (min-width: 1524px) {
    display: block;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  height: 87.5px;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-family: "Funnel Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;
  width: 100%;
`;

export const Copyright = styled.div`
  color: #ffffff;
  font-family: "Funnel Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;
`;

export const Links = styled.div`
  display: flex;
  gap: 40px;
`;

export const Link = styled.a`
  color: #ffffff;
  text-align: right;
  font-family: "Funnel Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
