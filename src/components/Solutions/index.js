import { useState, useEffect } from "react";
import { Wrapper, Row, Container } from "./style";
import SolutionsPaper from "./Paper";
import SolutionsTabs from "./Tabs";

const Solutions = () => {
  const [isPaperLayout, setIsPaperLayout] = useState(window.innerWidth < 1180);

  useEffect(() => {
    const handleResize = () => {
      setIsPaperLayout(window.innerWidth < 1180);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper id="solutions">
      <Container>
        <Row>{isPaperLayout ? <SolutionsPaper /> : <SolutionsTabs />}</Row>
      </Container>
    </Wrapper>
  );
};

export default Solutions;
