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
} from "./style";

const Footer = () => {
  return (
    <>
      <Container>
        <FluidRow>
          <Content>
            <BrandLogo>
              <Logo />
            </BrandLogo>
            <Row>
              <Column>
                <div>
                  <Title>Contact us</Title>
                  <p>info@controtek.com</p>
                  <p>+632 8579 1110</p>
                </div>
                <div>
                  <Title>SUPPORT Hotline</Title>
                  <p>+632 7507 5518</p>
                </div>
              </Column>
              <Column>
                <div>
                  <Title>MANILA</Title>
                  <p>
                    29F Parkway Corporate Center Corporate Ave. cor. Parkway
                    Place, Filinvest City, Alabang, Muntinlupa, Philippines 1781
                  </p>
                </div>
                <div>
                  <p className="email">sales.ph@controtek.com</p>
                </div>
              </Column>
              <Column>
                <div>
                  <Title>Singapore</Title>
                  <p>18 Boon Lay Way #07-146 Tradehub 21, Singapore 609966</p>
                </div>
                <div className="email">
                  <p>sales.sg@controtek.com</p>
                </div>
              </Column>
            </Row>
          </Content>
        </FluidRow>
      </Container>
      <Bottom>
        <BottomLogoContainer>
          <BottomLogo />
        </BottomLogoContainer>
        <Container>
          <FluidRow>
            <BottomContent>
              <Copyright>
                © 2025 Controtek Solutions, All rights reserved
              </Copyright>
            </BottomContent>
          </FluidRow>
        </Container>
      </Bottom>
    </>
  );
};

export default Footer;
