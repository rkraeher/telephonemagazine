import React from "react";
import { Icon, Navbar as NavbarMaterial, NavItem } from "react-materialize";

export const Navbar = () => {
  return (
    <NavbarMaterial
      alignLinks="right"
      brand={
        <a href="#">
          telephone magazine
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="">About</NavItem>
      <NavItem href="">Masthead</NavItem>
    </NavbarMaterial>
  );
};
