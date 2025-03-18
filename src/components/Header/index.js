import { ReactComponent as Logo } from "../../assets/images/controtek-logo.svg";
import { ReactComponent as Name } from "../../assets/images/controtek-logo-label.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/icons/menu-line.svg";

import { Button, Nav } from "../../components";
import {
  Wrapper,
  Content,
  Brand,
  Link,
  DesktopNav,
  DesktopActions,
  MobileActions,
} from "./style";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Brand>
          <Link href="/">
            <Logo className="brand-logo" />
            <Name className="brand-name" />
          </Link>
        </Brand>
        <DesktopNav>
          <Nav />
        </DesktopNav>
        <DesktopActions>
          <Link href="#contact">
            <Button>Request a demo</Button>
          </Link>
        </DesktopActions>
        <MobileActions>
          <MenuIcon />
        </MobileActions>
      </Content>
    </Wrapper>
  );
};

export default Header;
