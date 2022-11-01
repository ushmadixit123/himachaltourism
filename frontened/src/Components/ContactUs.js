import React from "react";
import * as Icon from "react-bootstrap-icons";
import Table from "react-bootstrap/Table";
import NavbarHead from "./Navbar";
import {
  Container,
  Card,
  Figure,
  CardGroup,
  Button,
  Col,
  Row,
} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import img1 from "../Images/card15.jpg";

function ContactUs() {
  return (
    <div>
      <NavbarHead />
      <Card border="light">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            <h2>Office Address</h2>
            <br></br>
          </Card.Title>
          <Card.Text>
            <Icon.HouseFill color="#6c5ce7" size={48} />
            <h5>Tourism & Civil Aviation Department</h5>
            Block No. 28, SDA Complex, Kasumpti, Shimla- 171009
            <br></br>
            <br></br>
            <Icon.TelephoneFill color="#6c5ce7" size={38} />
            <h5>Phone: 000-0000-0000</h5>
            Fax: 000-00000000
            <br></br>
            <br></br>
            <Icon.EnvelopeFill color="#6c5ce7" size={38} />
            <Link to="#" style={{ textDecoration: "none", color: "black" }}>
              <h5>Email: tourism.hp@project.in</h5>
              tourismmin-hp@projectnic.in
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
      <h4>
        Contact details of District Tourism Development Offices & Tourist
        Information Centres
      </h4>
      <br></br>
      <Container>
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Contact Address</th>
              <th>Telephone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                District Tourism Development Office, Kullu at Dhalpur, District
                Kullu(H.P). Pin-175101.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                District Tourism Development Office,Chamba, Near Bachat Bhawan,
                District Chamba (H.P) Pin-176310
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                District Tourism Development Office, Mandl-Bilaspur at Mandi,
                Near Visco Resort, Chadyara, P.O. Gutkhar, District Mandi
                (H.P.), Pin-175021.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                District Tourism Development Officer-cum-Sub Divisonal
                Magistrate, Lahaul at Keylong, District Lahaul & Spiti (H.P.).
                Pin-175132
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                District Tourism Development Officer-cum- Additional Deputy
                Commissioner, Spiti at Kaza, District Lahaul and Spiti (H.P).
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                District Tourism Development Officer Kinnaur-cum-Sub Divisonal
                Magistrate, Kalpa at Recong Peo, District Kinnaur (H.P)
                Pin-172107.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                District Tourism Development Office Shimla, 28, SDA Complex,
                Kasumpti, Shimla. (H.P). Pin - 171009
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                District Tourism Development Office Kangra, at Dharmshala, Near
                M.C. Office, District- Kangra (H.P).Pin-176215.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                District Tourism Development Office Solan-Sirmaur at Solan, Near
                Shivalik bl-metal factory, Chambaghat, District Solan (H.P.).
                Pin-173213
              </td>
              <td>01010101-02020202</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <h4>Contact details of Tourist Information Centers</h4>
        <br></br>
        <h4>Tourist Information Centers in the State</h4>
        <br></br>
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Tourist Information Centers</th>
              <th>Telephone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Tourist Information Center, Victory Tunnel, District Shimla
                (H.P.) Pin-171003.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Tourist Information Center, Tutikandi, Bypass, District Shimla
                (H.P). Pin-171005.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Tourist Information Center, Dharmshala, Near M.C. Office,
                District Kangra (H.P.) Pln-176215, Culle
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Tourist Information Center, Dalhousie, Near Bus Stand Dalhousie,
                District Chamba (H.P.), Pin-176304.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Tourist Information Center, Manali, Near Hotel Kunzum, The Mall
                Manali (Kullu), H.P. Pin-175131.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                Tourist Information Center, Solan, Near Shivalik bi-metal
                factory, Chambaghat, District Solan (H.P.). Pin-173213.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                Tourist Information enter, Reckong Peo, Near D.C Office,
                Ramleela Ground, Kinnaur (H.P.) Pin-172107.
              </td>
              <td>01010101-02020202</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <h4>Tourist Information Centers outside the State</h4>
        <br></br>
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Tourist Information Centers</th>
              <th>Telephone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Himachal Tourism- Tourist Information Centre, Mumbai. 36, World
                Trade Centre, Cuffe Parade, Mumbai (Maharashtra). Pin-400005.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Himachal Tourism- Tourist Information Centre, Kolkata. 2H, 2nd
                Floor, Electronic Centre, 1/1A, Biplabi Anukul Chandra street,
                Kolkata (West Bengal). Pin-700072.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Himachal Tourism- Tourist Information Centre, Chennai. Tamilnadu
                Tourism Complex, Wallajah Road, Chennal (Tamilnadu). Pin-600102.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Himachal Tourism- Tourist Information Centre, Ahmedabad. 205,
                Shilp-ll, Near Income Tax Office, Ashram Road, Ahmedabad
                (Gujarat). Pin-380009.
              </td>
              <td>01010101-02020202</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Himachal Tourism - Tourist Information Centre, Delhi. Chanderlok
                Building, 36, Janpath, New Delhi. Pin-110001.
              </td>
              <td>01010101-02020202</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <br></br>
    </div>
  );
}

export default ContactUs;
