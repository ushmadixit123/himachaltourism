import React from "react";
import NavbarHead from "./Navbar";
import img1 from "../Images/card30.jpg";
import img2 from "../Images/card31.jpg";
import img3 from "../Images/card32.jpg";
import img4 from "../Images/card33.jpg";
import img5 from "../Images/card34.jpg";
import img6 from "../Images/card35.jpg";
import img7 from "../Images/card36.jpg";
import img8 from "../Images/card37.jpg";
import img9 from "../Images/card38.jpg";
import img10 from "../Images/card39.jpg";
import img11 from "../Images/card40.jpg";
import img12 from "../Images/card41.jpg";
import img13 from "../Images/card42.jpg";
import img14 from "../Images/card43.jpg";
import img15 from "../Images/card44.jpg";
import {
  Container,
  Popover,
  Table,
  Form,
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

function Adventure() {
  return (
    <div>
      <NavbarHead />
      <Card border="light">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            <h2>Adventure</h2>
          </Card.Title>
        </Card.Body>
      </Card>
      <br></br>
      <Container>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>River Rafting</Card.Title>
              <br></br>
              <Card.Text>
                Rushing downstream with the strong river flows, negotiating
                turbulent rapids, water droplets hitting you in the face; white
                water rafting is an adventure sport that gets up the adrenaline
                working thick and fast.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Still Water Sports</Card.Title>
              <br></br>
              <Card.Text>
                Backwaters of dams built have created many man made lakes on
                rivers flowing through the state. These waters have become a
                sporting arena for a variety of fun filled activities for the
                professional, and the amateur.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Mountain Cycling</Card.Title>
              <Card.Text>
                Blessed with breathtaking panoramas that make up a romantic
                backdrop, Himachal Pradesh presents thrilling options for
                cycling. Gear yourself up for high adventure with an expedition
                on cycles, pedal your way past high passes or simply make a
                day-adventure in the scenic landscapes, literally the entire
                state is your playground if you have the zeal to pedal.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <br></br>
        <br></br>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>Ice Skating</Card.Title>
              <Card.Text>
                <br></br>
                Open-air ice skating rink in Shimla is the best place to enjoy
                sliding and tumbling on ice. A very popular sport in the western
                world but conducted in very few places in India, the Shimla rink
                is the oldest one in the country.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img6} />
            <Card.Body>
              <Card.Title>Paragliding</Card.Title>
              <Card.Text>
                <br></br>
                Paragliding is perhaps the closest you can get to sailing the
                skies as a free bird, almost at will, dipping and wheeling high
                over the hills and valleys. The recreational activity is
                dangerous but if done under strict supervision, It's thrilling
                and adventurous.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img7} />
            <Card.Body>
              <Card.Title>Angling</Card.Title>
              <Card.Text>
                A mountainous land withfast flowing glacial rivers and streams
                abounds with many types of fishes, some of them being indigenous
                breeds and some have been introduced to Himachal from European
                waters. <strong>Trout</strong>, a cold stream fish introduced by
                British, and <strong>Mahseer</strong>, a warm water fish, are
                amongst the best gaming fishes for anglers.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <br></br>
        <br></br>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img8} />
            <Card.Body>
              <Card.Title>Trekking</Card.Title>
              <Card.Text>
                <br></br>
                <br></br>
                Himalayas, the highest mountains in the world, is the best
                theatre for ambitious adventure seekers: The thrill and
                excitement of trekking as an adventure sport is a lifelong
                crush. With there being hundreds of trails over low scrub land,
                through paddy fields and orchard country, ascending mountain
                paths, crossing over fast flowing streams, across deep woods,
                under oak, deodar or flowering rhododendron trees, to glacial
                lakes, mountain top pilgrimage walks and others, Himachal is a
                playground for trekkers
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img9} />
            <Card.Body>
              <Card.Title>Skiing</Card.Title>
              <Card.Text>
                <br></br>
                <br></br>
                Himachal Tourism offers ski courses, instruction and has
                equipment on hire at Narkanda. In Manall, the Atal Bihari
                Vajpayee Institute of Mountaineering and Allied Sports conducts
                professional and amateur skiing courses on the slopes of Solang
                Nala, Rohtang Pass and Hanuman Tibba. Several private operators
                also do conduct recreational skiing for tourists. Kufri, near
                Shimla, is one of the oldest places in India where skiing is
                done. Rushing down the Mahasu Peak slopes with ski's in Kufri is
                a tourist's delight.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img10} />
            <Card.Body>
              <Card.Title>Heli Skiing</Card.Title>
              <Card.Text>
                The fascination of Hell-skiing surmounts with the mere thought
                of being airlifted to the top of a mountain and then skiing down
                its slopes covered in powdery grow Among all mountain thrills,
                perhaps nothing can really surpass the joy of Heli-skling. In
                India, Manali is the only place where this rare adventure sport
                is conducted every winter. On a clear day under a deep blue sky,
                a helicopter airlifts you from Manall and carry you to high
                altitude snow slopes, some with more than 3 km long runs and dro
                you for a thrilling Heli-skling day. Heli-skling, an expensive
                sport, is done on the slopes around Hanuman Tibba, Rohtang Pass,
                Deo Tibba and Chandrakhani Pass near Manal A some of mere en
                minutes does carry the skier to over 14,000 feet high slopes.
                The sport is offered by a Manalt based private operator
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <br></br>
        <br></br>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img11} />
            <Card.Body>
              <Card.Title>Golf</Card.Title>
              <Card.Text>
                On the outskirts of Shimla, Naldehra,23 km from the city, boats
                of having one of the oldest golf courses of the country. Finding
                a resemblance with the sloping glades of Scotland's highlands,
                it as Lord Curzon, Viceroy of British India from 1899 to 1905
                AD, who laid the foundation of golf course. So charmed was
                Curzon that he named his third daughter 'Alexandera Naldehra',
                after the place.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img12} />
            <Card.Body>
              <Card.Title>Mountaineering & Rock Climbing</Card.Title>
              <Card.Text>
                Mountaineering is a daring adventure that needs rigorious
                training and discipline. Not just a test of your bodioes
                endurance to extremely hostile environments, but being able to
                adapt to low oxygen altitudes, spending nights in tents under -
                30 degree Celcius tempretures or more surviving on rationed food
                supplies are all part of a training before one heads out to
                scale a high peak.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img13} />
            <Card.Body>
              <Card.Title>Vehicle Safari</Card.Title>
              <Card.Text>
                <br></br>
                For those who love land cruising, the wide road network of
                Himachal Pradesh passes through some of the most exotic
                landscapes of the country. Exploring the countryside by Car and
                the more difficult trans-himalayan tracts in powerful 4x4 SUVs
                or in Group Motorbike safaris area rage.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <br></br>
        <br></br>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img14} />
            <Card.Body>
              <Card.Title>Camping</Card.Title>
              <Card.Text>
                <br></br>
                <br></br>
                Camping is perhaps the best way to enjoy the wonders of nature
                and effortlessy partake of the warm hospitality of the
                inhabitants. Travellers can carry their own gear along or opt
                for any one of the several oraganized campsites pitched in
                various parts of the State.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img15} />
            <Card.Body>
              <Card.Title>Day Hikes</Card.Title>
              <Card.Text>
                Whether you are camping by a lake, retend home in an apple
                orchard, staying in a hotel on the busy lanes of a Mall Road or
                living at a Home Stay accommodation at a remote hamlet, just
                about every destination in Himachal offers the possibility of
                day hikes, Where you may leave in the morning and return by
                evening.
                <br></br>
                <br></br>
                On the nature rambles do not leave the trail or spur, unless you
                are very sure of where you are going - distances and directions
                can be deceptive, it is suggested to take services of a guide.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <br></br>
    </div>
  );
}

export default Adventure;
