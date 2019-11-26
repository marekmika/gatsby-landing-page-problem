import { graphql, useStaticQuery } from 'gatsby';

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
  const result = useStaticQuery(query);
  return result;
};
