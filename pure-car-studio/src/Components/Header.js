import React from "react";
import {
  Header,
  Navigation,
  NavigationMenu,
  Logo,
} from "../Styled/header.styled";
import LogoImage from "../images/Logo250x98-2.png";
import { Link } from "react-scroll";

export const HeaderMenu = () => {
  return (
    <>
      <Header>
        <Logo>
          <img src={LogoImage} alt="Pure Car Studio logo" />
        </Logo>
        <Navigation>
          <NavigationMenu>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </NavigationMenu>
          <NavigationMenu>
            <Link to="accomplishment" spy={true} smooth={true} duration={1000}>
              Realizacje
            </Link>
          </NavigationMenu>
          <NavigationMenu>
            <Link to="offer" spy={true} smooth={true} duration={1000}>
              Oferta
            </Link>
          </NavigationMenu>
          <NavigationMenu>
            <Link to="pricing" spy={true} smooth={true} duration={1000}>
              Cennik
            </Link>
          </NavigationMenu>
          <NavigationMenu>
            <Link to="about" spy={true} smooth={true} duration={1000}>
              O firmie
            </Link>
          </NavigationMenu>
          <NavigationMenu>
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              Kontakt
            </Link>
          </NavigationMenu>
        </Navigation>
      </Header>
    </>
  );
};
