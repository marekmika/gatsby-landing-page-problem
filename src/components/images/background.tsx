import { graphql, useStaticQuery } from 'gatsby';
import useMediaQuery from '../../hooks/use-media-query';
import { sizes } from '../../styles/sizes';

const query = graphql`
  {
    bigdesktop: file(relativePath: { eq: "background-gatsby.jpg" }) {
      childImageSharp {
        fixed(width: 3700) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    smalldesktop: file(relativePath: { eq: "background-gatsby.jpg" }) {
      childImageSharp {
        fixed(width: 1400) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    tablet: file(relativePath: { eq: "background-gatsby.jpg" }) {
      childImageSharp {
        fixed(width: 853) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobile: file(relativePath: { eq: "background-gatsby.jpg" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

export const backgroundImage = () => {
  const { bigdesktop, smalldesktop, tablet, mobile } = useStaticQuery(query);
  const isDesktop = useMediaQuery(`(max-width: ${sizes.breakpointsMax.hg})`);
  const isTablet = useMediaQuery(`(max-width: ${sizes.breakpointsMax.xl})`);
  const isMobile = useMediaQuery(`(max-width: ${sizes.breakpointsMax.sm})`);

  if (isMobile) {
    return mobile.childImageSharp.fixed;
  }

  if (isTablet) {
    return tablet.childImageSharp.fixed;
  }

  if (isDesktop) {
    return smalldesktop.childImageSharp.fixed;
  }

  return bigdesktop.childImageSharp.fixed;
};
