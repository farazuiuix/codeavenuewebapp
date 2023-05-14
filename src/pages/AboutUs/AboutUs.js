import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navigation from '../../components/Navigation/Navigation'
import { Row, Grid, Col} from 'react-flexbox-grid'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div>
      <Navigation />
      <Grid>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <img
              className="codeavenue-section-image"
              width={"100%"}
              src={
                "https://images.pexels.com/photos/7652039/pexels-photo-7652039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="hero2"
            />
          </Col>
          <Col xs={12} sm={6} md={7} mdOffset={1}>
            <Hero
              noPad
              title={"About Us"}
              subTitle={""}
              align={"left"}
              className="smooth"
            >
              <p>
                CodeAvenue is a software development company that specializes in
                providing{" "}
                <strong>
                  {" "}
                  UI/UX design, mobile app development, and web development
                  services
                </strong>{" "}
                using the latest technologies. Our team consists of experienced
                developers who are passionate about creating innovative
                solutions for our clients.
              </p>
              <p>
                At CodeAvenue, we understand that every business is unique, and
                we work closely with our clients to develop customized solutions
                that meet their specific needs. Our development process is
                collaborative, and we value open communication throughout the
                entire project lifecycle.
              </p>
              <p>
                We pride ourselves on staying up-to-date with the latest
                technologies and tools. Our developers are skilled in{" "}
                <strong>
                  ReactJS, JavaScript, AWS, Firebase, and Ruby on Rails,
                </strong>{" "}
                among other technologies. We believe in using the best tools
                available to ensure that our clients receive the highest quality
                solutions possible.
              </p>
              <p>
                Our commitment to quality extends beyond our technical
                expertise. We value our clients’ time and budget, and we work
                tirelessly to ensure that every project is delivered on time and
                within budget. We believe in building long-term relationships
                with our clients, and we strive to exceed their expectations on
                every project.
              </p>
              <p>
                At CodeAvenue, we are not just a software development company.
                We are a partner, dedicated to helping our clients achieve their
                goals through technology. If you are looking for a reliable
                partner for your next software development project, please
                contact us to learn more about our services. We would be honored
                to help you turn your vision into reality.
              </p>
            </Hero>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
