import React from "react";
import NavbarHead from "./Navbar";

import {
  Container,
  Popover,
  Table,
  Form,
  Card,
  Button,
  Image,
  Nav,
  FormControl,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";

import img1 from "../Images/card20.jpg";
import img2 from "../Images/card21.jpg";
import img3 from "../Images/card22.jpg";
import img4 from "../Images/card23.jpg";
import img5 from "../Images/card24.jpg";
import img6 from "../Images/card25.jpg";
import img7 from "../Images/card26.jpg";
import img8 from "../Images/card27.jpg";
import img9 from "../Images/card28.jpg";

function Floraandfauna() {
  return (
    <div>
      <NavbarHead />
      <Card border="light">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            <h3>Flora & Fauna</h3>
          </Card.Title>
        </Card.Body>
      </Card>
      <br></br>
      <Container>
        <h5>
          A green pearl in the Himalayan crown, Himachal Pradesh is blessed with
          a rich flora and fauna that graces the land with grandeur and majesty.
          In the highlands, stealthily the elusive snow leopard hunts blue sheep
          and in the last refuge of undisturbed western Himalayan habitat, at
          the Great Himalayan National Park, the rare but visually stunning
          western tragopan and monal pheasants find a protected shelter. Other
          animals that can be sighted in the wild include the ibex, wild yak,
          ghoral deer, musk deer, Himalayan black bear, brown bear, leopards and
          the Himalayan Thar.
        </h5>
      </Container>
      <Container>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Card.Img src={img2} />
          </Col>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Snow leopard</h4>
            Home to an extremely hostile habitat of snow mountain ranges, the
            snow leopard is a powerful predator preying mainly upon blue sheep
            and the ibex. Master of its environment and mostly living a solitary
            life, the snow leopard is the state animal of Himachal Pradesh.
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Himalayan Yak</h4>
            Standing 6 feet tall at the shoulder, the massively built yak is a
            long haired bovine found in the higher Himalayan region. The shaggy
            beast has been domesticated and besides providing meat, fibre, milk
            and hide, yaks also serve as the beasts of burden in Spiti, Lahaul
            and parts of Chamba.
          </Col>
          <Col>
            <Card.Img src={img3} />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card.Img src={img4} />
          </Col>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Himalayan Black Bear</h4>
            This bear is a sub-specie of the Asiatic black bear with a
            distinctive necklace of white fur across its chest. It's natural
            habitat is forested areas with rocky outcrops having caves. Black
            bears are very aggressive towards humans and is counted among the
            most deadly animals of India.
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Western Tragopan</h4>
            Adored as 'Jujurana' - king among birds, the Western Tragopan is a
            rare pheasant found only in narrow range of the temperate Himalayas.
            In the wild the pheasant has been sighted in the Beas, Satluj and
            Ravi river catchment areas. This majestic bird is the state bird of
            Himachal Pradesh. Monal-Found in forested tracts between 2000 to
            3500 meters altitude in the north-western Himalayan belt, the Monal
            pheasant is known for its bright plumage. Only the male has such
            beauty, the female is a dull brown companion. This pheasant can be
            spotted in the higher reaches of Shimla, Kinnaur, Kangra, Kullu and
            Chamba mountains.
          </Col>
          <Col>
            <Card.Img src={img5} />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card.Img src={img6} />
          </Col>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Musk Deer</h4>
            This rare deer normally lives far from human habitation in a habitat
            of hilly and forested environment in mountain ranges. The aromatic
            musk scent glands found only in adult males are for attracting
            mates.
          </Col>
        </Row>
        <br></br>
        <br></br>
        <h4>
          From dry scrub vegetation with broad leaved trees spread out over the
          lower Shivalik mountains, to deep coniferous and oak forests of the
          mid hills and the alpine pasture lands found above the treeline, the
          flora of Himachal is as diverse as the land. Between these extremes
          can be found tropical to temperate vegetational zones of mixed
          deciduous forests, bamboo, chil, oaks, rhododendron, deodar, kail,
          fir, spruce, juniper and birch. Abundance of wild flowers, ferns and
          rich medicinal herbs are found in the forests and the alpine meadows.
        </h4>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Pink Rhododendron</h4>
            Originally Rhododendrons are natives of Asia and when one is in
            bloom, it is a sight to behold. Pink rhododendron is a rare
            rhododendron that is only found close to the treeline in the high
            ranges. Locally known as 'Gulabi Buransh, the Pink Rhododendron is
            the state flower of Himachal Pradesh.
          </Col>
          <Col>
            <Card.Img src={img7} />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card.Img src={img8} />
          </Col>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <h4>Pong Dam Wetland</h4>
            In the winter months thousands of migratory binds after flying
            mormous distances live out the season in the states extensive
            wetlands. One of them-Pong Dam wetland, has been declared a Ramsar
            Wetland site of international importance. Spread over 307 square
            kilometers, this wetland began to attract winter migratory birds
            from as far as the Arctic region and Siberia soon after the Pong Dam
            was built on River Beas in 1975. in recent times more than 220 bird
            species of 54 families have been recorded in this wetland The warm
            waters of Bhakra Dam and Pong Dam reservoirs hold an abundance of
            fish, which includes the sporty Golden Mahseer, Brown and rainbow
            trout thrive in the snow fed cold streams of Baspa in Sangla valley,
            Uhl in Barot valley and Pabbar in Rohru valley.
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Trout & Golden Mahseer</h4>
            Mahseers are a world famous game fish and the Golden Mahseer is on
            of the most sought after one. Also known as the Greyhound, anglers
            consider this fish that can weigh upto 70 Kgs as one of the finest
            sport-fish found in the Himalayan belt. Trout introduced from Europe
            into snow fed cold streams in the early part of the 20th century,
            trout have thrived in many streams of Himachal Pradesh. An anglers
            sporting delight, both Brown and Rainbow trout are also commercially
            farmed as table fish.
          </Col>
          <Col>
            <Card.Img src={img9} />
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
  );
}

export default Floraandfauna;
