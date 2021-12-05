import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 100vw;
  height: 80vh;
//   background-color: red;
`;
export const HomeInformation = styled.div`
  display: flex;
  align-items: center;
  width: 380px;
  height: 280px;
  background-color: #e6a478;
  transform: skew(-8deg);
`;

export const HomeImageBox = styled.div`
  display: flex;
  align-items: center;
  width: 380px;
  height: 280px;
  transform: skew(8deg);
  background-color: #e6a478;
`;

export const HomeInformationTextBox = styled.div`
  text-align: center;
  color: #111;
  width: 400px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.7);
  transform: skew(8deg);
`;

export const HomeImageInsideBox = styled.div`
  width: 400px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.7);
  transform: skew(-8deg);
`;

export const InformationBoxDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: auto;
  justify-content: center;
  list-style: none;
`;
export const TextBox = styled.div`
  display: flex;
  padding: 0 15px;
  font-size: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #111;
`;
