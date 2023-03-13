import { Icon, Navbar as Wrapper } from "react-materialize";
import { Icon, Navbar as NavbarMaterial, NavItem } from "react-materialize";

export const Navbar = () => {
  return (
    <Wrapper
      alignLinks="right"
      brand={
        <a href="#">
          telephone magazine
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <S.NavItem href="">About</S.NavItem>
      <S.NavItem href="">Masthead</S.NavItem>
    </Wrapper>
  );
};
