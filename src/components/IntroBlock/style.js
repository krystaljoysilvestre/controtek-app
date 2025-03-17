import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ddff02;
  min-height: 578px;
`;

export const Container = styled.div`
  padding: 0 56px;
`;

export const Row = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  position: relative;
`;

export const Center = styled.div`
  max-width: 584px;
`;

export const Title = styled.h4`
  color: #000000;
  margin-bottom: 40px;
  font-family: "Funnel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Headline = styled.h1`
  color: #000000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Display";
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1.12px;
  margin: 0;
`;
