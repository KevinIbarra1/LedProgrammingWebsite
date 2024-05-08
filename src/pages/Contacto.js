import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactoSectionContactLightReverse1 from '../components/contact-light-reverse/ContactoSectionContactLightReverse1';
import ContactoSectionFootersLightReverse3 from '../components/footers-light-reverse/ContactoSectionFootersLightReverse3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Contacto() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ContactoSectionContactLightReverse1 />
      <ContactoSectionFootersLightReverse3 />
    </React.Fragment>
  );
}

