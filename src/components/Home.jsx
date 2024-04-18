import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import image from "../../public/Images/walpapers.jpg";
import Common from "./Common";

function Home() {
  return (
    <Fragment>
      <Common
        name="Grow your business "
        imgSrc={image}
        visit="/service"
        btnName="get started"
      />{" "}
    </Fragment>
  );
}

export default Home;
