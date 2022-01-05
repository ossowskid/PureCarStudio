import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;

  background-color: #111;
  z-index: 1;
  border-bottom: 1px solid #e3b08c;
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
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  padding: 20px;
  &::after {
    display: block;
    content: "";
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    color: #e3b08c;
    &::after {
      transform: scaleX(1);
      transform-origin: 0% 50%;
      border-bottom: 1px solid #e3b08c;
      font-size: 14px;
    }
  }
`;
