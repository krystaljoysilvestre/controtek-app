import { useRef } from "react";
import carouselTextBg1 from "../../assets/images/carousel-text/carousel-text-1_bg.jpg";
import carouselTextBg2 from "../../assets/images/carousel-text/carousel-text-2_bg.jpg";
import carouselTextBg3 from "../../assets/images/carousel-text/carousel-text-3_bg.jpg";
import { EffectFade, Navigation } from "swiper/modules";
import {
  SwiperContainer,
  StyledSwiper,
  StyledSwiperSlide,
  SwiperControlsWrapper,
  SwiperControls,
  LeftControl,
  RightControl,
  Background,
  Image,
  Center,
  Container,
  Row,
  Content,
  Title,
  Subheader,
  Paragraph,
} from "./style";

const CarouselText = () => {
  const swiperRef = useRef(null);

  return (
    <SwiperContainer>
      <StyledSwiper
        grabCursor={true}
        loop={true}
        effect={"fade"}
        navigation={{
          prevEl: ".carousel-text-prev",
          nextEl: ".carousel-text-next",
        }}
        modules={[EffectFade, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <StyledSwiperSlide>
          <Background>
            <Image
              src={carouselTextBg1}
              alt="Smart, Reliable, and Cost-Efficient Engineering"
            />
          </Background>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Title>Why Choose Controtek?</Title>
                  <Subheader>
                    Smart, Reliable, and Cost-Efficient Engineering
                  </Subheader>
                  <Paragraph>
                    Controtek is recognized for its simple, open-system
                    automation designs, ensuring cost efficiency, reliability,
                    and sustainability. By leveraging the latest in Industrial
                    Automation and Information Technology, we deliver trusted
                    solutions for multinational clients.
                  </Paragraph>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Background>
            <Image src={carouselTextBg2} alt="Innovation at Our Core" />
          </Background>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Title>Why Choose Controtek?</Title>
                  <Subheader>Innovation at Our Core</Subheader>
                  <Paragraph>
                    Innovation drives everything we do—from our leadership to
                    our engineering teams. Our solutions are built on a
                    future-proof, scalable foundation using “Design for Future”
                    principles, ensuring a transparent lifecycle from day one
                    and intelligent automation that evolves with industry
                    demands.
                  </Paragraph>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Background>
            <Image
              src={carouselTextBg3}
              alt="Excellence in Service & Support"
            />
          </Background>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Title>Why Choose Controtek?</Title>
                  <Subheader>Excellence in Service & Support</Subheader>
                  <Paragraph>
                    Strong relationships drive successful projects. Controtek’s
                    commitment to client service, employee development, and
                    sustainable practices has led to above-industry retention
                    rates for both clients and employees, ensuring long-term
                    success.
                  </Paragraph>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
      </StyledSwiper>
      <Container>
        <Row>
          <SwiperControlsWrapper>
            <SwiperControls>
              <LeftControl className="carousel-text-prev">
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
              <RightControl className="carousel-text-next">
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
          </SwiperControlsWrapper>
        </Row>
      </Container>
    </SwiperContainer>
  );
};

export default CarouselText;
