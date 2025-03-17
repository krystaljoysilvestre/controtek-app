import { ReactComponent as Beckhoff } from "../../assets/images/partners/beckhoff.svg";
import { ReactComponent as EndressHauser } from "../../assets/images/partners/eh.svg";
import { ReactComponent as HmsEwon } from "../../assets/images/partners/hms-ewon.svg";
import { ReactComponent as AdelSystem } from "../../assets/images/partners/adelsystem.svg";
import { ReactComponent as SPM } from "../../assets/images/partners/spm.svg";
import { ReactComponent as Wieland } from "../../assets/images/partners/wieland.svg";
import { ReactComponent as Weintek } from "../../assets/images/partners/weintek.svg";
import { ReactComponent as Accuenergy } from "../../assets/images/partners/accuenergy.svg";
import { ReactComponent as LundHalsey } from "../../assets/images/partners/lundhalsey.svg";
import { ReactComponent as TekpanRolec } from "../../assets/images/partners/tekpan-rolek.svg";
import { ReactComponent as Danfoss } from "../../assets/images/partners/danfoss.svg";
import { ReactComponent as Paloalto } from "../../assets/images/partners/paloalto.svg";
import { ReactComponent as Fortinet } from "../../assets/images/partners/fortinet.svg";
import { ReactComponent as Ignition } from "../../assets/images/partners/ignition.svg";
import { ReactComponent as Sepasoft } from "../../assets/images/partners/sepasoft.svg";
import { ReactComponent as Fiix } from "../../assets/images/partners/fiix.svg";
import { ReactComponent as Plex } from "../../assets/images/partners/plex.svg";
import {
  Wrapper,
  Container,
  Row,
  Heading,
  Title,
  Paragraph,
  PartnerLogos,
} from "./style";

const Partners = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Container>
            <Heading>
              <Title>OUR PARTNERS</Title>
              <Paragraph>
                Controtek collaborates with leading technology and service
                partners to deliver cutting-edge automation solutions.
              </Paragraph>
            </Heading>
            <PartnerLogos>
              <Beckhoff />
              <EndressHauser />
              <HmsEwon />
              <AdelSystem />
              <SPM />
              <Wieland />
              <Weintek />
              <Accuenergy />
              <LundHalsey />
              <TekpanRolec />
              <Danfoss />
              <Paloalto />
              <Fortinet />
              <Ignition />
              <Sepasoft />
              <Fiix />
              <Plex />
            </PartnerLogos>
          </Container>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Partners;
