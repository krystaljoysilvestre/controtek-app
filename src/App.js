import { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import sectionDivider from "./assets/images/section-divider.jpg";
import sectionDividerSm from "./assets/images/section-divider_mobile.jpg";
import sectionDivider1 from "./assets/images/section-divider-1.jpg";
import sectionDivider1Sm from "./assets/images/section-divider-1_mobile.jpg";
import { device } from "./constants/devices";
import GlobalStyle from "./styles/globalStyle";

import {
  Header,
  Sidebar,
  HeroBanner,
  About,
  ImageBanner,
  CarouselText,
  Clients,
  Solutions,
  Partners,
  Testimonials,
  ContactUs,
  Footer,
} from "./components";

const SidebarContainer = styled(SwiperSlide)`
  width: 70%;
  max-width: 320px;
  min-width: 100px;

  @media ${device.tablet} {
    display: none;
  }
`;

function App() {
  const swiperRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onToggleSidebar = () => {
    const slide = swiperRef.current;

    if (slide.activeIndex === 0 && !isSidebarOpen) {
      slide.slideNext();
    } else if (slide.activeIndex === 1) {
      slide.slidePrev();
    }
  };

  return (
    <>
      <GlobalStyle />
      <Swiper
        simulateTouch={false}
        slidesPerView="auto"
        resistanceRatio={0}
        slideToClickedSlide={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          setIsSidebarOpen(swiper.activeIndex === 1);
        }}
      >
        <SwiperSlide>
          <Header
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={onToggleSidebar}
          />
          <HeroBanner />
          <Solutions />
          <Clients />
          <ImageBanner
            bgColor="#f1f1f1"
            desktopImg={sectionDivider}
            mobileImg={sectionDividerSm}
          />
          <CarouselText />
          <About />
          <Testimonials />
          <ImageBanner
            bgColor="#52E2C8"
            desktopImg={sectionDivider1}
            mobileImg={sectionDivider1Sm}
          />
          <Partners />
          <ContactUs />
          <Footer />
        </SwiperSlide>
        <SidebarContainer>
          <Sidebar onToggleSidebar={onToggleSidebar} />
        </SidebarContainer>
      </Swiper>
    </>
  );
}

export default App;
