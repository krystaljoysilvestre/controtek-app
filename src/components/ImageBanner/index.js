import { Wrapper, Image } from "./style";

const ImageBanner = ({ imgSrc, imgAlt }) => {
  return (
    <Wrapper>
      <Image src={imgSrc} alt={imgAlt} />
    </Wrapper>
  );
};

export default ImageBanner;
