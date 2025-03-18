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
    </>
  );
}

export default App;
