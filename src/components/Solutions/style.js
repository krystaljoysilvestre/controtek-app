import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 56px 0;
  background: #52e2c8;
`;

export const Container = styled.div`
  padding: 0 56px;
  flex: 1;
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

export const SolutionItems = styled.div`
  display: flex;
  gap: 64px 24px;
  width: 100%;
  flex-wrap: wrap;
`;

export const SolutionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: calc(33.33% - 16px);
  color: #000000;
  font-family: "Funnel Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Type = styled.h4`
  color: #000000;
  margin: 0;
  margin-left: 16px;
  font-family: "Funnel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Banner = styled.div`
  height: 400px;
  background: #52e2c8;

  img {
    height: 400px;
    width: auto;
    display: block;
  }
`;
