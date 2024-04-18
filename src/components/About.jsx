import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import image from "../../public/Images/blackPink.jpg";
import Common from "./Common";

function About() {
  return (
    <Fragment>
      <Common
        name="Welcome to about page"
        imgSrc={image}
        visit="/contact"
        btnName="Contact Now"
      />
    </Fragment>
  );
}

export default About;
