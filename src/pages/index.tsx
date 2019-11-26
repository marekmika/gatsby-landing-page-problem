// import React from 'react';
import Layout from '../components/layout/layout';
import SectionOne from '../components/sections/section-one';
import React, { useState, useEffect } from 'react';

const IndexPage = () => {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return <Layout>{render && <SectionOne />}</Layout>;
};

export default IndexPage;
