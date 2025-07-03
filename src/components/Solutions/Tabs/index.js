import enertekBg from "../../../assets/images/solutions-tabs/enertek-tab.jpg";
import aquatekBg from "../../../assets/images/solutions-tabs/aquatek-tab.jpg";
import cmstekBg from "../../../assets/images/solutions-tabs/cmstek-tab.jpg";
import buildtekBg from "../../../assets/images/solutions-tabs/buildtek-tab.jpg";
import autekBg from "../../../assets/images/solutions-tabs/autek-tab.jpg";
import traceOeeBg from "../../../assets/images/solutions-tabs/traceoee-tab.jpg";

import {
  Title,
  TabsContainer,
  Tab,
  Tabs,
  TabList,
  TabPanelContainer,
  TabPanel,
  SquareBullet,
  Content,
  Background,
  SolutionHeading,
  SolutionName,
  Solution,
  SolutionDescription,
} from "./style";

const SolutionsTabs = () => {
  return (
    <>
      <Title>Our solutions</Title>
      <TabsContainer>
        <Tabs>
          <TabList>
            <Tab>
              <SquareBullet color="#FF391A" />
              Energy Management
            </Tab>
            <Tab>
              <SquareBullet color="#4200E8" />
              Water/Waste Water
            </Tab>
            <Tab>
              <SquareBullet color="#B34AF5" />
              Condition Monitoring
            </Tab>
            <Tab>
              <SquareBullet color="#FFCB44" />
              Smart Building Automation
            </Tab>
            <Tab>
              <SquareBullet color="#52E2C8" />
              Smarter Automation
            </Tab>
            <Tab>
              <SquareBullet color="#FFA6D7" />
              Production Monitoring
            </Tab>
          </TabList>

          <TabPanelContainer>
            <TabPanel>
              <Content>
                <SolutionHeading>
                  <SolutionName>Enertek®</SolutionName>
                  <Solution>Energy Management</Solution>
                </SolutionHeading>
                <SolutionDescription>
                  Solutions for power generation and distribution with
                  cutting-edge Electrical and Automation technology. Specialized
                  in power plant automation and substation control systems.
                </SolutionDescription>
              </Content>
              <Background>
                <img
                  src={enertekBg}
                  loading="lazy"
                  alt="Energy Management with Enertek®"
                />
              </Background>
            </TabPanel>
            <TabPanel>
              <Content>
                <SolutionHeading>
                  <SolutionName>Aquatek®</SolutionName>
                  <Solution>Water/Waste Water</Solution>
                </SolutionHeading>
                <SolutionDescription>
                  Streamlined operations with our BI dashboard and data
                  analytics. Automated remote-to-central SCADA with cutting-edge
                  automation and top-tier security.
                </SolutionDescription>
              </Content>
              <Background>
                <img
                  src={aquatekBg}
                  loading="lazy"
                  alt="Water/Waste Water with Aquatek®"
                />
              </Background>
            </TabPanel>
            <TabPanel>
              <Content>
                <SolutionHeading>
                  <SolutionName>CMSTek®</SolutionName>
                  <Solution>Condition Monitoring</Solution>
                </SolutionHeading>
                <SolutionDescription>
                  Our intelligent Condition Monitoring System predicts failures
                  early, minimizing downtime. Expandable to an Asset Management
                  System.
                </SolutionDescription>
              </Content>
              <Background>
                <img
                  src={cmstekBg}
                  loading="lazy"
                  alt="Condition Monitoring with CMSTek®"
                />
              </Background>
            </TabPanel>
            <TabPanel>
              <Content>
                <SolutionHeading>
                  <SolutionName>Buildtek®</SolutionName>
                  <Solution>Smart Building Automation</Solution>
                </SolutionHeading>
                <SolutionDescription>
                  Controtek delivers cost-effective building management and LEED
                  automation through smart integration, helping owners and
                  managers save energy.
                </SolutionDescription>
              </Content>
              <Background>
                <img
                  src={buildtekBg}
                  loading="lazy"
                  alt="Smart Building Automation with Buildtek®"
                />
              </Background>
            </TabPanel>
            <TabPanel>
              <Content>
                <SolutionHeading>
                  <SolutionName>Autek®</SolutionName>
                  <Solution>Smarter Automation</Solution>
                </SolutionHeading>
                <SolutionDescription>
                  A fast, seamless, and efficient modern automation system
                  integrating Smart Automation and IT, adaptable across
                  industries and manufacturing.
                </SolutionDescription>
              </Content>
              <Background>
                <img
                  src={autekBg}
                  loading="lazy"
                  alt="Smarter Automation with Autek®"
                />
              </Background>
            </TabPanel>
            <TabPanel>
              <Content>
                <SolutionHeading>
                  <SolutionName>TraceOEE®</SolutionName>
                  <Solution>Production Monitoring</Solution>
                </SolutionHeading>
                <SolutionDescription>
                  TraceOEE™ is a real-time, automated solution for measuring
                  manufacturing productivity, expandable to SCADA, MES, and ERP
                  integration.
                </SolutionDescription>
              </Content>
              <Background>
                <img
                  src={traceOeeBg}
                  loading="lazy"
                  alt="Production Monitoring with TraceOEE®"
                />
              </Background>
            </TabPanel>
          </TabPanelContainer>
        </Tabs>
      </TabsContainer>
    </>
  );
};

export default SolutionsTabs;
