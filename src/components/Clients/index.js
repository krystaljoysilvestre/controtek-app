import { ReactComponent as Mondelez } from "../../assets/images/clients/mondelez.svg";
import { ReactComponent as Nestle } from "../../assets/images/clients/nestle.svg";
import { ReactComponent as Wyeth } from "../../assets/images/clients/wyeth.svg";
import { ReactComponent as Unilever } from "../../assets/images/clients/unilever.svg";
import { ReactComponent as CocaCola } from "../../assets/images/clients/coca-cola.svg";
import { ReactComponent as Pepsi } from "../../assets/images/clients/pepsi.svg";
import { ReactComponent as Energy } from "../../assets/images/clients/energy.svg";
import { ReactComponent as SanMiguelCorp } from "../../assets/images/clients/san-miguel.svg";
import { ReactComponent as MeadJohnson } from "../../assets/images/clients/mead-johnson.svg";
import { ReactComponent as Dole } from "../../assets/images/clients/dole.svg";
import { ReactComponent as Alaska } from "../../assets/images/clients/alaska.svg";
import { ReactComponent as MondeNissin } from "../../assets/images/clients/monde-nissin.svg";
import { ReactComponent as Friesland } from "../../assets/images/clients/friesland.svg";
import { ReactComponent as SMPrime } from "../../assets/images/clients/sm-prime.svg";
import { ReactComponent as Indorama } from "../../assets/images/clients/indorama.svg";
import { ReactComponent as Tosoh } from "../../assets/images/clients/tosoh.svg";
import { ReactComponent as DonPedro } from "../../assets/images/clients/don-pedro.svg";
import { ReactComponent as DeLaCarlota } from "../../assets/images/clients/dela-carlota.svg";
import { ReactComponent as Mariwasa } from "../../assets/images/clients/mariwasa.svg";
import { ReactComponent as Bataan } from "../../assets/images/clients/bataan.svg";
import { ReactComponent as Continental } from "../../assets/images/clients/continental.svg";
import { ReactComponent as Aboitiz } from "../../assets/images/clients/aboitiz.svg";
import { ReactComponent as THPal } from "../../assets/images/clients/thpal.svg";
import { ReactComponent as NGCP } from "../../assets/images/clients/ngcp.svg";
import { ReactComponent as LagunaWater } from "../../assets/images/clients/laguna-water.svg";
import { ReactComponent as ManilaWater } from "../../assets/images/clients/manila-water.svg";
import { ReactComponent as PSC } from "../../assets/images/clients/psc.svg";

import {
  Wrapper,
  Container,
  Row,
  Heading,
  Title,
  Paragraph,
  ClientLogos,
} from "./style";

const Clients = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Container>
            <Heading>
              <Title>Our clients</Title>
              <Paragraph>
                Our powerful client portfolio includes food & beverage, water &
                waste water, utilities, power and energy sectors.
              </Paragraph>
            </Heading>
            <ClientLogos>
              <Mondelez />
              <Nestle />
              <Wyeth />
              <Unilever />
              <CocaCola />
              <Pepsi />
              <Energy />
              <SanMiguelCorp />
              <MeadJohnson />
              <Dole />
              <Alaska />
              <MondeNissin />
              <Friesland />
              <SMPrime />
              <Indorama />
              <Tosoh />
              <DonPedro />
              <DeLaCarlota />
              <Mariwasa />
              <Bataan />
              <Continental />
              <Aboitiz />
              <THPal />
              <NGCP />
              <LagunaWater />
              <ManilaWater />
              <PSC />
            </ClientLogos>
          </Container>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Clients;
