import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersLightReverse1 from '../components/headers-light-reverse/IndexSectionHeadersLightReverse1';
import IndexSectionContactLightReverse4 from '../components/contact-light-reverse/IndexSectionContactLightReverse4';
import IndexSectionHowItWorksLightReverse5 from '../components/how-it-works-light-reverse/IndexSectionHowItWorksLightReverse5';
import IndexSectionFootersLightReverse6 from '../components/footers-light-reverse/IndexSectionFootersLightReverse6';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersLightReverse1 />
      <IndexSectionContactLightReverse4 />
      <IndexSectionHowItWorksLightReverse5 />
      <IndexSectionFootersLightReverse6 />
    </React.Fragment>
  );
}

