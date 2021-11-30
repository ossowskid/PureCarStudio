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
  display: flex;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid #ffcba8;
    color: #ffcba8;
    font-size: 20px;
  }
`;
