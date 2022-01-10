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
  text-align: center;
`;
export const ContactForm = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  list-style-type: none;
  border-radius: 4px 0 0 4px;
  background-color: rgba(227, 176, 140, 0.2);
  height: 100%;
  min-width: 40vw;
`;

export const InformationBox = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 40vw;
  height: 100%;
  background-color: rgba(227, 176, 140, 0.2);
  color: white;
  border-radius: 0 4px 4px 0;
`;

export const FormElements = styled.ul`
  list-style-type: none;
`;

export const Input = styled.input`
  width: 80%;
  font-family: Arial;
  font-size: 15px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Arial;
  font-size: 15px;
`;
export const TextArea = styled.textarea`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Arial;
  font-size: 15px;
`;

export const Submit = styled.button`
  width: 30%;
  background-color: #4caf50;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &&:hover {
    background-color: #45a049;
  }
`;

export const ButtonSendEmail = styled.button`
  background-color: white;
  width: 150px;
  height: 50px;
  border: 1px solid #e3b08c;
`;
