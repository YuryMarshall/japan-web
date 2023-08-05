import React from "react";
import Contact from "../atoms/Contact";
import CompanyData from "../data/CompanyData";

export default function ContactsContainer(): JSX.Element {
  return (
    <div className="mb-10 md:flex md:flex-wrap">
      <Contact
        image={CompanyData.email.image}
        link={CompanyData.email.link}
        text={CompanyData.email.text}
      />
      <Contact
        image={CompanyData.instargam.image}
        link={CompanyData.instargam.link}
        text={CompanyData.instargam.text}
      />
      <Contact image={CompanyData.vk.image} link={CompanyData.vk.link} text={CompanyData.vk.text} />
      <Contact
        image={CompanyData.facebook.image}
        link={CompanyData.facebook.link}
        text={CompanyData.facebook.text}
      />
      <Contact
        image={CompanyData.whatsapp.image}
        link={CompanyData.whatsapp.link}
        text={CompanyData.whatsapp.text}
      />
      <Contact
        image={CompanyData.telegram.image}
        link={CompanyData.telegram.link}
        text={CompanyData.telegram.text}
      />
    </div>
  );
}
