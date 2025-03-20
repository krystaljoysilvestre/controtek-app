import { useRef } from "react";
import { EffectFade, Navigation } from "swiper/modules";

import {
  SwiperContainer,
  TestimonialsIcon,
  StyledSwiper,
  StyledSwiperSlide,
  SwiperControlsWrapper,
  SwiperControls,
  LeftControl,
  RightControl,
  Center,
  Container,
  Row,
  Content,
  Testimonial,
  Author,
} from "./style";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <SwiperContainer>
      <TestimonialsIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="30"
          viewBox="0 0 45 30"
          fill="none"
        >
          <path
            d="M0 29.6651L0 23.2651L3.84 23.2651C5.68889 23.2651 7.11111 22.8028 8.10667 21.8784C9.10222 20.8828 9.6 19.4251 9.6 17.5051L9.6 12.8117L3.84 12.8117L3.84 0.0117188L16.64 0.0117188L16.64 17.5051C16.64 21.3451 15.5733 24.3317 13.44 26.4651C11.3778 28.5984 8.39111 29.6651 4.48 29.6651L0 29.6651ZM27.7333 29.6651L27.7333 23.2651L31.5733 23.2651C33.4222 23.2651 34.8444 22.8028 35.84 21.8784C36.8356 20.8828 37.3333 19.4251 37.3333 17.5051L37.3333 12.8117L31.5733 12.8117L31.5733 0.0117188L44.3733 0.0117188L44.3733 17.5051C44.3733 21.3451 43.3067 24.3317 41.1733 26.4651C39.1111 28.5984 36.1244 29.6651 32.2133 29.6651L27.7333 29.6651Z"
            fill="#FF391A"
          />
        </svg>
      </TestimonialsIcon>
      <StyledSwiper
        grabCursor={true}
        loop={true}
        effect={"fade"}
        navigation={{
          prevEl: ".testimonials-prev",
          nextEl: ".testimonials-next",
        }}
        speed={120}
        modules={[EffectFade, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <StyledSwiperSlide>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Testimonial>
                    “Among the best contractors our company has ever worked
                    with. They have a professional and responsive team. They
                    provide spotless after-sales service.”
                  </Testimonial>
                  <Author>– SENIOR ENGINEERING OFFICER</Author>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Testimonial>
                    “Very accommodating and responsive to our requests and
                    queries.”
                  </Testimonial>
                  <Author>– SENIOR ENGINEER</Author>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Testimonial>
                    “Excellent! Promising talents in Controtek is a good
                    opportunity to our managed properties.”
                  </Testimonial>
                  <Author>– General Manager</Author>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Testimonial>
                    “Really gives solutions in our process by introducing new
                    ideas and technologies. Excellent after sales, project
                    service, and technical support.”
                  </Testimonial>
                  <Author>- Head Maintenance Manager</Author>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Testimonial>
                    “Very professional in business dealings and their after
                    sales services are great.”
                  </Testimonial>
                  <Author>- Production Department Manager</Author>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Testimonial>
                    “Very good, too good actually. They deliver and excellent
                    job with Substation Control and SCADA.”
                  </Testimonial>
                  <Author>- Production Department Manager</Author>
                </Content>
              </Center>
            </Row>
          </Container>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Container>
            <Row>
              <Center>
                <Content>
                  <Testimonial>
                    “Well experienced technical staff and very dependable.”
                  </Testimonial>
                  <Author>- Production Department Manager</Author>
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
              <LeftControl className="testimonials-prev">
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
              <RightControl className="testimonials-next">
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

export default Testimonials;
