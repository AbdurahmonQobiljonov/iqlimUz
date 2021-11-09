import React from "react";
import ContentLoader from "react-content-loader";

const HeadLoader = () => (
  <ContentLoader
    speed={0.9}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#80dbd5"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="350" />
  </ContentLoader>
);

export default HeadLoader;
