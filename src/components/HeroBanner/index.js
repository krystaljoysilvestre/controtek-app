import digitalizationImg from "../../assets/images/hero-banner.jpg";
import manufacturingImgSm from "../../assets/images/carousel-banner/manufacturing-efficiency_mobile.jpg";
import useIsMobile from "../../hooks/isMobile";
import { Button } from "../../components";
import {
  Wrapper,
  Container,
  Row,
  Paper,
  Content,
  Body,
  Heading,
  Headline,
  Actions,
  Link,
  Background,
  MobileImageContainer,
  MobileImage,
  DesktopImage,
} from "./style";

const HeroBanner = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Paper>
            <Content>
              <Body>
                <Heading>Engineering Ingenuity</Heading>
                <Headline>Start your digitalization journey with us.</Headline>
              </Body>
              <Actions>
                <Link href="#contact">
                  <Button>Request a demo</Button>
                </Link>
              </Actions>
            </Content>
            <Background>
              {isMobile ? (
                <MobileImageContainer>
                  <MobileImage
                    src={manufacturingImgSm}
                    alt="Improve your manufacturing efficiency today"
                  />
                </MobileImageContainer>
              ) : (
                <DesktopImage
                  src={digitalizationImg}
                  alt="Improve your manufacturing efficiency today"
                />
              )}
            </Background>
          </Paper>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default HeroBanner;
