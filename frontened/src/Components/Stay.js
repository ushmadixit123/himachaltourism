import React, { useState } from "react";
import Figure from "react-bootstrap/Figure";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import NavbarHead from "./Navbar";
import "./Stay.css";
import {
  Container,
  Popover,
  Table,
  Form,
  Modal,
  Card,
  CardGroup,
  Button,
  Image,
  Nav,
  FormControl,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Navbarhead from "./Navbar";
import img1 from "../Images/card56.jpg";
import img2 from "../Images/card57.jpg";
import img3 from "../Images/card58.jpg";
import img4 from "../Images/card59.jpg";
import img5 from "../Images/card60.jpg";
import img6 from "../Images/card61.jpg";
import img7 from "../Images/card62.jpg";
import img8 from "../Images/card63.jpg";
import img9 from "../Images/card64.jpg";
import img10 from "../Images/card65.jpg";
import Book from "../Images/Book.gif";

function Stay(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [efirstname, setfirstname] = useState("");
  const [elastname, setlastname] = useState("");
  const [eaddress, setaddress] = useState("");
  const [ecity, setcity] = useState("");
  const [estate, setstate] = useState("");
  const [epincode, setpincode] = useState("");
  const [ephonenumber, setphonenumber] = useState("");
  const [eemail, setemail] = useState("");
  const [echeckindate, setcheckindate] = useState("");
  const [enumberofdays, setnumberofdays] = useState("");
  const [msg, setMessage] = useState("");

  const onChangefirstname = (e) => setfirstname(e.target.value);
  const onChangelastname = (e) => setlastname(e.target.value);
  const onChangeaddress = (e) => setaddress(e.target.value);
  const onChangecity = (e) => setcity(e.target.value);
  const onChangestate = (e) => setstate(e.target.value);
  const onChangepincode = (e) => setpincode(e.target.value);
  const onChangephonenumber = (e) => setphonenumber(e.target.value);
  const onChangecheckindate = (e) => setcheckindate(e.target.value);
  const onChangeemail = (e) => setemail(e.target.value);
  const onChangenumberofdays = (e) => setnumberofdays(e.target.value);


  const handleUser = (evt) => {
    evt.preventDefault();
    console.log(`HOTEL BOOKED:`);
    console.log(`FIRSTNAME: ${efirstname}`);
    console.log(`EMAIL: ${eemail}`);
    // console.log(`EMAIL: ${enumberofdays}`);

    const userinfo = {
      firstname: efirstname,
      lastname: elastname,
      address: eaddress,
      city: ecity,
      state: estate,
      pincode: epincode,
      phonenumber: ephonenumber,
      email: eemail,
      checkindate: echeckindate,
      numberofdays: enumberofdays,
    };

    axios
      .post("http://localhost:5000/admin/hotelbooking", userinfo)
      .then((res) => {
        console.log(res.data);
        console.log("--------------"+res.data.message);
        if(res.data.success!= -1)
        {
          props.history.push("/payment");
          // setMessage(res.data.message);
        }
       else
        {
        // props.history.push("/payment");
        setMessage(res.data.message);
       }
        // setMessage("HOTEL BOOKED");
      });

      //props.history.push("/payment");
    // setShow(false);

    setfirstname("");
    setlastname("");
    setaddress("");
    setcity("");
    setstate("");
    setpincode("");
    setphonenumber("");
    setemail("");
    setcheckindate("");
    setnumberofdays("");
  };

  return (
    <Figure>
      <Navbarhead />
      <Figure.Image src={img1} />
      <br></br>
      <br></br>
      <Figure.Caption>
        <h2>Luxury for Less</h2>
        <h3>Your home away from home!</h3>
        <br></br>
        {/* <form onSubmit={handleSubmit}> */}
        <Container>
          <Modal show={show} onHide={handleUser}>
            <Modal.Header style={{ height: "100px" }}>
              {/* <Modal.Title>Booking Details</Modal.Title> */}
              <Modal.Title>
                Booking Details{" "}
                {/* <h4 style={{ color: "navy blue" }}>{msg}</h4> */}
                <img
                  src={Book}
                  style={{
                    height: "100px",
                    width: "100px",
                    marginLeft: "150px",
                  }}
                />
                {/* <h4 style={{ color: "navy blue" }}>{msg}</h4> */}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalbox">
            <h4 style={{ color: "white" }}>{msg}</h4>
              <br></br>
              <Row>
                <Col md="6">
                  <div className="modalbox2">
                    <input
                      required
                      type="text"
                      value={efirstname}
                      onChange={onChangefirstname}
                    ></input>
                    <label>First Name</label>
                  </div>
                </Col>
                <Col md="6">
                  <div className="modalbox2">
                    <input
                      required
                      type="text"
                      value={elastname}
                      onChange={onChangelastname}
                    ></input>
                    <label>Last Name</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div className="modalbox2">
                    <input
                      required
                      type="text"
                      value={eaddress}
                      onChange={onChangeaddress}
                    ></input>
                    <label>H.no./Flat.no.</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <div className="modalbox2">
                    <input
                      required
                      type="text"
                      value={ecity}
                      onChange={onChangecity}
                    ></input>
                    <label>City</label>
                  </div>
                  
                </Col>
                <Col md="6">
                  <div className="modalbox2">
                    <input
                      required
                      type="text"
                      value={estate}
                      onChange={onChangestate}
                    ></input>
                    <label>State</label>
                  </div>
                  {/* <select value={estate} onChange={onChangestate}>
                    <option value="AF">Afghanistan</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </select> */}
                </Col>
                <Row>
                  <Col md="4">
                    <div className="modalbox2">
                      <input
                        required
                        type="number"
                        value={epincode}
                        onChange={onChangepincode}
                      ></input>
                      <label>Pincode</label>
                    </div>
                  </Col>
                </Row>
              </Row>
              
              
              <Row>
                <Col md="6">
                  <div className="modalbox2">
                    <input
                      required
                      type="number"
                      value={ephonenumber}
                      onChange={onChangephonenumber}
                    ></input>
                    <label>Phone Number</label>
                  </div>
                </Col>
                <Col md="6">
                  <div className="modalbox2">
                    <input
                      required
                      type="text"
                      value={eemail}
                      onChange={onChangeemail}
                    ></input>
                    <label>Email</label>
                  </div>
                </Col>
              </Row>
              <Row>
              <Col md="6">
                  <div className="modalbox2">
                    <input
                      required=""
                      type="date"
                      // placeholder="DD-MM-YYYY"
                      value={echeckindate}
                      onChange={onChangecheckindate}
                    ></input>
                    <label>Check in Date</label>
                  </div>
                </Col>
                <Col md="6">
                  <div className="modalbox2">
                    <input
                      required
                      type="number"
                      value={enumberofdays}
                      onChange={onChangenumberofdays}
                    ></input>
                    <label>Number of Days</label>
                  </div>
                </Col>
              </Row>
              <Row>
                  <Col md="4">
                    <div className="modalbox2">
                      {/* <input
                        required
                        type="number"
                        value={epincode}
                        onChange={onChangepincode}
                      ></input> */}
                      <select width="10%" value={estate} onChange={onChangestate} placeholder="Select Hotel">
                    <option value="AF">UV Cottage</option>
                    <option value="India">Hotel Shubham</option>
                    <option value="UK">Home Inn Shimla</option>
                    <option value="USA">Taj Theog Resort & Spa, Shimla</option>
                    <option value="USA">Echor-Narkanda Cottages</option>
                    <option value="USA">The Oberoi Cecil, Shimla</option>
                    <option value="USA">Woodville Palace Hotel Shimla</option>
                    <option value="India">Shimla British Resort</option>
                    <option value="India">The Heritage</option>
                    
                    
                </select>
                      {/* <label>Hotel</label> */}
                    </div>
                  </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button className="btn btn-warning" onClick={handleClose}>
                Close
              </Button>
              <Button className="btn btn-success" onClick={handleUser}>
                Continue
              </Button>
              {/* <input
                  type="submit"
                  value="Continue"
                  className="btn btn-primary"
                /> */}
            </Modal.Footer>
          </Modal>
          <CardGroup>
            <Card border="light">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Hotel Shubham</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
            <Card border="light">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Home Inn Shimla</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
            <Card border="light">
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Taj Theog Resort & Spa, Shimla</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        <br></br>
        <br></br>
        <Container>
          <CardGroup>
            <Card border="light">
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>Echor-Narkanda Cottages</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
            <Card border="light">
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title>UV Cottage</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
            <Card border="light">
              <Card.Img variant="top" src={img7} />
              <Card.Body>
                <Card.Title>The Oberoi Cecil, Shimla</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        {/* </form> */}
        <br></br>
        <br></br>
        <Container>
          <CardGroup>
            <Card border="light">
              <Card.Img variant="top" src={img8} />
              <Card.Body>
                <Card.Title>Woodville Palace Hotel Shimla</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
            <Card border="light">
              <Card.Img variant="top" src={img9} />
              <Card.Body>
                <Card.Title>Shimla British Resort</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
            <Card border="light">
              <Card.Img variant="top" src={img10} />
              <Card.Body>
                <Card.Title>The Heritage</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Icon.HouseFill color="#636e72" size={15} />
                      3-Star Hotel
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.CupFill color="#636e72" size={15} />
                      Free Breakfast
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.DoorClosedFill color="#636e72" size={15} />
                      Kitchen Services
                    </Col>
                    <br></br>
                    <Col>
                      <Icon.BellFill color="#636e72" size={15} />
                      Room Services
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Icon.Wifi color="#636e72" size={15} />
                      WIFI
                    </Col>
                  </Row>
                  <br></br>
                  <strong>INR 2500/Day</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        <br></br>
        <br></br>
      </Figure.Caption>
    </Figure>
  );
}

export default Stay;
