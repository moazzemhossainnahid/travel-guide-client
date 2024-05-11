import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({title}) => {
  return (
    <Helmet>
      <title>{title}-Travel Thirsty</title>
    </Helmet>
  );
};

export default PageTitle;
