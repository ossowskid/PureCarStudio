import React from "react";
import {
  Header,
  Navigation,
  NavigationMenu,
  Logo,
} from "../Styled/header.styled";
import LogoImage from "../images/Logo250x98-2.png";

export const HeaderMenu = () => {
  return (
    <>
      <Header>
        <Logo>
          <img src={LogoImage} alt="Pure Car Studio logo" />
        </Logo>
        <Navigation>
          <NavigationMenu>Home</NavigationMenu>
          <NavigationMenu>Oferta</NavigationMenu>
          <NavigationMenu>Cennik</NavigationMenu>
          <NavigationMenu>Realizacje</NavigationMenu>
          <NavigationMenu>O firmie</NavigationMenu>
          <NavigationMenu>Kontakt</NavigationMenu>
        </Navigation>
      </Header>
    </>
  );
};
