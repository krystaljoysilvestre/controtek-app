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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsLargeBanner(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, contactNo, message };

    try {
      const response = await fetch(
        "https://controtek-app.vercel.app:8000/save-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Wrapper id="contact">
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
              <Form onSubmit={onSubmit}>
                <FormItem>
                  <TextField
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormItem>
                <FormItem>
                  <TextField
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </FormItem>
                <FormItem>
                  <TextField
                    type="text"
                    name="contactNumber"
                    placeholder="Contact number"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                </FormItem>
                <FormItem>
                  <TextArea
                    rows="3"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormItem>
                <FormAction>
                  <Button type="submit">Send</Button>
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
