import styled, { keyframes } from "styled-components";
import { fadeInDown, fadeInUp, fadeInLeft, fadeIn } from "react-animations";
import topLogo from "../images/PureCarAnimation3.png";

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const MainHome = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  margin: 0 auto;
  align-items: center;
  width: 90vw;
  height: 80vh;
`;

export const MainHomeImageGallery = styled.div`
  box-shadow: 10px 10px 10px black;
  animation: 5s ${fadeInLeftAnimation};
`;

export const TextAnimationBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
`;

export const TextAnimationFirstLine = styled.img.attrs({
  src: `${topLogo}`,
})`
  animation: 5s ${fadeInDownAnimation};
`;

export const TextAnimationSecondLine = styled.div`
  font-size: 16px;
  color: #e3b08c;
  animation: 5s ${fadeInUpAnimation};
`;
