import React from "react";
import {
  HomeImageBox,
  HomeImageInsideBox,
  HomeInformation,
  HomeInformationTextBox,
  TextBox,
  InformationBoxDiv,
  Link,
  MainBox,
} from "../Styled/home.styled";
import InstagramIcon from "../images/instagram.png";
import FacebookIcon from "../images/facebook.png";
import EmailIcon from "../images/gmail.png";
import PhoneIcon from "../images/telephone.png";

export const Home = () => {
  return (
    <>
      <MainBox>
        <HomeImageBox>
          <HomeImageInsideBox>as</HomeImageInsideBox>
        </HomeImageBox>
        <HomeInformation>
          <HomeInformationTextBox>
            <h1>Pure Car Studio</h1>
            <h4>Studio Pielęgnacji Aut</h4>
            <InformationBoxDiv>
              <TextBox>
                <Link href="https://www.instagram.com/purecarstudio/">
                  <img
                    src={InstagramIcon}
                    style={{
                      height: "30px",
                      width: "30px",
                      paddingRight: "5px",
                    }}
                    alt="Instagram Icon"
                  />
                </Link>
              </TextBox>
              <TextBox>
                <Link href="https://www.facebook.com/purecarstudio">
                  <img
                    src={FacebookIcon}
                    style={{
                      height: "30px",
                      width: "30px",
                    }}
                    alt="Facebook icon"
                  />
                </Link>
              </TextBox>
              <TextBox>
                <Link href="mailto: purecarstudio@gmail.com">
                  <img
                    src={EmailIcon}
                    style={{
                      height: "30px",
                      width: "30px",
                    }}
                    alt="Email icon"
                  />
                </Link>
              </TextBox>
            </InformationBoxDiv>
            <p style={{ fontSize: "20px" }}>
              ul. Smolna 18A,
              <br />
              81-887 Sopot
            </p>
            <p style={{ fontSize: "20px" }}>
              <img
                src={PhoneIcon}
                style={{
                  height: "20px",
                  width: "20px",
                }}
                alt="Phone icon"
              />{" "}
              +48 787 800 014
            </p>
          </HomeInformationTextBox>
        </HomeInformation>
      </MainBox>
    </>
  );
};
