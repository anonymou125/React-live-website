import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <Fragment>
      <section id="header" className="flex items-center pb-[15vw]">
        <div className="container-fluid text-black">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 flex flex-col text-start items-center pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    {props.name}
                    <br />
                    <strong className="brand_name">anonymous</strong>
                  </h1>
                  <h2 className="my-3 text-[1.5vw]">
                    we are the team of talented developer websites
                  </h2>
                  <div className="btn btn-light btn-get-started mt-3">
                    <NavLink to={props.visit}>{props.btnName}</NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="cant load"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Common;
