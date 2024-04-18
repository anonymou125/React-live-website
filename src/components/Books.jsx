import React, { Fragment, useState } from "react";
import Cards from "./Cards";
import Data from "../../public/example.json";

function Books() {
  return (
    <Fragment>
      <div className="tag flex justify-center items-center">
        <h1 className="text-white px-5 py-2 mb-[2vw] rounded-lg bg-green-500 uppercase font-bold text-[2vw]">
          our books
        </h1>
      </div>
      <div className="container-fluid h-auto w-full">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Data.map((items) => {
                return (
                  <Cards
                    key={items.id}
                    imgSrc={items.image}
                    title={items.name}
                    url={items.link}
                    description={items.description}
                    course="buy books"
                    buttonColor="red"
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

export default Books;
