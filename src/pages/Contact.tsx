import React, { useContext } from "react";
import styled from "styled-components";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import { AppContext } from "../context/Context";
import { theme } from "../theme/theme";
import TitlePage from "../ui-reusable/TitlePage";

const Contact = () => {
  const { refContact } = useContext(AppContext);

  return (
    <ContactStyled ref={refContact}>
      <TitlePage title="Interréssé? Contactez moi" />
      <ContactForm />
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Contact;
