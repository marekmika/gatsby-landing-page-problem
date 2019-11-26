// import React from 'react';
import { fontStyles } from '../../styles/variables';
import SimpleRow from '../layout/simple-row';
import styled from 'styled-components';
import Container from './components/container';
import Text from '../sections/components/text';
import TextBold from '../sections/components/text-bold';
import { sizes } from '../../styles/sizes';
import BackgroundImage from 'gatsby-background-image';
import { backgroundImage } from '../images/background';
import { injectIntl, IntlFormatters } from 'gatsby-plugin-intl';
import Media from 'react-media';
import React, { useState, useEffect } from 'react';

const Row = styled(SimpleRow)`
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin-top: 80px; /* Height of navbar */

  & .text-wrapper {
    padding-left: 100px;
    margin-top: 150px;
    height: 157px;
  }

  & .heading {
    max-width: 550px;
    ${fontStyles.heading}
  }

  @media (max-width: ${sizes.breakpointsMax.xl}) {
    flex-direction: column;
    justify-content: space-between;
    padding-top: 100px;

    & .text-wrapper {
      padding-left: 50px;
      margin-top: 50px;
      height: 157px;
    }
  }

  @media (max-width: ${sizes.breakpointsMax.md}) {
    justify-content: around;
    padding-top: 150px;

    & .text-wrapper {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

const SectionOne = ({ intl }: IntlFormatters) => {
  // const [render, setRender] = useState(false);
  // useEffect(() => setRender(true), []);

  const content = (
    <Row>
      <div className="text-wrapper">
        <Container
          heading={intl.formatMessage({ id: 'indexPage.sectionOne.heading' })}
          text={
            <Text>
              {intl.formatMessage({ id: 'indexPage.sectionOne.text1' })}
              <TextBold>
                {' '}
                {intl.formatMessage({ id: 'indexPage.sectionOne.text2' })}
              </TextBold>
            </Text>
          }
          marginTop={'0px'}
        />
      </div>
    </Row>
  );

  const query = backgroundImage();

  return (
    <Media
      queries={{
        small: '(max-width: 599px)',
        medium: '(min-width: 600px) and (max-width: 1199px)',
        large: '(min-width: 1200px)'
      }}
    >
      {(matches: any) => (
        <>
          {matches.small && (
            <BackgroundImage
              Tag="section"
              fluid={query.mobile.childImageSharp.fixed}
            >
              {content}
            </BackgroundImage>
          )}
          {matches.medium && (
            <BackgroundImage
              Tag="section"
              fluid={query.tablet.childImageSharp.fixed}
            >
              {content}
            </BackgroundImage>
          )}
          {matches.large && (
            <BackgroundImage
              Tag="section"
              fluid={query.smalldesktop.childImageSharp.fixed}
            >
              {content}
            </BackgroundImage>
          )}
        </>
      )}
    </Media>
  );
};

export default injectIntl(SectionOne);
