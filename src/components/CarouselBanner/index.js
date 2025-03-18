import { useRef } from "react";
import { EffectCreative, Navigation } from "swiper/modules";
import useIsMobile from "../../hooks/isMobile";
import manufacturingImg from "../../assets/images/carousel-banner/manufacturing-efficiency.jpg";
import manufacturingImgSm from "../../assets/images/carousel-banner/manufacturing-efficiency_mobile.jpg";
import equipmentImg from "../../assets/images/carousel-banner/equipment-efficiency.jpg";
import equipmentImgSm from "../../assets/images/carousel-banner/equipment-efficiency_mobile.jpg";
import buildingImg from "../../assets/images/carousel-banner/building.jpg";
import buildingImgSm from "../../assets/images/carousel-banner/buildings_mobile.jpg";
import solutionsImg from "../../assets/images/carousel-banner/solutions.jpg";
import solutionsImgSm from "../../assets/images/carousel-banner/solutions_mobile.jpg";
import {
  SwiperContainer,
  StyledSwiper,
  StyledSwiperSlide,
  SwiperControls,
  LeftControl,
  RightControl,
  Container,
  Row,
  Paper,
  Content,
  Background,
  DesktopImage,
  MobileImageContainer,
  MobileImage,
  Title,
  SquareBullet,
  Heading,
  Body,
  Headline,
  Paragraph,
} from "./style";

const CarouselBanner = () => {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  const onSlideChange = (swiper) => {
    const currentSlide = swiper.realIndex;
    let bgColor = "#FF391A";

    if (currentSlide === 1) {
      bgColor = "#FFA6D7";
    } else if (currentSlide === 2) {
      bgColor = "#FFCB44";
    } else if (currentSlide === 3) {
      bgColor = "#52E2C8";
    }

    const container = document.getElementById("carouse-banner-container");
    container.style.backgroundColor = bgColor;
  };

  return (
    <SwiperContainer id="carouse-banner-container">
      <Container>
        <Row>
          <StyledSwiper
            grabCursor={true}
            loop={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                translate: ["0%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[EffectCreative, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={onSlideChange}
          >
            <StyledSwiperSlide>
              <Paper>
                <Content>
                  <Heading>
                    <SquareBullet style={{ background: "#FF391A" }} />
                    <Title>INDUSTRIAL INTERNET OF THINGS</Title>
                  </Heading>
                  <Body>
                    <Headline>
                      Improve your manufacturing efficiency today
                    </Headline>
                    <Paragraph>
                      The reality is digitalization impacts business. Let
                      Controtek help you realize these potentials.
                    </Paragraph>
                  </Body>
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
                      src={manufacturingImg}
                      alt="Improve your manufacturing efficiency today"
                    />
                  )}
                </Background>
              </Paper>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <Paper>
                <Content>
                  <Heading>
                    <SquareBullet style={{ background: "#FFA6D7" }} />
                    <Title>Overall Equipment Efficiency</Title>
                  </Heading>
                  <Body>
                    <Headline>Maximize efficiency with TraceOEE™</Headline>
                    <Paragraph>
                      TraceOEE™ delivers real-time process visibility, tracking
                      downtime, losses, and schedules to drive continuous
                      efficiency improvements.
                    </Paragraph>
                  </Body>
                </Content>
                <Background>
                  {isMobile ? (
                    <MobileImageContainer>
                      <MobileImage
                        src={equipmentImgSm}
                        alt="Maximize efficiency with TraceOEE™"
                      />
                    </MobileImageContainer>
                  ) : (
                    <DesktopImage
                      src={equipmentImg}
                      alt="Maximize efficiency with TraceOEE™"
                    />
                  )}
                </Background>
              </Paper>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <Paper>
                <Content>
                  <Heading>
                    <SquareBullet style={{ background: "#FFCB44" }} />
                    <Title>Smart Building Automation</Title>
                  </Heading>
                  <Body>
                    <Headline>Smart and efficient buildings</Headline>
                    <Paragraph>
                      Controtek offers scalable solutions for energy savings,
                      LEED automation, and green building integration, making
                      buildings smarter and more sustainable.
                    </Paragraph>
                  </Body>
                </Content>
                <Background>
                  {isMobile ? (
                    <MobileImageContainer>
                      <MobileImage
                        className="building-bg"
                        src={buildingImgSm}
                        alt="Smart and efficient buildings"
                      />
                    </MobileImageContainer>
                  ) : (
                    <DesktopImage
                      src={buildingImg}
                      alt="Smart and efficient buildings"
                    />
                  )}
                </Background>
              </Paper>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <Paper>
                <Content>
                  <Heading>
                    <SquareBullet style={{ background: "#52E2C8" }} />
                    <Title>Smart Automation Solutions</Title>
                  </Heading>
                  <Body>
                    <Headline>Automation for every industry</Headline>
                    <Paragraph>
                      We deliver innovative, customized automation solutions for
                      food & beverage, sugar, pulp & paper, cement, water,
                      transportation, power, oil & gas, and infrastructure.
                    </Paragraph>
                  </Body>
                </Content>
                <Background>
                  {isMobile ? (
                    <MobileImageContainer>
                      <MobileImage
                        src={solutionsImgSm}
                        alt="Smart and efficient buildings"
                      />
                    </MobileImageContainer>
                  ) : (
                    <DesktopImage
                      src={solutionsImg}
                      alt="Smart and efficient buildings"
                    />
                  )}
                </Background>
              </Paper>
            </StyledSwiperSlide>
          </StyledSwiper>
          <SwiperControls>
            <LeftControl className="custom-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10.437 14.6667H26.6663V17.3333H10.437L17.589 24.4853L15.7037 26.3707L5.33301 16L15.7037 5.62933L17.589 7.51467L10.437 14.6667Z"
                  fill="black"
                />
              </svg>
            </LeftControl>
            <RightControl className="custom-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M21.5623 14.6667L14.4103 7.51467L16.2957 5.62933L26.6663 16L16.2957 26.3707L14.4103 24.4853L21.5623 17.3333H5.33301V14.6667H21.5623Z"
                  fill="black"
                />
              </svg>
            </RightControl>
          </SwiperControls>
        </Row>
      </Container>
    </SwiperContainer>
  );
};

export default CarouselBanner;
