import { ReactComponent as Logo } from "../../assets/images/controtek-logo_footer.svg";
import { ReactComponent as BottomLogo } from "../../assets/images/controtek-logo_bottom.svg";
import {
  Container,
  FluidRow,
  Content,
  BrandLogo,
  Row,
  Column,
  Title,
  Bottom,
  BottomLogoContainer,
  BottomContent,
  Copyright,
  Links,
  Link,
} from "./style";

const Footer = () => {
  return (
    <>
      <Container>
        <FluidRow>
          <Container>
            <Content>
              <BrandLogo>
                <Logo />
              </BrandLogo>
              <Row>
                <Column>
                  <Title>Contact us</Title>
                  <p>info@controtek.com</p>
                  <p>+632 8579 1110</p>
                </Column>
                <Column>
                  <Title>MANILA</Title>
                  <p>
                    29F Parkway Corporate Center Corporate Ave. cor. Parkway
                    Place, Filinvest City, Alabang, Muntinlupa, Philippines 1781
                  </p>
                </Column>
                <Column>
                  <Title>Singapore</Title>
                  <p>18 Boon Lay Way #07-146 Tradehub 21, Singapore 609966</p>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Title>SUPPORT Hotline</Title>
                  <p>+632 7507 5518</p>
                </Column>
                <Column style={{ justifyContent: "end" }}>
                  <p>sales.ph@controtek.com</p>
                </Column>
                <Column style={{ justifyContent: "end" }}>
                  <p>sales.sg@controtek.com</p>
                </Column>
              </Row>
            </Content>
          </Container>
        </FluidRow>
      </Container>
      <Bottom>
        <BottomLogoContainer>
          <BottomLogo />
        </BottomLogoContainer>
        <Container>
          <FluidRow>
            <Container>
              <BottomContent>
                <Copyright>
                  © 2025 Controtek Solutions, All rights reserved
                </Copyright>
                <Links>
                  <Link>Privacy Policy</Link>
                  <Link>Cookie Policy</Link>
                  <Link>Terms & Conditions</Link>
                </Links>
              </BottomContent>
            </Container>
          </FluidRow>
        </Container>
      </Bottom>
    </>
  );
};

export default Footer;
