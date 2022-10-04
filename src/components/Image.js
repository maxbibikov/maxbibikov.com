import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/profile-pic.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 100
            formats: WEBP
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="My face"
    />
  );
};

export default Image;
