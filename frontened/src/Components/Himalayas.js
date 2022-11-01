import React from "react";
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

import img1 from "../Images/card16.jpg";
import img2 from "../Images/card17.jpg";
import img3 from "../Images/card18.jpg";
import img4 from "../Images/card19.jpg";

function Himalayas() {
  return (
    <div>
      <NavbarHead />
      <Card border="light">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            <h3>Great Himalayas</h3>
          </Card.Title>
        </Card.Body>
      </Card>
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
          <br></br>
          This highest mountain chain in the world has been revered and
          worshipped down the ages as the abode of the Gods. Many peaks and
          mountain lakes in Himachal are considered sacred where believers,
          braving storm and snow, trek to an annual pilgrimage.Himalayas is the
          ultimate adventure sports destination. And for the tourists they have
          the most exotic and picturesque holiday resorts found on earth. But
          for the pilgrims they are the most sacred and revered mountain ranges
          in the world. From ancient times these holy mountains were considered
          the abode of Lord Shiva. It was here in the mist shrouded crags of
          these mystic ranges that the legends and myths of Hinduism were born
          and thrive to this day. Drive along ancient pilgrim trails, visit the
          remote Himalayan temples and shrines and experience the serenity and
          tranquillity of the Himalayas. Travel on the same trail used by
          pilgrims for centuries to visit sacred pilgrimage site such as Kailash
          Mansarovar, the Holy Mountain in Tibet and the Char Dhams Kedarnath,
          Badrinath, Yamunotri, and Gangotri. In the Trans-Himalayan regions the
          Monasteries, often built on steep slopes, still dominate social life
          and religious practices that continues in much the same way.
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Rising from the Shivalik ranges and moving higher into mid-Himalayas,
          Greater Himalayas and beyond, into the trans-Himalayas vast expanse of
          western Tibet, Himachal Pradesh is land of of grand diversity. It has
          peaks up to 7,026 m high. Some of the well-known peaks are Shilla
          (6,132 m) and Riwo Phargyul (6,791 m); these are among the highest
          peaks in this range. There are many glaciers over the Zaskar and the
          Great Himalayan ranges. Himachal is well known for its rich flora.
        </Col>
        <Col>
          <Card.Img src={img3} />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <Card.Img src={img4} />
        </Col>
        <Col>
          <br></br>
          <br></br>
          Rivers born of vast glacial fields are the life soul of the people
          living on the Indo-Gangetic and Brahmaputra plains. Rivers Beas, Ravi
          and Chenab, threee tributaries rivers of River Indus, originates from
          Himachal.
          <br></br>
          River Satluj, like the Indus and Brahmaputra, is one of the few rivers
          that cuts through the Himalayas. It enters Himachal at Shipki La and
          passes through a deep gorgr in Kinnaur and leaves the state at Bhakra
          in a westward flow. Ridges of the mountains on the eastern flank of
          Satluj divide north India into the Indus and Ganga basins. Shimla, the
          state's capital city, islocated along this ridge line that strecthes
          into Kinnaur. From the east side of Shimla, rainwater and snow melt
          flows into the Bay of Bengal and from the western side it end up in
          the Arabian Sea.
          <br></br>
          The Great Himalayas, which normally would form the main water divide
          throughout their entire length, function as such only in limited
          areas. That situation exists because the major Himalayan rivers, such
          as the Indus, the Brahmaputra, the Sutlej, and at least two headwaters
          of the Ganges—the Alaknanda and the Bhagirathi—are probably older than
          the mountains they traverse. It is believed that the Himalayas were
          uplifted so slowly that the old rivers had no difficulty in continuing
          to flow through their channels and, with the rise of the Himalayas,
          acquired an even greater momentum, which enabled them to cut their
          valleys more rapidly. The elevation of the Himalayas and the deepening
          of the valleys thus proceeded simultaneously. As a result, the
          mountain ranges emerged with a completely developed river system cut
          into deep transverse gorges that range in depth from 5,000 to 16,000
          feet (1,500 to 5,000 metres) and in width from 6 to 30 miles (10 to 50
          km). The earlier origin of the drainage system explains the
          peculiarity that the major rivers drain not only the southern slopes
          of the Great Himalayas but, to a large extent, its northern slopes as
          well, the water divide being north of the crest line.
        </Col>
      </Row>
      <br></br>
      <br></br>
    </div>
  );
}

export default Himalayas;
