import React, { Fragment, useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullName: "",
    Phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = () => {
    alert(`
    your full name is : ${data.fullName}
    your phone number is : ${data.Phone}
    your email is : ${data.email}
    my message to this page is : ${data.msg}  

    `);
  };
  return (
    <Fragment>
      <div className="my">
        <h1 className="text-center capitalize text-[5vw] font-bold py-[2vw] color-dark">
          Contact{" "}
          <span style={{ color: "red", textTransform: "uppercase" }}> Us</span>
        </h1>
      </div>
      <div className="container  h-screen contact_div">
        <div className="row">
          <div className="col-md-6 col-10  mx-auto">
            <form
              onSubmit={formSubmit}
              className="bg-gray-100 rounded-md px-[5vw]"
            >
              <div className="form-group ">
                <label htmlFor="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control mb-[2vw]"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                />
                <label htmlFor="exampleFormControlInput1">Phone Number </label>
                <input
                  type="number"
                  className="form-control mb-[2vw]"
                  id="exampleFormControlInput1"
                  name="Phone"
                  value={data.Phone}
                  onChange={inputEvent}
                  placeholder="mobile number "
                />
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control mb-[2vw]"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control mb-[2vw]"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-[2vw]"
                data-toggle="button"
                aria-pressed="false"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
