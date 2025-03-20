import { ReactComponent as Logo } from "../../assets/images/controtek-logo.svg";
import { ReactComponent as Name } from "../../assets/images/controtek-logo-label.svg";

import { Button, Nav } from "../../components";
import {
  Wrapper,
  Content,
  Brand,
  Link,
  DesktopNav,
  DesktopActions,
  MobileActions,
  MenuButton,
} from "./style";

const Header = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <>
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
            <MenuButton
              className={isSidebarOpen ? "cross" : ""}
              onClick={onToggleSidebar}
            >
              <div />
              <div />
              <div />
            </MenuButton>
          </MobileActions>
        </Content>
      </Wrapper>
    </>
  );
};

export default Header;
