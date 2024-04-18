import React, { Fragment } from "react";
import Image from "../../public/Images/blackPink.jpg";
import { NavLink } from "react-router-dom";

function Cards(props) {
  return (
    <Fragment>
      <div className="col-md-4  col-10 mx-auto">
        <div className="card">
          <img src={props.imgSrc} className="card-img-top" alt="cant load" />
          <div className="card-body">
            <h5 className="card-title font-bold uppercase">{props.title}</h5>
            <p className="card-text">{props.description} </p>
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
