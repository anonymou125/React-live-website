import React, { Fragment } from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

function Service() {
  return (
    <Fragment>
      <div className="my-5">
        <h1 className=" text-center text-[2vw] font-bold">our survices</h1>
      </div>
      <div className="container-fluid pb-[15vw] w-full h-auto  relative mb-0">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {/* <Cards /> */}
              {Sdata.map((val, index) => {
                return (
                  <Cards
                    key={index}
                    imgSrc={val.src}
                    title={val.imageName}
                    description={val.description}
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
