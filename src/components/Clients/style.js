import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 56px 0;
  background: #b1eeff;
`;

export const Container = styled.div`
  padding: 0 56px;
`;

export const Row = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  position: relative;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const Title = styled.h4`
  color: #000000;
  margin: 0;
  font-family: "Funnel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  margin: 0;
  color: #000000;
  font-family: "Funnel Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
  max-width: 344px;
`;

export const ClientLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px 56px;
  margin: 0 -5px;

  svg {
    display: block;
  }
`;
