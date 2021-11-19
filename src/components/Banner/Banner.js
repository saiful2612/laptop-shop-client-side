import React from "react";
import { useHistory } from "react-router";
import "./Banner.css";
const Hero = () => {
  const history = useHistory();
  //Banner
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <h6>WELCOME TO Gadget SHOP</h6>
            <h1>Be Smarter with the time</h1>
            <p>
              No matter where you are, a laptop allows you to bring your work with you.
            </p>
            <button
              className="btn-style btn-style-secondary"
              onClick={() => history.push("/smartphones")}
            >
              {" "}
              Show all Laptops
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
