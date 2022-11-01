import React from "react";
import Figure from "react-bootstrap/Figure";
import NavbarHead from "./Navbar";
import img1 from "../Images/card14.jpg";
import {
  Container,
  Popover,
  Table,
  Form,
  Button,
  Image,
  Nav,
  FormControl,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";

function AboutUs() {
  return (
    <Figure>
      <NavbarHead />
      <Figure.Image src={img1} />
      <br></br>
      <br></br>
      <br></br>
      <Figure.Caption>
        <h2>About Us</h2>
        <br></br>
        <Container>
          <h5>
            Till 19th century, Tourism in Himachal Pradesh was restricted only
            to a limited movement of pilgrims to a few spiritual destinations in
            around the hills. Only whwn the British established their chain of
            hill sations did tourism receive recognition in the state.Tourism
            activity received a shot in the arm when British declared Shimla
            "The Summer Capital of India" in 1864. Post independence, more
            investment in the infrastructure sector led to opening up of Tourism
            in the state. However the biggest boost to tourism occured in the
            mid 80s and 90s.
          </h5>
          <br></br>
          <br></br>
          <h5>
            While traditionally Himachal was known as a summer destination, the
            Department of Tourism & Civil Aviation has taken special efforts to
            break the seasonality factor and has developed diversified tourism
            products to attract tourists in other seasons too. Now Himachal is
            known as "A Destination for All Seasons and All Reasons". In fact,
            the Department has laid a special emphasis on the developement of
            activity-based tourism and opening up of new sub destinations. To
            promote tourism in the countryside and to unexplored areas,
            appropriate infrasture is being developed within available
            resources. By focussing on quality tourists, the Department aims at
            promoting sustainable tourism and encouraging private sector to
            develop tourism related infrastructure in the state without
            disturbing the Existing ecology and environment.
          </h5>
          <br></br>
        </Container>
      </Figure.Caption>
    </Figure>
  );
}

export default AboutUs;
