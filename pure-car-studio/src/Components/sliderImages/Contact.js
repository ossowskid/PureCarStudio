import Box from "@mui/material/Box";
import { FormControl, InputLabel, Input } from "@mui/material";
import {
  ContactSection,
  ContactMain,
  ContactForm,
  InformationBox,
  ButtonSendEmail,
} from "../../Styled/contact.styled";

export const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <p className="menu__category">Kontakt</p>
        <ContactMain>
          <ContactForm
            action="https://formsubmit.co/ossowski.dawid@gmail.com"
            method="POST"
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 5, gap: 2 },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl>
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000"
                />
                <InputLabel
                  htmlFor="component-outlinded"
                  type="email"
                  name="email"
                  required
                >
                  Adres E-mail
                </InputLabel>

                <Input
                  id="outlined-textarea"
                  label="Adres Email"
                  type="email"
                  name="email"
                  color="primary"
                />
                <FormControl>
                  <InputLabel htmlFor="component-outlinded" required>
                    Temat
                  </InputLabel>
                  <Input
                    id="outlined-textarea"
                    label="Temat"
                    name="topic"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="component-outlinded" required>
                    Wiadomość...
                  </InputLabel>
                  <Input
                    id="outlined-textarea"
                    label="Treść wiadomośći"
                    name="message"
                    rows={10}
                    multiline
                  />
                </FormControl>
              </FormControl>
            </Box>
            <ButtonSendEmail type="submit">Send</ButtonSendEmail>
          </ContactForm>
          <InformationBox>Jakieś info</InformationBox>
        </ContactMain>
      </ContactSection>
    </>
  );
};
