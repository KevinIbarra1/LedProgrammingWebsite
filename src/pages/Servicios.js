import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ServiciosSectionNavigations1 from '../components/navigations/ServiciosSectionNavigations1';
import ServiciosSectionFeaturesLightReverse3 from '../components/features-light-reverse/ServiciosSectionFeaturesLightReverse3';
import ServiciosSectionFeaturesLightReverse4 from '../components/features-light-reverse/ServiciosSectionFeaturesLightReverse4';
import ServiciosSectionHowItWorksLightReverse5 from '../components/how-it-works-light-reverse/ServiciosSectionHowItWorksLightReverse5';
import ServiciosSectionPricingLightReverse2 from '../components/pricing-light-reverse/ServiciosSectionPricingLightReverse2';
import ServiciosSectionFootersLightReverse6 from '../components/footers-light-reverse/ServiciosSectionFootersLightReverse6';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Servicios() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ServiciosSectionNavigations1 />
      <ServiciosSectionFeaturesLightReverse3 />
      <ServiciosSectionFeaturesLightReverse4 />
      <ServiciosSectionHowItWorksLightReverse5 />
      <ServiciosSectionPricingLightReverse2 />
      <ServiciosSectionFootersLightReverse6 />
    </React.Fragment>
  );
}

