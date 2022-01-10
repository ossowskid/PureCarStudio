import {
  ContactSection,
  ContactMain,
  InformationBox,
  ContactForm,
  FormElements,
  Input,
  TextArea,
  Submit,
} from "../../Styled/contact.styled";

export const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <p className="menu__category">Kontakt</p>
        <ContactMain>
          <ContactForm>
            <form
              action="https://formsubmit.co/ossowski.dawid@gmail.com"
              method="POST"
            >
              <FormElements>
                <li>
                  <label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Adres Email..."
                      required
                    />
                  </label>
                </li>
              </FormElements>
              <FormElements>
                <li>
                  <label>
                    <Input
                      type="text"
                      name="title"
                      placeholder="Tytuł..."
                      required
                    />
                  </label>
                </li>
              </FormElements>
              <FormElements>
                <li>
                  <label>
                    <TextArea
                      style={{ resize: "none" }}
                      name="message"
                      cols="20"
                      rows="15"
                      placeholder="Wiadomość..."
                      required
                    />
                  </label>
                </li>
              </FormElements>
              <Submit type="submit">Wyślij waidomość</Submit>
            </form>
          </ContactForm>
          <InformationBox>Jakieś info</InformationBox>
        </ContactMain>
      </ContactSection>
    </>
  );
};
