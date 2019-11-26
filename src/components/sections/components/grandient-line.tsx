import React from 'react';
import styled from 'styled-components';
import { sizes } from '../../../styles/sizes';

const Grandient = styled.div`
  left: 104px;
  width: 456px;
  height: 8px;
  background: transparent linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)
    0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: ${sizes.breakpointsMax.md}) {
    width: 300px;
  }
`;

const GrandientLine = () => {
  return <Grandient />;
};

export default GrandientLine;
