import { useState, useEffect } from "react";
import contactUsBg from "../../assets/images/contact-us_desktop.jpg";
import contactUsBgSm from "../../assets/images/contact-us_mobile.jpg";
import Button from "../Button";
import {
  Wrapper,
  Container,
  Row,
  Paper,
  Background,
  Image,
  Content,
  Headline,
  Paragraph,
  Form,
  FormItem,
  FormAction,
  TextField,
  TextArea,
} from "./style";

const ContactUs = () => {
  const [isLargeBanner, setIsLargeBanner] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeBanner(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Paper>
            <Content>
              <Headline>Talk to an automation specialist now</Headline>
              <Paragraph>
                Unlock smarter, more efficient automation with Controtek.
                Contact us to learn more about innovative, scalable solutions
                tailored to your industry.
              </Paragraph>
              <Form>
                <FormItem>
                  <TextField type="text" name="name" placeholder="Name" />
                </FormItem>
                <FormItem>
                  <TextField type="email" name="email" placeholder="Email" />
                </FormItem>
                <FormItem>
                  <TextField
                    type="text"
                    name="contactNumber"
                    placeholder="Contact number"
                  />
                </FormItem>
                <FormItem>
                  <TextArea rows="3" name="message" placeholder="Message" />
                </FormItem>
                <FormAction>
                  <Button>Send</Button>
                </FormAction>
              </Form>
            </Content>
            <Background>
              {isLargeBanner ? (
                <Image src={contactUsBg} alt="Contact us" />
              ) : (
                <Image src={contactUsBgSm} alt="Contact us" />
              )}
            </Background>
          </Paper>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ContactUs;
