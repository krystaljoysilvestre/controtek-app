import aboutBg from "../../assets/images/about-us_desktop.jpg";
import aboutBgSm from "../../assets/images/about-us_mobile.jpg";
import {
  Wrapper,
  Container,
  Row,
  Paper,
  Content,
  Title,
  Subheader,
  Background,
  DesktopImage,
  MobileImageContainer,
  MobileImage,
} from "./style";

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <Row>
          <Paper>
            <Content>
              <Title>ABOUT US</Title>
              <Subheader>
                Let’s build the future of automation together
              </Subheader>
              <p>
                Founded in 2012, Controtek is a trusted system integrator
                specializing in automation, engineering, and software
                development.{" "}
                <strong>
                  Powered by Filipino ingenuity, we deliver next-gen automation,
                  electrical, and IT solutions for new and retrofit projects,
                  helping industries operate smarter.
                </strong>
              </p>
              <p>
                <strong>
                  Our high-performance automation systems and SCADA integrate
                  OEE/MES to cut costs, reduce downtime, and optimize
                  operations—with transparent pricing and no hidden fees.{" "}
                </strong>
                Backed by experts, we provide scalable solutions from
                machine-level control to full industrial integration.
              </p>
            </Content>
            <Background>
              <DesktopImage
                src={aboutBg}
                alt="About Contratek"
                loading="lazy"
              />
            </Background>
          </Paper>
          <MobileImageContainer>
            <MobileImage src={aboutBgSm} alt="About Contratek" loading="lazy" />
          </MobileImageContainer>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default About;
