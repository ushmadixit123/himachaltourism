import React from "react";
import img1 from "../Images/card29.jpg";
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

function Cuisine() {
  return (
    <div>
      <NavbarHead />
      <Card border="light">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            <h2>Cuisine</h2>
          </Card.Title>
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
      <Container>
        <h6>
          Varied as the land, different valley regions of Himachal have held
          onto age-old traditions in dress, music, dance styles, architecture,
          agricultural practices but it is the tantalising palate with a variety
          of cuisines on offer that can grip a traveller to come back looking
          for more. Drawn from the farms and pastures the land grows, many
          dishes make a liberal use of the produce, herbs, nuts, fruits, milk
          and milk products. In many belts, non vegetarian food is the norm and
          most meals are centered around meat, cereals and lentils. Leafy
          vegetables are only a recent induction into the Himachali palate.
          Community feasts prepared for 'Dhams' by hereditary clans of Boti
          chefs is where the traditional flavours are at their best. A Mandi
          Dham is much different from a Chamba, Xangra, Bilaspur, Shimla,
          Sirmour or Kullu Dham. Each region or valley has its own set of
          favourite dishes, cooked in a distinctly different style which makes
          these feasts very popular at food festivals or when partaking in one
          during a visit to any of these regions. A typical Chamba Dham would
          open with rice and green lentils (moong daal), followed by Madrah
          (kidney beans or white grams cooked in yoghurt), boor ki karl and dark
          lentils (mash ki daal).
          <br></br>
          <br></br>
          <br></br>
          The meal is tapered with Khutta made of Gur (brown sugar) and tamarind
          and for a dessert there is Mittha-sweetened rice, richly garnished
          with raisins and dry fruits. In the highlands of Lahaul, Spiti and
          Kinnaur, food has marked Tibetan influence with most dishes made out
          of coarse grains of buckwheat, millet and barley that are locally
          grown. Thupa, a popular dish, has meat chunks, vegetables and noodles
          dipped in a fiery curry, Butter tea (Salty tea), known as Thang in
          Kinnaur/Spiti is made by vigorous churning of butter, salt and special
          tea leaves. For the long cold winter months this a very energising
          beverage. The Momo, a Tibetan dish, is a very popular street food
          readily available in Shimla, Manali, Dharamshala, Dalhousle and other
          places. Cooked vegetables or minced meat with seasoning and spices is
          wrapped in wheat flour dough. After steaming them. Momo's are ready to
          be served. With spicy chutney, this dish is a hot selling snack food.
          <br></br>
          <br></br>
          <br></br>
          Siddu, a steamed stuffed burger made of wheat flour base, to which
          yeast is added and eaten with ghee or butter is one of the most
          popular dishes of Himachal Opium seed or walnut paste stuffing turns
          this ordinary looking bun into such a tasty bread that even after a
          fill, one is left longing for more. Served as a stand alone bread or
          savoured with daal or mutton, the salty or sweet filling Siddu has
          found its way into many native restaurants menus. A non-vegetarian
          would be left smacking his fingers when served with Khamod Meat, a
          Chamba speciality of mutton cooked in ghee with curd, spices and
          garnished with cashew nuts, dry dates and raisins. A fresh catch of
          trout fish, roasted, steam cooked or cooked in a curry is a delicacy
          in Barot, Sangla, Pabbar and Kullu-Manali valleys Other locally
          popular dishes include Khatta Karal meat of Kangra, and parts of Mandi
          and Sepu Vadi of Mandi, Patande of Sirmaur, Babru and Nasastha of
          Shimla. Travelling through the mountain land and soaking up the great
          views is complemented by the special tastes that one picks up along
          the route when partaking in the lifestyle and eating habits of the
          natives. Having a history of living in isolated communities under very
          harsh geographical constraints, the simple people of Himachal use the
          centuries gathered knowledge of some of the rarest herbs and spices to
          create magic with the cuisine.
        </h6>
      </Container>
      <br></br>
    </div>
  );
}

export default Cuisine;
