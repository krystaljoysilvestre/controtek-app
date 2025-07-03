import styled from "styled-components";
import { device } from "../../constants/devices";

export const Wrapper = styled.div`
  background: #ff391a;
  padding: 16px 0;

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
  position: relative;
`;

export const Paper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 991px) {
    flex-direction: row;
  }

  @media ${device.laptopL} {
    height: 635px;
  }
`;

export const Background = styled.div`
  max-height: 380px;
  overflow: hidden;

  @media (min-width: 991px) {
    position: relative;
    max-height: 100%;
    flex: 1;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-top: -1px;

  @media (min-width: 991px) {
    margin: 0;
    position: absolute;
    max-height: calc(100% + 1px);
    top: 50%;
    left: 65%;
    transform: translate(-50%, -50%);
    width: auto;
    height: calc(100% + 1px);
  }

  @media ${device.laptopL} {
    top: -1px;
    left: 0;
    width: auto;
    height: 636px;
    transform: none;
  }
`;

export const Content = styled.div`
  padding: 40px 16px;
  gap: 30px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 40px;
  }

  @media (min-width: 991px) {
    width: 35%;
  }

  @media ${device.laptopL} {
    flex: unset;
    width: 33%;
  }
`;

export const Headline = styled.h3`
  margin: 0;
  color: #000000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.24px;

  @media ${device.tablet} {
    font-size: 40px;
    letter-spacing: -0.4px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  color: #707070;
  font-family: "Funnel Sans";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.12px;

  @media ${device.tablet} {
    font-size: 16px;
    letter-spacing: 0.16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormAction = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const TextField = styled.input`
  border: 1px solid #707070;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: #000000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;

  &::placeholder {
    color: #707070;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #707070;
  padding: 16px;
  color: #000000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;

  &::placeholder {
    color: #707070;
  }
`;

export const Button = styled.button``;

export const Success = styled.div`
  color: #707070;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
`;
