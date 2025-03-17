import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ff391a;
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
  background: #ffffff;
  display: flex;
`;

export const Background = styled.div`
  width: 63%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 788px;
`;

export const Content = styled.div`
  width: 37%;
  padding: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h3`
  margin: 0;
  color: #000000;
  leading-trim: both;
  text-edge: cap;
  font-family: "Funnel Display";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.4px;
`;

export const Paragraph = styled.p`
  margin: 0;
  color: #707070;
  font-family: "Funnel Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
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
