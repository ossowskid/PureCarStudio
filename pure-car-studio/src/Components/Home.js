import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "animate.css";
import {
  MainHome,
  MainHomeImageGallery,
  TextAnimationBox,
  TextAnimationFirstLine,
  TextAnimationSecondLine,
} from "../Styled/home.styled";
import PicOne from "./sliderImages/1.jpg";
import PicTwo from "./sliderImages/2.jpg";
import PicThree from "./sliderImages/3.jpg";
import PicFour from "./sliderImages/4.jpg";
import PicFive from "./sliderImages/5.jpg";
import PicSix from "./sliderImages/6.jpg";
import PicSeven from "./sliderImages/7.jpg";

const IMAGES = [
  {
    url: `${PicOne}`,
  },
  { url: `${PicTwo}` },
  { url: `${PicThree}` },
  { url: `${PicFour}` },
  { url: `${PicFive}` },
  { url: `${PicSix}` },
  { url: `${PicSeven}` },
];

export const Home = () => {
  return (
    <>
      <MainHome id="home">
        <MainHomeImageGallery>
          <SimpleImageSlider
            width={400}
            height={400}
            images={IMAGES}
            showBullets={false}
            showNavs={false}
            loop={true}
            autoPlay={true}
            autoPlayDelay={4.0}
          />
        </MainHomeImageGallery>
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
