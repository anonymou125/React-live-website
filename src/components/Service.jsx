import React, { Fragment, useState } from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";

function Service() {
  return (
    <Fragment>
      <div className="my-5 flex justify-center gap-10 items-center">
        <h1 className=" text-center text-[2vw] font-bold">our survices</h1>
        <NavLink
          to="/books"
          type="button"
          className="btn text-white text-[1.5vw] btn-success "
          data-toggle="button"
          aria-pressed="false"
        >
          see our books
        </NavLink>
      </div>
      <div className="container-fluid pb-[15vw] w-full h-auto  relative mb-0">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-[2vw">
              {/* <Cards /> */}
              {Sdata.map((val, index) => {
                return (
                  <Cards
                    key={index}
                    imgSrc={val.src}
                    title={val.imageName}
                    description={val.description}
                    course="explore our course"
                    buttonColor="green"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Service;
