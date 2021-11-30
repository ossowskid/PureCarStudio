import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: sticky;
  width: 100vw;
  height: 100px;
  background-color: #111111;
  border-bottom: 1px solid #ffcba8;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
`;

export const Navigation = styled.ul`
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;
export const NavigationMenu = styled.li`
  display: inline-block;
  margin: 0;
  color: white;
  //   text-transform: uppercase;
  font-size: 20px;
  font-family: "Helvetica", "Verdana", sans-serif;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding: 20px;
  &::after {
    display: block;
    content: "";
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    color: #ffcba8;
    &::after {
      transform: scaleX(1);
      transform-origin: 0% 50%;
      border-bottom: 1px solid #ffcba8;
      font-size: 20px;
    }
  }
`;
