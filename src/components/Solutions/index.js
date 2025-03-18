import solutionsBanner from "../../assets/images/solutions-banner.jpg";
import {
  Wrapper,
  Container,
  Row,
  Paper,
  Heading,
  Title,
  SolutionItems,
  SolutionItem,
  Label,
  SquareBullet,
  Name,
  Type,
  Banner,
} from "./style";

const Solutions = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <Paper>
              <Container>
                <Heading>
                  <Title>Our solutions</Title>
                </Heading>
                <SolutionItems>
                  <SolutionItem>
                    <div>
                      <Label>
                        <SquareBullet style={{ background: "#FF391A" }} />
                        <Name>Enertek®</Name>
                      </Label>
                      <Type>Energy Management</Type>
                    </div>
                    <div>
                      Solutions for power generation and distribution with
                      cutting-edge Electrical and Automation technology.
                      Specialized in power plant automation and substation
                      control systems.
                    </div>
                  </SolutionItem>
                  <SolutionItem>
                    <div>
                      <Label>
                        <SquareBullet style={{ background: "#4200E8" }} />
                        <Name>Aquatek®</Name>
                      </Label>
                      <Type>Water/Waste Water</Type>
                    </div>
                    <div>
                      Streamlined operations with our BI dashboard and data
                      analytics. Automated remote-to-central SCADA with
                      cutting-edge automation and top-tier security.
                    </div>
                  </SolutionItem>
                  <SolutionItem>
                    <div>
                      <Label>
                        <SquareBullet style={{ background: "#B34AF5" }} />
                        <Name>CMSTek®</Name>
                      </Label>
                      <Type>Energy Management</Type>
                    </div>
                    <div>
                      Our intelligent Condition Monitoring System predicts
                      failures early, minimizing downtime. Expandable to an
                      Asset Management System.
                    </div>
                  </SolutionItem>
                  <SolutionItem>
                    <div>
                      <Label>
                        <SquareBullet style={{ background: "#FFCB44" }} />
                        <Name>Buildtek®</Name>
                      </Label>
                      <Type>Smart Building Automation</Type>
                    </div>
                    <div>
                      Controtek delivers cost-effective building management and
                      LEED automation through smart integration, helping owners
                      and managers save energy.
                    </div>
                  </SolutionItem>
                  <SolutionItem>
                    <div>
                      <Label>
                        <SquareBullet style={{ background: "##52E2C8" }} />
                        <Name>Autek®</Name>
                      </Label>
                      <Type>Smarter Automation</Type>
                    </div>
                    <div>
                      A fast, seamless, and efficient modern automation system
                      integrating Smart Automation and IT, adaptable across
                      industries and manufacturing.
                    </div>
                  </SolutionItem>
                  <SolutionItem>
                    <div>
                      <Label>
                        <SquareBullet style={{ background: "#FFA6D7" }} />
                        <Name>TraceOEE®</Name>
                      </Label>
                      <Type>Production Monitoring</Type>
                    </div>
                    <div>
                      TraceOEE™ is a real-time, automated solution for measuring
                      manufacturing productivity, expandable to SCADA, MES, and
                      ERP integration.
                    </div>
                  </SolutionItem>
                </SolutionItems>
              </Container>
            </Paper>
          </Row>
        </Container>
      </Wrapper>
      <Banner>
        <img src={solutionsBanner} alt="solutions-contratek" />
      </Banner>
    </>
  );
};

export default Solutions;
