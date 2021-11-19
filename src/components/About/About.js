import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
// import mobile from "../../images/undraw_emails_re_cqen.svg";
const About = () => {
  //About Section
  return (
    <section className="about">
      <Container>
        <h2 className="section-heading">WHY CHOOSE US?</h2>
        <Row className="align-items-center">
          <Col xl={6} md={4} className="text-center">
            <img src="https://i.ibb.co/x8gv0pd/Male-workplace-with-laptop-and-smartphone-with-blank-screen-for-advertisement-coffee-cup-and-glasses.jpg" alt="mobile" className="img-fluid" width="100%" />
          </Col>
          <Col xl={6} md={8}>
            <h3>We Provide latest and best laptops with the time</h3>
            <p>
              Get creative on the go with the best computers you can buy in
              2021.Which are the best computers in 2021? Choosing a new
              computer is no longer as simple as upgrading to the latest
              Apple, HP, DELL or ASUS. After all, with top-of-the-line laptos over £1,000, it pays to know your options, and which fantastic work station could save you some cash.
            </p>
            <div className="icons-container ">
              <div className="icons">
                <i className="fas fa-shipping-fast"></i>
                <span>free delivery</span>
              </div>
              <div className="icons">
                <i className="fas fa-dollar-sign"></i>
                <span>easy payments</span>
              </div>
              <div className="icons">
                <i className="fas fa-headset"></i>
                <span>24/7 service</span>
              </div>
              <button className="btn-style">Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
