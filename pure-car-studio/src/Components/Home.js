import React from "react";
import "animate.css";
import {
  MainHome,
  MainHomeImageGallery,
  TextAnimationBox,
  TextAnimationFirstLine,
  TextAnimationSecondLine,
} from "../Styled/home.styled";

export const Home = () => {
  return (
    <>
      <MainHome>
        <MainHomeImageGallery></MainHomeImageGallery>
        <TextAnimationBox>
          <TextAnimationFirstLine />
          <TextAnimationSecondLine>
            Zajmiemy się Twoim autem kompleksowo
          </TextAnimationSecondLine>
        </TextAnimationBox>
      </MainHome>
    </>
  );
};
