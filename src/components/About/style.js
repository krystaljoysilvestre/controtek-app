import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 56px 0;
`;

export const Container = styled.div`
  padding: 0 56px;
`;

export const Row = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  position: relative;
`;

export const Paper = styled.div`
  background: #ff391a;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 57%;
  padding: 56px;
  display: flex;
  max-width: 540px;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: 0.2px;

  p {
    margin-top: 0;
    margin-bottom: 32px;
  }

  p:last-child {
    margin: 0;
  }
`;

export const Background = styled.div`
  width: 43%;
  display: flex;
  justify-content: end;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 540px;
`;

export const Title = styled.h4`
  margin-bottom: 40px;
  color: #ffffff;
  font-family: "Funnel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;
