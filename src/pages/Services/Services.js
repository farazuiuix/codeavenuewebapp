import React from "react";
import "./Services.css";
import Navigation from "../../components/Navigation/Navigation";
import { Col, Grid, Row } from "react-flexbox-grid";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import uiux from './../../assets/design.png'
import consult from './../../assets/brainstorming.png'
import software from './../../assets/software-development.png'


export default function Services() {
  return (
    <div>
      <Navigation />
      <Grid>
        <Hero
          noPad
          title={"Services"}
          subTitle={"CodeAvenue offers a variety of services including"}
          align={"center"}
        >
          <Row className="smooth">
            <Col xs={12} sm={6} md={12}>
              <Row className="card">
                <Col xs={12} sm={2}>
                  <img src={uiux} className="icon-image" />
                </Col>
                <Col xs={12} sm={9}>
                  <Header size={"md"} bold>
                    UI/UX Design
                  </Header>
                  <p>
                    UI/UX (User Interface/User Experience) design is a crucial
                    aspect of software development. It involves creating an
                    intuitive and visually appealing interface that enhances
                    user experience while interacting with the software. The
                    goal of UI/UX design is to create a seamless experience for
                    the user, where they can easily navigate through the
                    software, access the features they need and perform tasks
                    with minimal effort.
                  </p>
                </Col>
              </Row>
              <br />
              <Row className="card">
                <Col xs={12} sm={2}>
                  <img src={software} className="icon-image" />
                </Col>
                <Col xs={12} sm={9}>
                  <Header size={"md"} bold>
                    Development
                  </Header>
                  <p>
                    Web and mobile development are two of the most important
                    aspects of software development. With the rise of
                    smartphones and tablets, mobile development has become
                    increasingly important, as users expect to be able to access
                    software and services from their mobile devices. Web
                    development, on the other hand, is essential for creating
                    websites and web applications that can be accessed from any
                    device with an internet connection. Both web and mobile
                    development require a deep understanding of programming
                    languages and software architecture, as well as an ability
                    to create intuitive and visually appealing interfaces.
                  </p>
                </Col>
              </Row>
              <br />
              <Row className="card">
                <Col xs={12} sm={2}>
                  <img src={consult} className="icon-image" />
                </Col>
                <Col xs={12} sm={9}>
                  <Header size={"md"} bold>
                    Consultation
                  </Header>
                  <p>
                    UI/UX (User Interface/User Experience) design is a crucial
                    aspect of software development. It involves creating an
                    intuitive and visually appealing interface that enhances
                    user experience while interacting with the software. The
                    goal of UI/UX design is to create a seamless experience for
                    the user, where they can easily navigate through the
                    software, access the features they need and perform tasks
                    with minimal effort.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Hero>
      </Grid>
    </div>
  );
}
