import aboutUsBanner from "./assets/images/about-banner.jpg";
import useIsMobile from "./hooks/isMobile";
import GlobalStyle from "./styles/globalStyle";

import {
  Header,
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

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <GlobalStyle />
      <Header />
      <CarouselBanner />
      <IntroBlock />
      {isMobile ? (
        <>
          <Clients />
          <About />
          <ImageBanner imgSrc={aboutUsBanner} imgAlt="about-contratek" />
          <CarouselText />
          <Solutions />
          <Partners />
          <Testimonials />
          <ContactUs />
        </>
      ) : (
        <>
          <About />
          <ImageBanner imgSrc={aboutUsBanner} imgAlt="about-contratek" />
          <CarouselText />
          <Clients />
          <Solutions />
          <Partners />
          <Testimonials />
          <ContactUs />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
