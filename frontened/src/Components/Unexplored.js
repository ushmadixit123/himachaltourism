import React from "react";
import NavbarHead from "./Navbar";
import img1 from "../Images/card46.jpg";
import img2 from "../Images/card47.jpg";
import img3 from "../Images/card48.jpg";
import img4 from "../Images/card49.jpg";
import img5 from "../Images/card50.jpg";
import img6 from "../Images/card51.jpg";
import img7 from "../Images/card52.jpg";
import img8 from "../Images/card53.jpg";
import img9 from "../Images/card54.jpg";
import img10 from "../Images/card55.jpg";

import {
  Container,
  Popover,
  Table,
  Form,
  Card,
  CardGroup,
  Tab,
  ListGroup,
  Button,
  Image,
  Nav,
  FormControl,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";

function Unexplored() {
  return (
    <div>
      <NavbarHead />
      <Card border="light">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            <h2>Unexplored</h2>
          </Card.Title>
        </Card.Body>
      </Card>
      <br></br>
      <h5>
        Outside the beaten path, Himachal is littered with little wonders with
        many still to catch the travellers fancy. Cocooned in sheltered environs
        in hidden hamlets, these places charm you with their pristine natural
        beauty and cultural innocence. Take the road less travelled to discover
        the many secret hideaways in this mystical land of the gods.
      </h5>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Card.Img src={img2} />
          </Col>
          <Col>
            <strong>Churah</strong> - Less traveled and lesser known, the rural
            charm of Churah valley of Chamba is a discovery for those on the
            lookout for offbeat destinations. Given to a slow pace of rural
            life, the religious beliefs, customs and festivals are centered
            around the temples. Famous temples of region include the Chamunda
            Devi temple at Devi Kothi and the Bhadra Kali temple at Bhalel.
            Tissa is the sub-divisional headquarter for Churah. Well connected
            by road with Chamba and Dalhousie, it also connects up with Kishtwar
            region of Jammu in one loop and with Pangi valley in another. Tissa
            abounds in good trekking trails, especially those to the glacial
            lakes of Ghadasru, Mahadev Dal, Mahakali. Dal, Maral Dal and
            Mehalwar Dal. Pilgrims in summer do make a journey to these lakes
            for a dip in their chilled waters. The 27 km route from Tissa to
            Bairagarh is a tough drive. The highpoint on the route is the Sach
            Pass at 4428 meters before it descends into Chenab valley to meet
            the Tandi-Kishtwar road at Killar. This stretch of the road usually
            becomes snowbound in late November and again opens up in July.
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <strong>Pangi Valley</strong> - The land across Sach Pass (4414
            meters) is Pangl, a valley full of grandeur and tribal majesty. The
            native Pangwals and Bhotis are a robust hardworking, handsome
            people, who keep the valleys unique culture alive in folk songs,
            music and tribal dances. Spread over an area of about 1600 sq kms of
            steep, rocky and tough Himalayan terrain, Pangi is an offbeat and
            challenging tourist destination. Consisting of Saichu, Hudan,
            Bhatori and Sural Bhatori valleys that have only recently been
            opened up for travel as roads penetrate the area. Much of it still
            has to be covered on foot. Killar, 27 kms from Sach Pass, is the
            sub-divisional headquarter of Pangl. From here there are a number of
            exciting and challenging treks to Keylong and Kishtwar in Jammu.
            Those headed for Pangi should be travelling in a sturdy off-roading
            vehicle, be equipped with good quality travelling gear, have spare
            tyres, food rations, extra gallons of petrol/diesel and need to
            carry emergency medicines. In those dizzy heights, at many places
            there is no electricity, no phone connectivity and emergency help
            may prove hard to come by. Best time to visit the region is between
            May to October. Pangi valley 164 km from Chamba.
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
            <br></br>
            <strong>Shoja</strong> - Scattered wilderness, meditative silence
            and the sheer raw beauty of Shoja quenches the desire for a quiet
            mountain holiday. Aesthetically built houses set among apple
            orchards with wide view of the valley have travellers revisit the
            place year on year. Often missed by the Manall and Kullu-goers, this
            hidden gem is one of the best weekend retreat that nature can offer
            in the valley. Shoja is also the base for easy treks to Jalori Pass,
            Serolsar Lake, Takrasi and Khanag. This quaint hamlet is slightly
            off the main road from the Kullu-Ani road that goes over Jalori
            Pass. It can be reached from Shimla and Kullu.
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <strong>Janjehli</strong> - Vast green pastures, captivating views
            of snow clad ranges and untrodden terrains of Janjhell are fast
            taking their place on a traveller's itinerary. The farms and
            orchards spread over gentle slopes with mighty deodar (Cedar) and
            oak forests scaling the heights give janjhell a lively charm. It is
            a trekkers delight and serves as a base for several trekking routes
            in Seraj valley, to places like Shikari Devi, Kamrunag, Chindi,
            Karsog and Shoja that are in easy reach from the valley. The 15 km
            trek to Shikari Devi, the highest mountain of the area is a very
            popular with day hikers. The mountain top destination has a roofless
            temple where snow does not accumulate even when the surroundings are
            pounded with a heavy snowfall. Janjehli can only be reached by road
            and is 85 km from Mandi.<br></br>
            <strong>Karsog</strong> - Some of the most well known temples built
            in the indigenous hill architecture style are in Karsog valley. One
            of the rare but highly revered temples is that of Kamaksha Devi. The
            stone and wood structure with thered slate roof makes the temple an
            architectural gem. Other important temples are that of Mahunag and
            Mamleshwar Mahadev, which has an eternal flame that has been kept
            burning for centuries. These temple exhibit some very fine wood
            carvings and rellefs that display skills of the of local
            craftsmanship. Karsog valley makes for a quiet getaway. The
            countryside, laden with apple orchards adds to the places scenic
            value. During the rainy season, from July to September, well
            irrigated fields growing a paddy crop in the valley is a beautiful
            sight to behold. Karsog can be easily reached from Shimla via
            Tattapani and from Mandi. It is 125 km from Mandi and 106 km from
            Shimla.
          </Col>
          <Col>
            <Card.Img src={img5} />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Card.Img src={img6} />
          </Col>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <strong>Chindi</strong> - A quiet and less explored hill station,
            Chindi with its rural charm of apple orchard lands, exquisite stone
            and wood temples with slate roofing built in traditional hill
            architecture style and deep forests around is a nature lovers
            paradise. The place has some nice staying options and even Himachal
            Tourism has a hotel at Chindi. The hill station also serves as a
            good base for exploring Karsog valley which has well known temples
            like the famous Kamaksha Devi, Mahunag and Mamleshwar Mahadev
            temple. From Shimla, Chindi is at a distance of 95 km.
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <strong>Barot</strong> - Nestled in the calm and scenic River Uhl
            valley, Barot was protected as a reserve and a summer getaway by the
            former rulers of Mandi principality. The place only got noticed when
            Raja Joginder Sen of Mandi royal house in 1925 decided to harness
            the rivers waters for a hydropower plant. Thickly forested hillsides
            with the river holding an abundant of trout fish flowing in the
            valley, alpine meadows for setting up camps and a hospitable people
            make Barot as a must go to place for those seeking a quiet mountain
            holiday. The Nagru Wildlife Sanctuary, upstream of Barot, conserves
            rare Himalayan flora and fauna. Besides game fishing for exotic
            trout fish, the valley has ample opportunities for trekking, with
            one route going over Bhubu Pass into Kullu valley and the other more
            difficult one, going over Thamsar Pass, origin of Uhl river, into
            Bada Bangal valley would get the adrenalin of any seasoned trekker
            going. Emerald reservoirs of the hydropower project and Colonel
            Battye's cottage, the engineer who constructed it, have tales
            associated to them that have passed onto the valleys folklore. Barot
            can be reached by road. It is 40 km from Jogindernagar and 65 km
            from Mandi.
          </Col>
          <Col>
            <Card.Img src={img7} />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Card.Img src={img8} />
          </Col>
          <Col>
            <strong>Churdhar</strong> - The highest peak of Sirmaur, Churdhar
            rising to 3,647 meters is a trekkers delight. The views are so wide
            that George Everest, a surveyor general after whom the world's
            tallest peak is named, used the vantage point of Churdhar to survey
            much of the western Himalayas from. Peaks around Badrinath and
            Kedarnath can be seen from here and towards the south, vast plains
            of the Gangetic plains open up to meet the horizon. Churdhar is
            accessible from three routes, Chopal, Nohradhar and Haripurdhar
            stations. Passing through small villages, cultivated fields and
            alpine meadows the trek is moderately difficult but rewarding.
            Summiting the peak, on a clear day is rewarded with a riot of views.
            Just below the summit is the temple of Shirgul Devta, worshipped in
            the form of a lingam as Chooreshwar Mahadev. At the peak is a
            recently built temple of Lord Shiva. Around the massive mountain
            there is a wildlife sanctuary. This wilderness is a wealth of herbs
            and beautiful alpine flora. Walking through the sanctuary one can
            spot monal, koklass and khaleej pheasants. The canine-toothed musk
            deer and the Himalayan black are known to inhabit higher forest
            areas in the region.
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
            <strong>Bhawa Pass</strong> - The asphalted road that refuses to
            leave sight of the River Sutlej untill Wangtu gives way to a narrow
            road leading to Kafnu - base for one of the most beautiful trek
            routes in Himachal, the Bhawa trek. The ascent in the valley
            alongside a glacial fed stream to Bhabha Pass at 4890 meters
            altitude to enter Pin Valley in Spiti is a challenging adventure. A
            western route from the Bhawa Pass gets into Parbati valley of Kullu.
          </Col>
          <Col>
            <Card.Img src={img9} />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Card.Img src={img10} />
          </Col>
          <Col>
            <br></br>
            <strong>Triund</strong> - For those who love the outdoors,
            Dhauladhar is excellent trekking country. To enjoying stunning views
            of the vast Kangra valley spread a summer trek to Triund (altitude
            2975 meter), getting close enough to the snowline, is being in
            company of the spectacular peaks of the white ranges'. Making way
            through thick oak and deodar forests with scattered rhododendron
            flowers in the path, this moderate trek starts at Galu temple, about
            3 km from Dharamkot and 10 km from Mcleodgan). The last stretches of
            the trek are demanding as you make your way up 22 gruelling loops to
            an open camping ground. Popular among weekenders and day-hikers, the
            trek offers chances of brief but thrilling encounters with beautiful
            birds and wild animals. The walk down is an easy run into the
            breeze. Triund is 7 km from Mcleodganj. High altitude and proximity
            to Laka glacier and Indrahar Pass makes weather of Triund highly
            unpredictable as a hot and sunny day can turn into a small snowstorm
            in matter of minutes.
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </div>
  );
}

export default Unexplored;
