import useIsMobile from "../../hooks/isMobile";
import { Wrapper, Image } from "./style";

const ImageBanner = ({ desktopImg, mobileImg, bgColor }) => {
  const isMobile = useIsMobile();

  return (
    <Wrapper backgroundColor={bgColor}>
      {isMobile ? (
        <Image src={mobileImg} alt="Section Divider" />
      ) : (
        <Image src={desktopImg} alt="Section Divider" />
      )}
    </Wrapper>
  );
};

export default ImageBanner;
