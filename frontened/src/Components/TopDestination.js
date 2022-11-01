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
import img1 from "../Images/card11.jpg";
import img2 from "../Images/card12.jpg";
import img3 from "../Images/card13.jpg";

function TopDestination() {
  return (
    <div>
      <NavbarHead />
      <Row>
        <Col>
          <h2>SHIMLA</h2>
          <br></br>
          Shimla derives its name from Shyamala Devi, an incarnation of the
          goddess Kali, whose temple existed in the dense forest covering the
          Jakhu Hill in the early 19th century. Shimla is the capital of
          Himachal Pradesh and was also the summer capital in pre-Independence
          India. Covering an area of 25 sq km at a height of 7,238 ft, Shimla is
          surrounded by pine, deodar and oak forests. Its well developed
          amenities, easy reach and various tourist attractions make it one of
          India’s most popular hill stations. Shimla is an excellent base for
          treks in the surrounding hills or beyond, rafting and trout fishing at
          Tattapani 51 km from Shimla and golf at the 9-hole golf course at
          Naldehra. In winter, there is skiing at KUFRI and NARKANDA from
          January to mid-March. You can also go shopping at some of Shimla’s
          most lively and colorful markets. You can entertain yourself in a
          cultural or a dramatic performance or take pleasure in a sporting
          activity. A wide range of activities and attractions will surely keep
          you occupied all the time. ALSO READ India’s Most Haunted: Charleville
          Mansion in Shimla Viceregal Lodge, formerly the residence of the
          British Viceroy of India that houses the Indian Institute of Advance
          Study, is also worth a visit.
          <br></br>
          <br></br>
          Best places to stay in Shimla - Shimla offers accommodation for all
          budgets. There are many government and private guest houses but you
          need to book in advance during the peak touring season to avoid
          disappointment.
          <br></br>
          Best places to eat in Shimla - Shimla offers a number of gastronomic
          experiences be it fine dining or even street-food. Practically every
          mid and top range restaurant and hotel offers Indian, Continental and
          Chinese cuisine. Sample authentic pahadi food or variety of Indian
          chaat items available along with an assortment of quality
          confectionery.
        </Col>
        <Col>
          <Card.Img src={img1} />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <Card.Img src={img2} />
        </Col>
        <Col>
          <h2>MANALI</h2>
          <br></br>
          One of the most popular hill stations in Himachal, Manali offers the
          most magnificent views of the Pir Panjal and the Dhauladhar ranges
          covered with snow for most parts of the year. With the Covid-19
          pandemic going on, Manali has evolved to be a place loved by young
          people looking for longer stays for workation. With ambient cafes,
          good wifi availability, small eateries and convenient shops, Old
          Manali is among the favorite neighbourhood for such people. There are
          many homestays and hostels offering dorm beds for cheap for longer
          durations.
          <br></br>
          Manali has many trekking options around it, making it a great base for
          exploring this side of Himalayas. River Beas provides great rafting
          options in the nearby town of Kullu. Adjoining Parvati river, lies the
          Parvati Valley with Kasol, Manikaran, Tosh and small villages
          attracting travellers for longer stays. Atal Tunnel now allows
          travellers to reach Sissu within a few hours making Spiti way more
          accessible.
          <br></br>
          It snows the most in the months of January & February followed by
          December and March. If you're very lucky, you might find some snow in
          April.
          <br></br>
          Tourists flock to Rohtang Pass & Solang valley for various adventure
          activities including skiing, paragliding, horse-riding & zorbing.
          Rohtang Pass is almost always covered with snow and can often get
          overcrowded and see traffic jams.
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <h2>CHAMBA</h2>
          <br></br>
          The beautiful hill station of Chamba in Himachal Pradesh is about 55
          km from Dalhousie. Established by Raja Sahil Verma in 920 AD, the
          hamlet has retained its medieval charm. Along with pleasant climate,
          the picturesque hill station offers breathtaking sights of the
          snow-clad mountains and lush green forests. Chamba serves as a perfect
          summer getaway. The snow-clad mountains in and around Chamba are
          extremely popular for snow skiing. Private and government-run
          organizations conduct river rafting excursions and river crossing
          exercises. Treks to Manimahesh start from Choughan in Chamba.
          <br></br>
          Chamba houses innumerable temples dating back to 4th century. Lakshmi
          Narayan Temple and Chamunda Devi temple are some of the most popular
          shrines in Chamba. They display few of the best forms of art that
          existed in India. Scottish Church is the most significant structure
          built by the British during their rule in Chamba. Rulers of Chamba
          laid great emphasis on promoting art. Thus, schools of art flourished
          between the 10th and the 17th century. The region was also influenced
          by Mughal miniature and mural art styles. Chamba is famous for its
          handicrafts made of wood and hand-woven textiles. Innumerable small
          scale emporiums have artisans producing handicrafts, chappals and
          textiles that are sold around the world. Pahari paintings of Chamba
          are another prime attraction.<br></br>
          Best places to stay in Chamba - Only mid-range and budget
          accommodation options are available in Chamba. Most of them are
          situated on Court Lane. There are no luxury hotels in Chamba but most
          hotels, motels, lodges and guesthouses provide scenic view of the
          snow-clad mountain ranges. Himachal Pradesh Tourism Department also
          runs hotels which provide budget accommodation.<br></br>
          Best places to eat in Chamba - There are quite a few eating options in
          Chamba, but there aren’t too many fancy restaurants, obviously. You
          can find a lot of street stalls selling noodles, soups and dumplings.
          Madra, a local delicacy made from rajma (red kidney beans) in curd is
          extremely popular. In-house restaurants in hotels generally serve
          Indian, Chinese and Continental cuisines.
        </Col>
        <Col>
          <Card.Img src={img3} />
        </Col>
      </Row>
      <br></br>
    </div>
  );
}

export default TopDestination;
