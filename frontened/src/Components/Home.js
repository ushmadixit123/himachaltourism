import React from "react";
import Carousel from "react-bootstrap/Carousel";
import NavbarHead from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home.css";

import {
  Container,
  Card,
  Figure,
  CardGroup,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../Images/carousel1.jpg";
import img2 from "../Images/carousel2.jpg";
import img3 from "../Images/carousel3.jpg";
import img4 from "../Images/card1.jpg";
import img5 from "../Images/card2.jpg";
import img6 from "../Images/card3.jpg";
import img7 from "../Images/card4.jpg";
import img8 from "../Images/card5.jpg";
import img9 from "../Images/card6.jpg";

function Home() {
  return (
    <div >
      <div className="container-fluid">
        <NavbarHead />
        <Carousel transition-duration ="2s">
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={img1}
            />
            <Carousel.Caption>
              <h3>Fresh air, Social Distancing is the new self-care</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={img2}
            />
            <Carousel.Caption>
              <h3>Picture-perfect view, Keep a sanitizer and mask with you</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={img3}
            />
            <Carousel.Caption>
              <h3>Heavenly view, Ensure safety right through</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>
      <div>
        <h2>The Land of Gods</h2>
      </div>
      <br></br>

      {/* CARD */}

      <div>
        <Container>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Himalayas</Card.Title>
                <br></br>
                <Button variant="outline-primary">
                  <Link
                    className="viewmorebutton"
                    to="/himalayas"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>Flora & Fauna</Card.Title>
                <br></br>
                <Button variant="outline-primary">
                  <Link
                    className="viewmorebutton"
                    to="/flora&fauna"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title>Cuisine</Card.Title>
                <br></br>
                <Button variant="outline-primary">
                  <Link
                    className="viewmorebutton"
                    to="/cuisine"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        <br></br>
        <Container>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img7} />
              <Card.Body>
                <Card.Title>Adventure</Card.Title>
                <br></br>
                <Button variant="outline-primary">
                  <Link
                    className="viewmorebutton"
                    to="/adventure"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={img8} />
              <Card.Body>
                <Card.Title>Culture & Heritage</Card.Title>
                <br></br>
                <Button variant="outline-primary">
                  <Link
                    className="viewmorebutton"
                    to="/culture&heritage"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={img9} />
              <Card.Body>
                <Card.Title>Unexplored</Card.Title>
                <br></br>
                <Button variant="outline-primary">
                  <Link
                    className="viewmorebutton"
                    to="/unexplored"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
      <br></br>
    </div>
  );
}

export default Home;
