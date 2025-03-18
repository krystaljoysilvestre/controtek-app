import aboutUsBanner from "../../assets/images/about-banner.jpg";
import aboutUsBannerSm from "../../assets/images/about-banner_mobile.jpg";
import useIsMobile from "../../hooks/isMobile";
import { Wrapper, Image } from "./style";

const ImageBanner = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      {isMobile ? (
        <Image src={aboutUsBannerSm} alt="About us" />
      ) : (
        <Image src={aboutUsBanner} alt="About us" />
      )}
    </Wrapper>
  );
};

export default ImageBanner;
