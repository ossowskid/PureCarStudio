import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import {
  ContactSection,
  ContactMain,
  InformationBox,
  ContactForm,
  FormElements,
  Input,
  TextArea,
  Submit,
  PopupInformation,
  UnderForm,
  ButtonDiv,
} from "../../Styled/contact.styled";

export const Contact = () => {
  const [values, setValues] = useState({
    email: "",
    subiect: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      email: e.target.value,
    }));
  };
  const handleSubiect = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      subiect: e.target.value,
    }));
  };
  const handleMessage = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      message: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // <Stack sx={{ width: "100%" }} spacing={2}>
  //   <Alert severity="warning">Proszę uzupełnić formularz</Alert>
  // </Stack>

  return (
    <>
      <ContactSection id="contact">
        <p className="menu__category">Kontakt</p>
        <ContactMain>
          <ContactForm>
            <form
              // action="https://formsubmit.co/ossowski.dawid@gmail.com"
              // method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="KONTAKT E-MAIL" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input
                type="hidden"
                name="_next"
                // value="http://localhost:3000/"
              />
              <FormElements>
                <li>
                  <label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Adres Email..."
                      value={values.email}
                      onChange={handleEmail}
                      // required
                    />
                  </label>
                </li>

                <li>
                  <label>
                    <Input
                      type="text"
                      name="subiect"
                      placeholder="Tytuł..."
                      value={values.subiect}
                      onChange={handleSubiect}
                      // required
                    />
                  </label>
                </li>

                <li>
                  <label>
                    <TextArea
                      style={{ resize: "none" }}
                      name="email"
                      cols="20"
                      rows="15"
                      placeholder="Wiadomość..."
                      value={values.message}
                      onChange={handleMessage}
                      // required
                    />
                  </label>
                </li>
              </FormElements>
              <UnderForm>
                <PopupInformation>
                  {submitted ? (
                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Alert severity="success">
                        Wiadomość wysłano poprawnie!
                      </Alert>
                    </Stack>
                  ) : null}
                </PopupInformation>
                <ButtonDiv>
                  <Submit type="submit">Wyślij waidomość</Submit>
                </ButtonDiv>
              </UnderForm>
            </form>
          </ContactForm>
          <InformationBox>
            <h2>Jeżeli masz jakieś pytania</h2>
            <p>Zapraszamy do kontaktu poprzez formularz kontaktowy</p>
            <p>Lub</p>
            <div>
              <ul>
                <li>Telefon</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </InformationBox>
        </ContactMain>
      </ContactSection>
    </>
  );
};
