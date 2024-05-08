import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import UnderconstructionSectionHttpCodesDark1 from '../components/http-codes-dark/UnderconstructionSectionHttpCodesDark1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Underconstruction() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <UnderconstructionSectionHttpCodesDark1 />
    </React.Fragment>
  );
}

