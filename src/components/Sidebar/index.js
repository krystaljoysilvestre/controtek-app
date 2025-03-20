import { Wrapper, Head, StyledNav, NavItem, Link } from "./style";

const Sidebar = ({ onToggleSidebar }) => {
  const onItemClick = (e) => {
    e.preventDefault();
    onToggleSidebar();

    const targetSectionId = e.target.getAttribute("href").substring(1);
    setTimeout(() => {
      const targetSection = document.getElementById(targetSectionId);
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  return (
    <Wrapper>
      <Head />
      <StyledNav>
        <NavItem>
          <Link onClick={onItemClick} href="#about">
            About Us
          </Link>
        </NavItem>
        <NavItem>
          <Link onClick={onItemClick} href="#solutions">
            Our Solutions
          </Link>
        </NavItem>
        <NavItem>
          <Link onClick={onItemClick} href="#contact">
            Contact Us
          </Link>
        </NavItem>
      </StyledNav>
    </Wrapper>
  );
};

export default Sidebar;
