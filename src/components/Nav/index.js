import { StyledNav, NavItem, Link } from "./style";

const Nav = () => {
  return (
    <StyledNav>
      <NavItem>
        <Link href="#about">About Us</Link>
      </NavItem>
      <NavItem>
        <Link href="#solutions">Our Solutions</Link>
      </NavItem>
      <NavItem>
        <Link href="#contact">Contact Us</Link>
      </NavItem>
    </StyledNav>
  );
};

export default Nav;
