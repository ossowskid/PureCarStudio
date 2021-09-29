import styled from "styled-components";

export const Header = styled.header`
display: flex;
position: sticky;
width: 100vw;
height: 90px;
background-color: #111111;
border-bottom: 1px solid #ffc8a3;
`;
export const Logo = styled.div`
width: 50vw`;
export const Navigation = styled.ul`
width: 50vw;
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
&:hover {
    color: #ffc8a3;
    font-size: 20px;
}
`;