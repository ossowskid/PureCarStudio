import styled from "styled-components";

export const ContactSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const ContactMain = styled.div`
  display: flex;
  max-width: 80vw;
  height: 70vh;
`;
export const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  background-color: rgba(227, 176, 140, 0.8);
  height: 100%;
  min-width: 50vw;
`;

export const InformationBox = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: red;
`;

export const ButtonSendEmail = styled.button`
  background-color: white;
  width: 150px;
  height: 50px;
  border: 1px solid #e3b08c;
`;
