import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutusSectionNavigations1 from '../components/navigations/AboutusSectionNavigations1';
import AboutusSectionTestimonialsLightReverse2 from '../components/testimonials-light-reverse/AboutusSectionTestimonialsLightReverse2';
import AboutusSectionTestimonialsLightReverse3 from '../components/testimonials-light-reverse/AboutusSectionTestimonialsLightReverse3';
import AboutusSectionFootersLightReverse4 from '../components/footers-light-reverse/AboutusSectionFootersLightReverse4';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Aboutus() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutusSectionNavigations1 />
      <AboutusSectionTestimonialsLightReverse2 />
      <AboutusSectionTestimonialsLightReverse3 />
      <AboutusSectionFootersLightReverse4 />
    </React.Fragment>
  );
}

