import React from "react";
import { Header, Navigation, NavigationMenu, Logo } from "../Styled/header.styled";

export const HeaderMenu = () => {

    return (
        <>
            <Header>
                <Logo></Logo>
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
    )
}