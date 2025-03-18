import aboutBg from "../../assets/images/about-us_desktop.jpg";
import aboutBgSm from "../../assets/images/about-us_mobile.jpg";
import {
  Wrapper,
  Container,
  Row,
  Paper,
  Content,
  Title,
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
              <MobileImageContainer>
                <MobileImage
                  src={aboutBgSm}
                  alt="About Contratek"
                  loading="lazy"
                />
              </MobileImageContainer>
              <p>
                Beyond automation, our innovations also impact lives by making
                workplaces safer, reducing risks, and improving daily
                operations. From preventing equipment failures to enhancing
                workplace security, our systems ensure that organizations
                operate smoothly and responsibly.
              </p>
              <p>
                With resilience and innovation driving us forward, Controtek is
                not just building better industries—we’re creating a better,
                safer future for all.
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
        </Row>
      </Container>
    </Wrapper>
  );
};

export default About;
