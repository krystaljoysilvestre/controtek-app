import { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import useIsMobile from "./hooks/isMobile";
import GlobalStyle from "./styles/globalStyle";

import {
  Header,
  Sidebar,
  CarouselBanner,
  IntroBlock,
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
`;

function App() {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();
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
          <CarouselBanner />
          <IntroBlock />
          {isMobile ? (
            <>
              <Clients />
              <About />
              <ImageBanner />
              <CarouselText />
              <Solutions />
              <Partners />
              <Testimonials />
              <ContactUs />
            </>
          ) : (
            <>
              <About />
              <ImageBanner />
              <CarouselText />
              <Clients />
              <Solutions />
              <Partners />
              <Testimonials />
              <ContactUs />
            </>
          )}
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
