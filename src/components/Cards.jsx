import React, { Fragment } from "react";
// import Image from "../../public/Images/blackPink.jpg";
import { NavLink } from "react-router-dom";

function Cards(props) {
  return (
    <Fragment>
      <div className="col-md-4  col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgSrc}
            className="max-h-[25vw] card-img-top"
            alt="cant load"
          />
          <div className="card-body">
            <h5 className="card-title font-bold uppercase">{props.title}</h5>
            <p className="card-text text-[1.2vw] ">{props.description} </p>
            <p>{props.url}</p>
            <NavLink
              to="#"
              className="btn btn-primary"
              style={{ backgroundColor: props.buttonColor }}
            >
              {props.course}
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
