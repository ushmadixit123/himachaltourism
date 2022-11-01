import React from "react";
import NavbarHead from "./Navbar";
import img1 from "../Images/card45.jpg";
import * as Icon from "react-bootstrap-icons";

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

function Cultureandheritage() {
  return (
    <div>
      <NavbarHead />
      <Card border="light">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            <h2>Culture & Heritage</h2>
          </Card.Title>
        </Card.Body>
      </Card>
      <br></br>
      <h5>
        Tracing roots to Vedic times, the rich heritage of Himachal Pradesh did
        find safe retreats from frequent invasions in Himalayan valleys, at
        isolated kingdoms and at remote habitations. The mighty mountains have
        always been counted upon as life-giving, where the seeker found shelter
        and solace. Mystical practices of primitive Shamanism have peacefully
        existed alongside the evolved faiths of Hinduism, Buddhism and Jainism
        for thousands of years. Life in villages centered around temples of Devi
        and Devta (gods and goddesses), with a shaman in trance often being the
        adjudicator of good and evil in society.
      </h5>
      <br></br>
      <br></br>
      <Container>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={2}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  <Icon.HeartFill color="white" size={20} /> <h6>ART</h6>
                </ListGroup.Item>
                <br></br>
                <ListGroup.Item action href="#link2">
                  <Icon.Snow2 color="white" size={20} />
                  <h6>Crafts of Himachal</h6>
                </ListGroup.Item>
                <br></br>
                <ListGroup.Item action href="#link3">
                  <Icon.MusicNoteBeamed color="white" size={20} /> <h6>Songs & Dance</h6>
                </ListGroup.Item>
                <br></br>
                <ListGroup.Item action href="#link4">
                  <Icon.Person color="white" size={20} />
                  <h6>Attire</h6>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  The art of Himachal has grown out from a fusion of cultural
                  strains, migrations and religious beliefs. Several surviving
                  works have found expression in wall murals, illustrated books,
                  miniatures and religious paintings Patronized by the rulers of
                  hill valley kingdoms, Indigenous art forms blended with Mughal
                  style blossomed into what collectively has come to known as
                  the famed Kangra school of paintings. Regional specific art
                  styles in Basholi Kalam, Kangra Kalam, Mandi Kalam, Chamba
                  Kalam, Guler Kalam, Kullu Kalam, Arki Kalam, Bilaspur Kalam,
                  Nurpur Kalam and others can only be differentiated by
                  connoisseurs and collectors. Religious Tibetan art, under the
                  patronage of monasteries in Kinnaur, Lahaul & Spit, achieved a
                  brilliance of its own.<br></br>
                  <br></br>
                  <strong>Kangra Paintings</strong> - The fame of Kangra school
                  of miniature paintings is such that reputed museums around the
                  world have masterpieces permanently displayed at their
                  galleries, Paintings from Guler, Basohli, Chamba, Nurpur and
                  Kangra, patronised by the rulers between 17th and 19th
                  century, collectively form part of this school of paintings.
                  Exhibiting the taste and lifestyles of the times, and
                  religious themes are mainly the subjects of this art form. In
                  most artworks, the goddess-like portrayal of women with
                  beautiful figures and facial features give these paintings a
                  rare charm. Kangra miniature paintings occupy a prominent
                  place at State Museum at Shimla, Museum of Kangra Art at
                  Dharamshala, Bhuri Singh Museum at Chamba and at the Maharaja
                  Sansar Chand Museum, located near the Kangra Fort.
                  <br></br>
                  <br></br>
                  <strong>Thangka Paintings</strong> - Painted with a religious
                  zeal, beautiful Thangka paintings depicting themes from the
                  Buddha's life, popular instances from the Jataka tales,
                  Bodhisattvas, female deity of Tara, mandala's and other
                  religious events are carefully preserved at many monasteries.
                  They are brought out to adorn walls or the venues when
                  important ceremonies are conducted. Many domestic altars also
                  portray these rare paintings. Most of these elaborate
                  paintings, on linen or silk canvases, are created strictly in
                  accordance to rules of the iconography. Thangkas are painted
                  on auspicious dates by the monks, in a fragrant environment of
                  lighted incense sticks and chants of sutras (doctrines).
                  Traditionally, the pigments of vegetable colours and mineral
                  dust, bound by gum, were used on these artworks. <br></br>
                  <br></br>
                  <strong>Mural Wall Paintings</strong> - Himachal is a Mecca of
                  beauty and art for the visitor who has a taste for it. One
                  historical art form that embellishes many religious monuments,
                  forts and palaces are the murals, the wall paintings that
                  depict gods, goddesses, palace scenes, of nature and from
                  common daily lives in fine colours. Wall paintings at the Tabo
                  Monastery, Narvadeshwar Temple in Sujanpur, Arkl palace, on
                  the ceiling at Rang Mahal in Chamba and others are works by
                  master artists who never got and never sought any recognition.
                  Over centuries, many of these wall painting may have lost
                  their luster but the artistic brilliance still shines through.
                  <br></br>
                  <br></br>
                  <strong>Nicholas Roerich Art Gallery</strong> - Nicholas
                  Roerich, a voluntary exile from Russia, was already a master
                  painter before he emigrated to settle at Näggar in Kullu
                  valley. His paintings of the mountains, a prized possession of
                  global private collectors and many museums, are unique
                  creations in the gallery of world art.<br></br> After the
                  death of senior Roerich, his son Svetoslav formed a trust and
                  converted the Roerich home at Naggar into an art gallery in
                  1962. At the gallery-cum-museum are paintings and personal
                  belongings of the master artist on permanent display along
                  with works of others artists. Paintings of Kullu, Spiti and
                  Lahaul form a large part of the works on display.<br></br>{" "}
                  Museum of Himachal Culture Folk Art - Located near Hadimba
                  Temple in Manali, the Museum of Himachal Culture & Folk Art
                  has models crafted in wood of various temples and forts from
                  the valley. Artefacts, crafts, masks representing local
                  deities and musical instruments carrying a green patina of age
                  takes visitors on a journey back in time.
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  The natural splendour of Himachal has an influence on the
                  crafts native to the region. From the low-lying plains of
                  Kangra to the majestic landscape of Lahaul, Himachal has a
                  rich wealth of crafts which has found expression in exquisite
                  wood carvings, beautiful metalware, gracious jewellery
                  patterns, sermons in stone craft and others. Traversing the
                  land, one may stumble upon great works of art and
                  craftsmanship in remote village and valleys, Hidden pockets of
                  local talent have survived the times at many places in the
                  hills.<br></br>
                  <br></br>
                  <strong>Wood carving</strong> - Age old temples in areas like
                  Minghal, Chadrari, Bharmaur in Chamba district, Kullu, Karsog
                  (Mandi), Sarahan (Shimla) and Kinnaur having finely chiselled
                  wood carvings of gods, goddesses, court scenes and those from
                  everyday life cut out on pillars, wall panels, roof ceilings,
                  wood beams, doors and at other places. This timeless treasure
                  is a heritage from which younger generations take Inspiration
                  to improve upon the craft. Not spoken of much, the wood
                  carving tradition of Himachal is also visible in household
                  stuff like cradles, bedsteads, rolling pins, churners or
                  wooden utensils. Pahari architecture also demonstrate
                  excellent woodworking and attention to detail in crafting
                  wooden houses which advocate form and functionality over a
                  strong structural foundation. <br></br>
                  <br></br>
                  <strong>Embroidery</strong> - The skill of embroidery is a
                  favourite pastime as well as an engaging skill among Pahari
                  women. Creating household accessories like tablecloths, rumals
                  (handkerchief), coverlets, caps and other stuff, are some of
                  products that these skilled embroiders make. The embroidery of
                  the Chamba Rumal, the Kullu & Kinnauri Shawls are counted
                  among the finest crafts of India.<br></br>
                  <br></br>
                  <strong>Leather Crafts</strong> - Himachal is known for its
                  fine leather crafts like making of shoes, sandals and belts,
                  especially the aesthetically made Chamba Chappal (Slipper).
                  The beautiful embodiment of zari, glitter or colourful threads
                  in the Chappal is famous among travellers. making them a
                  sought after souvenir. <br></br>
                  <br></br>
                  <strong>Jewellery</strong> - Gemstones cast in silver or gold
                  has fascinated men and women since the dawn of civilization
                  and it has been no different for Himachal. The village
                  goldsmith was a trade that kept alive motifs, and designs from
                  generation to generation. Over the centuries, intricately
                  designed jewellery in silver and gold, embellished with
                  patterns and precious jewels, became the most prized
                  possessions of village women, and even of those who lived in
                  palaces. Design variations are also noticeable in the
                  jewellery patterns of Kangra, Kinnaur, Kullu, Shimla, Sirmaur,
                  Chamba and other parts of the state. The body parts for which
                  ornaments are commonly made are the head, forehead, ears,
                  nose, neck, arms, wrists, fingers ankles and toes. <br></br>
                  <br></br>
                  <strong>Stonework</strong> - Cutting a hard granite stones and
                  patiently chiselling out an idol that is worshipped for
                  generations as a deity signifies the importance stone craft
                  had among the hill community. Most of the masterpiece stone
                  craft works that have survived hundreds of years are
                  attributed to anonymous craftsman. Gazing at the many stone
                  temples of Mandi, the Laxmi Narayan temple of Chamba, the
                  rock-cut Temples at Masroor (Kangra), the Shiva temple at
                  Bajaura in Kullu or the Shiva temple at Baijnath (Kangra), one
                  cannot but admire the brilliance and artistic skill of the
                  craftsman who worked on them. In everyday lives, one can get a
                  glimpse of stone carving skills in the angithis (classical
                  stoves), kundi (round pots) and chakki (stone mill) which are
                  used in Kinnaur, Mandi, Chamba and Shimla since ages.
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  For a largely agrarian society surviving in a difficult
                  geography, evoking the gods with music and song for good crops
                  and harvest, narrating a tragedy or a failed lover affair to a
                  slow tune was what had the people sing, dance, share,
                  celebrate and preserve as a community. Song and dance of the
                  land is best showcased at festivals, marriages and other
                  celebrations where the people, true to their culture, come
                  attired in colourful traditional dresses to partake in
                  merrymaking. There are both solo and group dances in Himachal,
                  Solo dances are popular in Bilaspur, Solan, Sirmaur and parts
                  of Shimla. In Bilaspur it is called Gidha, in Sirmaur and
                  parts of Shimla it is Munjara. Solo dances are usually
                  performed in the open but evening dances are held in covered
                  courtyards or large rooms. The Nati, a group dance of Mandi,
                  Shimla, Kullu, Sirmaur, Kinnaur and Chamba in which hundreds
                  of people take part, has become the most popular dance form of
                  the state. Performed in open spaces, at temple courtyards, the
                  dancers form a circle which allows both swaying to the tune
                  and synchronized movement to step styles that can vary from
                  valley to valley and region to region. Ample divesity of local
                  cultures is seen in the dance styles of Nati performances.
                  Both men and women participate in a Nati, mostly in separate
                  groupings. Some other popular dances are Rakshasa (demon),
                  Kayang, Bakayang, the Bnayangchu, the Jataru Kayang, Chohara,
                  Shand and Shabu, Lang-dar-ma, Jhanjhar, Jhoor, Gi and Rasa
                  which display the cultural diversity of the land. Musical
                  instruments like Narsingha, Karnal, Flute, Ektara, Kindarl,
                  Jhanjh, Manjira, Chimta, Ghariyal, and Ghunghru reverberate to
                  lend foot-tapping melody to the songs and dances. These
                  Instruments are supported by drums which vary in their design
                  and sound. Some of them include Dhol, Dolki, Nagara, Doru and
                  Hudak. Percussion instruments like Manjira, Ghanta, Thali and
                  Kokatha Murchang add that distinct sound to any song.<br></br>
                  <br></br>
                  <strong>Folk Songs of Himachal Pradesh</strong> - The songs
                  and music echo the cultural richness of the land. Plethora of
                  soul-touching folk songs capture the beliefs, history, love
                  tales, heroic deeds, hard times, parting, mysteries of life
                  and death and other themes in the local idiom. These
                  traditional songs have a soothing charm even when sung without
                  accompanying musical instruments. Most of the Himachali songs
                  are centred on the respect and gratitude for gods, the
                  splendour of changing seasons and the warmth of love ballads.
                  These melodic songs combine with the sublime dance forms and
                  musical instruments at important festivals, rituals, fairs and
                  small festivities which celebrate the mysteries of life.
                  Natives living in the far off valleys sing these tunes that
                  binds the community together in its isolation, especially in
                  winters. <br></br>
                  <br></br>
                  <h4>Popular Folk Songs</h4>
                  <br></br>
                  <strong>Jhoori Song</strong> - This is a love song has its
                  roots embedded deep in the Mahasu and Sirmaur regions. Jhoori,
                  meaning lover or beloved, is sung by both men and women, but
                  only women dance to this song usually during gatherings. While
                  singing Jhoori, each piece is sung in four lines, followed by
                  the last syllable of which the first line is pronounced in a
                  long-lasting fashion. <br></br>
                  <br></br>
                  <strong>Jhanjhoti Song</strong> - Jhanjhoti is a classical
                  song mostly sung by professional singers since it is based on
                  ragas like Brindabani Sarang, Durga, Tilang and Desh. Popular
                  songs based on ragas that are sung include the Phulmu-Ranjhu,
                  which recites a tragic happening, Kunju-Chanchalo that reverbs
                  a love conversation and the Gaddan Nokhu by Raja Sansar Chand
                  Katoch of Kangra. ja-Gaddan, a song that is about wooing of
                  Gaddan Nokhu by Raja Sansar Chand Katoch of Kangra.<br></br>
                  <br></br>
                  <strong>Laman Song</strong> - A popular song style that
                  recites the beauty of falling in love. Laman, native to the
                  Kullu valley, is a melody whose opening line rhymes with the
                  second line that sets out the theme for the song. The end of
                  the line is prolonged with syllables like Oa, Aa that form the
                  note.<br></br>
                  <br></br>
                  <strong>Samaskara Song</strong> - Samaskara folk songs reflect
                  the vastness of the mountainous land and are sung at
                  festivals, gatherings or moments of celebration. The singers
                  (mostly women) need to be good in their ragas to sing these
                  ear-pleasing melodies.<br></br>
                  <br></br>
                  <strong>Anchaliyan</strong> - These folk songs are more like
                  ballads, sung with joy in the heart to celebrate auspicious
                  occasions like Shivratri, Marriages. Anchaliyan or Anchall
                  songs are accompanied by string puppets which add to the charm
                  of the occasion. Songs native to a particular region are in
                  plenty and they give an insight into the livelihood of the
                  natives.<br></br>
                  <br></br>
                  <h4>Popular Dance Forms</h4>
                  <br></br> <strong>Jhamakada</strong> - only by women, usually
                  at sacred ceremonies and during marriages.<br></br>
                  <br></br>
                  <strong>Losar Shona Chuksam </strong> - Losar Shona Chuksam is
                  a folk dance form native to Kinnaur district. This dance form
                  has immense religious significance, who perform it during the
                  Tibetan New Year that usually falls in April and May. Chuksam
                  is mostly performed by the farmers as a tribute to agriculture
                  and its significance in rural life. This dance is signified by
                  the knee movement of the dancers which replicates the movement
                  of farmers sowing seeds on their farms.<br></br>
                  <br></br>
                  <strong>Nati</strong> - The Nati, a group dance of Mandi,
                  Shimla, Kullu, Sirmaur, Kinnaur and Chamba in which hundreds
                  of people take part, has become the most popular dance form of
                  the state. Performed in open spaces, at temple courtyards, the
                  dancers form a circle which allows both swaying to the tune
                  and synchronized movement to step styles that can vary from
                  valley to valley and region to region. Ample diversity of
                  local cultures is seen in the dance styles of Nati
                  performances. Both men and women participate in a Nati, mostly
                  in separate groupings. Dancers swathe in ethnic attires groove
                  to the beats of musical instruments like dhol, nagara and
                  narsingha. In this dance form, people twirl their bodies in
                  slow swaying movements.<br></br>
                  <br></br>
                  <strong>Chham Dance</strong> - Chham dance, also known as
                  Devil Dance, is one of the most vivid and splendid dance forms
                  of Himachal that is performed by a sect of red-robbed Buddhist
                  monks at monasteries on special occasions and festivities.
                  Dancers wrap in intimidating masks, headgear and costumes,
                  embodying the evil spirits that bring natural disasters and
                  diseases to mankind. The intimidating circular movements of
                  the dancers sync with the drum beats, cymbals and long pipes
                  to create a hypnotic atmosphere. According to the legend, the
                  dance form is pious and is performed to exorcise evil spirits
                  and demons, bringing harmony and peace to the desolate land of
                  Lahaul & Spiti and Kinnaur.<br></br>
                  <br></br>
                  <strong>Lahauli Dance</strong> - Another dance form that's
                  native to Lahaul is the Lahauli dance. In this dance form, the
                  native dancers sway in circles, taking big steps with their
                  hands interlocked. Their bodles are adorned with beautiful
                  gowns featuring embroidered borders. The beautiful
                  presentation is accompanied by the beats of instruments like
                  Daman and Surna.
                  <br></br>
                  <br></br>
                  <strong>Thoda</strong> - Thoda from the hinterlands of
                  Himachal Pradesh is a dance form that originated from the
                  martial arts. Also known as the dance of archery, Thoda is
                  performed by two teams, one who are descendants of Kauravas
                  and the other of Pandavas. The two opposing sides make
                  continuous attempts to attack each other and defend themselves
                  at the same time in this dynamic presentation. They use arrows
                  and bows swiftly and skilfully to create an illusion of real
                  battle.<br></br>
                  <br></br>
                  <strong>Dandras and Dangi</strong> - The Dandras and Dangi are
                  two dance forms native to the Gaddis of Chamba. The Dandras is
                  a smooth dance style where Gaddi dancers lower and then raise
                  their legs while moving in a circular motion. Usually, the
                  natives perform it to the rhythm of Dhamal and Lahauli Drums
                  as the dancers utter the words Jey Jey and Shee Shee. Dangi on
                  the other hand is usually performed by the Gaddi women who
                  immaculately dance in lines and semi-circular motion, joining
                  hands and then turning away in a graceful manner. Dangi
                  combined with the love ballads of Sunni and Bhukhu creates an
                  atmosphere of joy and happiness which makes everyone tap their
                  feet.
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <h4>Kinnaur</h4> Climate of Kinnaur influences the native's
                  style of living and attire. The cold climate has the people
                  take to woollen clothes around the year. Weather can change
                  abruptly at high altitudes, turning a bright sunny morning day
                  into a bone chilling cold evening. The woollen dress is best
                  suited for such weather changes. The weavers have added
                  artistic patterns to the cloth woven that make the dress
                  distinctive to the region. Men dress up in woollen shirts
                  called chamn kurti and wollen churidar pajama with a chhuba (a
                  woollen coat similar to an achkan) on top and a sleeveless
                  woollen jacket outside it. Women prefer to wear a shawl like
                  wrap-around garment called dohru paired with choli, a type of
                  full sleeve blouse. The dohru is preferred in darker shades
                  with vibrant coloured embroidery on it. Women also carry
                  beautifully coloured pattu (shawl which is slightly thicker
                  and heavier than a normal shawl) draped around their
                  shoulders.<br></br>
                  <br></br>
                  <strong>Kinnauri Topi (cap)</strong> - A trademark headgear is
                  part of the traditional dress of Kinnaur, Both men and women
                  wear the round woollen cap called Thepang, which is flat on
                  the top. Generally light grey in colour with a green or red
                  coloured velvet band running around the cap's outer fold to
                  grace the wearer's forehead. The cap is a mark of respect and
                  a crown of the natives.<br></br>
                  <br></br>
                  <strong>Kinnauri Shawl</strong> - The Kinnauri Shawl has
                  geometrical design on both ends. It is weaved in two pieces of
                  equal length and then stitched in the centre. Colour choice
                  for the base varies between white, grey, natural brown and
                  black, while the shawls are patterned in red, green, pink,
                  black, white, blue, orange and yellow colours. Out of these,
                  five colours bear significance to the five elements that find
                  mention in the Vedas - white here stands for water, yellow for
                  earth, green for air, red for fire and blue represents ether
                  or wind In addition to the pattern at the ends, Kinnauri shawl
                  is also made as Kinnauri teen patti which has three patterns
                  woven in stripes in vivid colours, and All-Over Kinnauri
                  shawl, a masterpiece with beautiful pattern woven all over the
                  shawl.<br></br> In Kinnaur, different weaving process is used
                  for commercial and locally used shawls. While marketable ones
                  are wou on the frame loom, ones for local consumption are
                  weaved in pit-looms with designs embroidered by hand. Sheep wa
                  is the staple raw material, though finer quality shawls are
                  made using wool of migratory Himalayan goats, Pashmi goats and
                  Angora rabbits. Price of a shawl varies according to the
                  quality of wool and the width of patterns used in it. Owing to
                  the high cost labour involved in the sorting of fine pashmina
                  wool, shawls made from pashmina are most expensive.<br></br>
                  <br></br>
                  <strong>Kinnauri Patti</strong> - Kinnauri Patti is a coarse
                  fabric made from sheep wool, though best quality patti is made
                  of wool obtained from the firs shearing of a lamb. It is woven
                  on a handloom and is generally used to make closed neck coats
                  (band gale ka coat) pajamas, pants, or chhuba. <br></br>
                  <br></br>
                  <h4>Shimla</h4> Shimla is endowed with a rich culture which is
                  deep rooted in all aspects of life including the way of
                  dressing and celebration. The attire in Shimla district tends
                  to change with the change in dialect, but a suit, which is
                  tailored knee length shirt paired with a salwar/pajarma and a
                  waistcoat called saluka in Kotgarh and Rampur regions and
                  jacket or sadri elsewhere, is largely how women like to dress:
                  Women also wear a head scarf called dhatu. Women in Korgarh,
                  Rampur, interiors of Rohru region can also be seen in a long
                  dress called rezta (a body length gown with pleats at the
                  waist that give the lower half the look of a long skirt)
                  combined with a saluka and dhatu. In winters. females wear a
                  woollen garment called Pakhti (a gown). The men in all parts
                  of Shimla wear a kurta, a pyjama called suthan and a saluka,
                  though stitching style of the kurta may vary from one region
                  to another.<br></br>
                  <br></br>
                  <h4>Kullu</h4> The local climate has much to do with the dress
                  styles and it is no different for those living in Kullu
                  valley, Bestowed with a moderate climate that gets cold for
                  winter has the traditional dresses use more of woollen fabrics
                  to stay warm round the year. Western dresses have made inroads
                  but the traditional dresses still haven't lost their charisma.
                  Traditional Kullu men dress up in Chola which is a long
                  woollen coat with creases, a tight pant known as Suthan. Loi
                  which is a gents shawl, Dora which is a kind of a belt and
                  Kullu Topi which is a flat round-shaped cap having colourful
                  border. In cold climatic conditions, men wear Loi (also known
                  as chaddar), a gent's shawl usually made in brown, grey or
                  white wool. The wrap is woven in light woollen fabric that has
                  narrow borders at the ends. Just like men, women also take
                  pride in wearing traditional attire which typifies their
                  beauty. To keep warm, women wear Pattoo which is the
                  traditional dress of local women worn over the suit
                  (consisting of shirt up to the knees) and Pyjamil. The shawl
                  like, but much thicker, heavier and longer than a shawl,
                  Pattoo is a comfortable dress. As headdress, Dhatu and Thipu,
                  which are square pieces of cloth for covering the head, are
                  adorned.<br></br>
                  <br></br>
                  <strong>Kullu Caps</strong> - The traditional Kullu cap is a
                  headwear famous for its style and comfort, worn mostly by men.
                  The cap made from sheep or finer Pashmina wool and lately of
                  Angora rabbit wool has a beautiful design facing the front
                  side which is weaved in cotton, wool or velvet material. The
                  circular cap comes in a variety of colours and patterns which
                  makes them a perfect souvenir for loved ones. <br></br>
                  <br></br>
                  <strong>Kullu Shawls</strong> - Made from the some of the
                  finest quality woollen fabrics. Kullu shawls draped over the
                  dress to catch body warmth, are famous for their bright
                  coloured patterns in geometric or floral designs, of the
                  stripes running on the sides or the borders of the shawl. The
                  patterned shawls are worn by women while men prefer plain
                  shawls which are known as Lo Kullu shawls, made from lambswool
                  and Angora fibres, are much in demand all over the country.
                  The more expensive shawis are crafted from Pashmina that sell
                  at a premium. <br></br>
                  <br></br>
                  <strong>Kullu Muffler</strong> - Just like the shawls,
                  hand-woven Kullu mufflers made from pashmina, merina or angora
                  wool are famous for their fine embroidery and style quotient.
                  They have elaborate geometric patterns on both ends. The
                  accessory is worn around the neck by men and women as a
                  fashion statement, but more so to keep warm in winters.{" "}
                  <br></br>
                  <br></br>
                  <strong>Pullas</strong>
                  One can take home the famous Kulluvi Pullan which are a type
                  of footwear made from the hemp fibre. The top of a Pullan is
                  crafted out of goat hair and embellished with colourful
                  designs in woollen threads.<br></br>
                  <br></br>
                  <h4>Chamba</h4> Chamba is the land of immense beauty which has
                  preserved age-old traditions, crafts and cultural essence of
                  the state. The attire of the locals and in particular natives
                  of the remote regions living in higher valleys of Churah and
                  Pangi present a vibrant society that suill takes pride in its
                  local dress. The Gujar and Gaddi tribes, inhabitants of the
                  Bharmaur, upper parts of Bhattiyat, Churah and Salooni regians
                  living a nomadic life have native dress styles that simply
                  fascinate.<br></br>
                  <br></br>
                  <strong>Gaddi costumes</strong> - Clothing truly reveals the
                  demographics and survival instinct of Gaddis known for their
                  nomadic lifestyle. The males wrap themselves in Chola (long
                  woollen coats). Dor (coat tied around the waist), Patti
                  (pajamas worn underneath) Dur (golden earrings) and Topi (cap
                  made from woollen material. They also wear a pointy cap
                  representing the Mount Kailash. This cap is kept folded in
                  warm weather but as soon as the cold wave intensifies, it is
                  pulled down to provide protection from chilly weather. The
                  Gaddi cap isalso adorned with dry flowers and beads or a Kalgi
                  (tuft of feathers). Complementing their male counterparts,
                  females wear a simple shirt with a half belt in the front and
                  a churidar suthan concealed under Chola or Cholu and Luanchari
                  (frilled lang frock) reaching down to the ankles. To cover the
                  head, women use Jhund (a vell of Dor or Duppata). commonly
                  known as Ghunghat or Ghundu. Jewellery like Jhumka (earrings),
                  Balu (nose ring made of gold), Chiri tornament worn on the
                  forehead, secured by strings), Chakdi (worn on back of the
                  head with help of silver clips), and Gorju and Toke (silver
                  bracelets worn in pairs) are an Integral part of the
                  traditional attire that local women use to beautify
                  themselves.<br></br>
                  <br></br>
                  <strong> Gujjar Costumes</strong> - As compared to the Gaddis,
                  Gujjars like to wear dark and gaudy coloured combinations
                  which gives them a distinct look. The head-dress is epitomized
                  by a turban (like Mughal turbans) made from simple white
                  muslin cloth and a long loose shirt (called Kameez) up to the
                  knees. Typically blue and black in colour, is worn. Over the
                  shirt, a black coloured waistcoat with frills is adorned,
                  while a Ghutna (churidar pyjama) and a Themat (Lungi) sheaths
                  the body from the waist down to the toe tip. This attire of
                  the Gujjars is exemplified by the Chaddar (warm shawl) worn
                  over the shoulders. Females wear a round cap called Joji on
                  their head, Kalidar (black kurta) stitched in colourful
                  threads going up to the knees on the upper body, and Churidar
                  Suthan - a tight pyjama unto the ankles and loose up to
                  thighs, on the lower body. They also wrap themselves with a
                  Chaddar (warn shawl) around their head and upper body part.
                  <br></br>
                  <br></br>
                  <h4>Lahaul and Spiti</h4> Lahaul is one of the coldest
                  inhabited regions of the Himalayas and the natives use woollen
                  clothing to keep them warm around the year. Men wear woollen
                  trousers usually of dark colour along with full-sleeved shirts
                  known as Kurtis. To complete the look, a loose gown called
                  Kattar grey, black, or white colour is worn over the dress.
                  Women dress in tight fitting pajamas and a full gown called
                  Dugpo which is secured to the waist with a sash. Both men and
                  women adorn the famous Lahauli caps to complete the
                  traditional attire. Unlike the Kulivi cap, the Lahaull cap is
                  uni-coloured with no patterns. Spiti valley dress, which
                  differs from that of Lahaul, has long loose frocks or coats,
                  known by different names that depend on the material used, to
                  cover up the whole body is some of the harshest weather
                  conditions of the state. The ones made from wool are called
                  Righoay, ones crafted from sheep or goat skin are Thakpa and
                  if made from cotton lines with goat or sheep fur they are
                  dubbed as Charlak. To give warmth to the back and abdomen,
                  they are tied with a sash called Kira Tight woollen trousers
                  called Suthan are worn underneath. A cotton or silk under coat
                  that locals call Tochay is worn under the coat Women of Spiti
                  drape themselves in loose cotton frocks called Tochay or
                  woollen frock-coat called Righoay with long full-sleeved
                  collarless and button-less shirts known as Hoojuk underneath.
                  These are complemented by red or black trousers. To add colour
                  to the whole attire, embroidered stoles known as Lingches are
                  wrapped around the back, neck and shoulders. A fur-lined cape
                  called Lakpa is also worn over the dress. Both men and women
                  wear round caps with a green-coloured front plece adorned with
                  a thin bordered outline.<br></br>
                  <br></br>
                  <strong>Sirmaur</strong> - Traditional attire of Sirmaur
                  district is very similar to Shimla. Women in this region wear
                  salwar-kameez with dhatu, while men wear a long woollen coat
                  called Lohiya with pajama and a cap similar to Kinnauri topl
                  <br></br>
                  <br></br>
                  <h4>Mandi, Solan, Bilaspur, Hamirpur, Kangra, Una</h4>{" "}
                  Traditionally women in these districts dress up in a long
                  blouse like shirt, a long skirt called ghaghra and a
                  pajama/suthan, while men wear a frock like kurta with multiple
                  pleats and pyajama. Though with passage of time, kurta and
                  pajama for men, and salwar sult for women have become a more
                  preferred choice, married women carry duppata over their head
                  as a vel in the hilly regions of Solan and Mandi which are in
                  vicinity of Shimla, women wear suit salwar with dhatu (head
                  scarf).
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <br></br>
      <h5>
        Numerous forts, palaces, temples, monasteries and residences of heritage
        prominence are found all over the state of Himachal. The thousand year
        old Buddhist monastery of Tabo in Spiti with its fine wall-paintings and
        stucco statues has been declared a World Heritage Site by UNESCO. The
        village of Pragpur with its age-old and well preserved architecture and
        cobbled streets has been declared a 'Heritage village. Many of
        Himachal's forts, palaces and residences are privately owned, and
        naturally, the discretion of their use rests with their owners. Yet, we
        are proud to have them as a part of our rich heritage. With nostalgia
        and comfort skilfully interlaced, here is a window that invites you to
        share a bygone era and hold its enduring charms.
      </h5>
      <br></br>
      <Container>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={2}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  <Icon.FlagFill color="white" size={20} /> <h6>Forts</h6>
                </ListGroup.Item>
                <br></br>
                <ListGroup.Item action href="#link2">
                  <Icon.ShieldShaded color="white" size={20} />
                  <h6>Palace</h6>
                </ListGroup.Item>
                <br></br>
                <ListGroup.Item action href="#link3">
                  <Icon.HouseFill color="white" size={20} /> <h6>Residences</h6>
                </ListGroup.Item>
                <br></br>
                <ListGroup.Item action href="#link4">
                  <Icon.ArchiveFill color="white" size={20} />
                  <h6>Museum</h6>
                </ListGroup.Item>
                <br></br>
                <ListGroup.Item action href="#link5">
                  <Icon.Bank2 color="white" size={20} />
                  <h6>World Heritage Sites</h6>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <strong>Kangra Fort</strong> - One of the largest and the
                  oldest forts in the Indian Himalayas, Kangra Fort built by the
                  royal Katoch Dynasty, dates back to the ancient Trigarta
                  Kingdom, which even finds a reference in the Mahabharata. Also
                  known as Nagarkot fort, It lurks above a flat mountain range
                  with the torrential Banganga river embracing in the valley
                  below. Spread expansively over an area of 4 km, the fort
                  guarded by high walls and ramparts was severely damaged in the
                  devastating Kangra earthquake of 1905 that practically
                  flattened most building and monuments in the region. Yet many
                  valuable stone sculptures, carvings, idols and other artefacts
                  survived the tremors and are well preserved at the Maharaja
                  Sansar Chand Museum at the fort.<br></br> Within the fort
                  walls are three temples - Ambika Devi Temple, the Shitlamata
                  Temple and Lakshmi Narayan Temple. A staircase from between
                  the Ambika and Shitlamata temples leads to the Sheesh Mahal at
                  the edge of which is installed a polygonal watch tower. The
                  fort is only 21 km from Dharamshala.<br></br>
                  <br></br>
                  <strong>Sujanpur Tihra Fort</strong> - From a summer resort of
                  the Katoch rulers of Kangra, the Sujanpur Fort, 24 km from
                  Hamirpur town, was made the capital of the kingdom by Raja
                  Abhaya Chand. He had this fort built in 1758 AD. Popularly
                  known as Sujanur Tihra Fort, it is worth a visit. In the early
                  19th century Raja Sansar Chand made this fort palace his home.
                  From here he patronized the arts and artists that has given
                  the Kangra School of miniature paintings world fame.
                  <br></br>
                  <br></br>
                  <strong>Haripur Fort</strong> - Haripur fort built by Raja
                  Hari Chand of Kangra in Guler is set in a strategic place on
                  the Dhauladhar range. With Banganga, a stream flowing on three
                  sides of the fort, the scenic location has become popular with
                  tourists. Founded around 1464 AD, Guler's twin town Haripur is
                  believed to be the site where Kangra miniature paintings were
                  first made before the art form spread across the land.
                  Travellers from different times have documented in travel
                  accounts that Haripur was once the cradle of Kangra paintings,
                  and that Haripur fort was decorated with carvings, sculptures
                  and fine paintings. <br></br>
                  <br></br>
                  <strong>Kotla Fort</strong> - Kotla fort standing on an
                  isolated peak looking around the deep valleys is a heritage
                  monument on the Pathankot Mandi road at Latehr. The fort was
                  built by the Guler Rajas and is approached by an uphill climb
                  that goes through dense pine forests. The deep arches of the
                  structure have traces of very fine craftsmanship: paintings
                  and carvings, with three arches and niches standing amid ruins
                  giving the fort a distinct identity.<br></br>
                  <br></br>
                  <strong>Nurpur Fort</strong> - Built in the late 16th century
                  by Raja Basu, Nurpur Fort bearing splendid architectural
                  magnificence is a sprawling fortress spanning across a flat
                  plateau forming the western end of the ridge. The fort
                  overlooks the Jabhar Khud, a tributary of the Chakki rivulet
                  and the valley formed by it. On the inside, crumbling palace
                  walls have deep niches, decorative arches and faded paintings.
                  The northwest walls have panels with deeply engraved animal
                  depictions. In particular, the bulls in various actions like
                  pulling a cart, or walking in a file are attention grabbing.
                  The walls also have beautiful figures of men, women, children,
                  kings, gods, goddesses and birds inscribed on them.<br></br>
                  <br></br>
                  <strong>Bahadurpur Fort</strong> - Atop the highest point,
                  at1,980 m, embellished by the woods of deodar and ban trees,
                  is the Bahadurpur Fort near Tepra Village in Paragana, about
                  40 km from Bilaspur. Built under the reign of Raja Keshab Sen
                  in 1620 AD, the fort speaks of a past when defending territory
                  was of uttermost importance for the rulers of Bilaspur state.
                  From the fort's vantage point, Naina Devi hill station, the
                  plains near Ropar and hills of Shimla are visible in the
                  distance. Due to its elevation, the fort sometimes gets a
                  spray of snow which adds to the mysteries around its ruins.
                  <br></br>
                  <br></br>
                  <strong>Satgarh Fort</strong> - A strategically built hilltop
                  fort near Bilaspur still resonates of the glorious past it
                  had. The Satgarh Fort has a very commanding position, the
                  views from the fort ramparts are deep and magnificent.
                  <br></br>
                  <br></br>
                  <strong>Ratanpur Fort</strong> - Ratanpur fort near Mailthi
                  village on the Brahmapukhar-Jamli road in Bilaspur can be
                  reached by an arduous uphill trek through Khul village. The
                  fort has a Devi temple, and the goddess is still worshiped
                  with deep sanctity.<br></br>
                  <br></br>
                  <strong>Fort Mundkhar</strong> - In Swarghat, a small town on
                  the Chandigarh-Manall Highway, Fort Mundkhar can be reached by
                  climbing the Dar Barkha hill, The small fortress is hidden
                  behind the trees, but a closer look reveals that the structure
                  is still strong enough to have withstood the onslaught of
                  time.<br></br>
                  <br></br>
                  <strong>Tiun and Sriun Forts</strong> - On the way from
                  Bilaspur to Ghumarwin a detour at Harlog takes you to the twin
                  forts of Tiun and Sriun placed atop two mountain ranges that
                  face each other. The forts embody strong bulwarks and towering
                  pillars. Sriun fort is spread across the hill and has a scenic
                  view of the valley down below, while the Tiun fort finds
                  itself stationed in an isolated and desolate spot.<br></br>
                  <br></br>
                  <strong>Chamba Fort</strong> - With open valleys on all sides,
                  the fort was once a watch-post of the rulers of Chamba to
                  detect early enemy movement from the plains. Spread over a
                  large area, the fort sits on an abyss with a dizzying fall on
                  the western side. The wide views from this vantage outpost did
                  protect the hill principality and now draws tourists to soak
                  in the panorama.<br></br>
                  <br></br>
                  <strong>Taragarh and Lodhargarh Forts</strong> - Taragarh and
                  Lodhargarh forts are two feathers in the cap of Chamba valley.
                  Taragarh Fort is situated on the Kakira Chowari road atop the
                  Bainia village in Taragarh panchayat. The fort can be reached
                  by a moderate grade trek that passes for about two-and-a-half
                  kilometres through thick bushes, boulders and narrow goat
                  paths Lodhargarh Fort was built by Raja Ganesh Varman and in
                  that era was kilown as Ganeshgarh. The four walls are intact.
                  acting as witness to time but the insides are all broken and
                  have fallen apart. The fort was probably constructed as a
                  check post or watchtower and storing provisions and water to
                  sustain a small battalion.<br></br>
                  <br></br>
                  <strong>Kamru Fort</strong> - A kilometer above Sangla village
                  stands the towering hill fort of Kamru. This five storey wood
                  and stone structure, resting on a stone platform in Kamru
                  village, was the original seat of the rulers of Bushair The
                  main gate of Kamru, a dense cluster of houses surrounded by
                  fields and orchards, has an image of the Buddha, whose
                  blessings are sought before entering the confines of the
                  village. A series of low gates through the hamlet lead to the
                  fort it serves as an excellent example of an architectural
                  style that is unique to this part of the world. The stronghold
                  has an image of the Hindu deity, Kamakhya Devi (Kamakshi)
                  installed in the upper storey. This image is said to have been
                  brought here several centuries ago from Assam.<br></br>
                  <br></br>
                  <strong>Labrang Fort</strong> - Situated at a dizzy height in
                  Labrang village, the strategically built fort is one of the
                  tallest structures in whole of Kinnaur. Resting on a 25 feet
                  stone base the structure is 8 stories high but only 5 stories
                  are in good shape, the 6th storey being half broken. An iron
                  chain hanging from the upper story is fixed with the solid
                  wooden door of the fort.<br></br>
                  <br></br>
                  <strong>Morang Fort</strong> - Morang fort, on a high hillock
                  near the village by the same name, on the left bank of River
                  Satlu), has an air of mystery to it. The wooden extending
                  beams and wooden pillars of the verandah of the top floor
                  indicate that there used to be another floor above it. The
                  entrance door and the doorframes of this mystic fortress have
                  wood carvings which give an idea about the power that this
                  structure must have commanded at one time.<br></br>
                  <br></br>
                  <strong>Sapni Fort</strong> - The colossal Sapni Fort in
                  village Sapni was built by Raja Padam Singh of Rampur. The
                  castle, facing Kalpa, is a large structure made by binding
                  together two buildings. The main tower of one building is
                  7-storey high and the other one has 5 storeys. There is a
                  temple to goddess Kall in one of these buildings. Raja Padam
                  Singh built the front portion of the fort featuring exquisite
                  woodwork on the main door frames and on window frames,
                  adjoining the tower built for the queen. Although rain, snow
                  and cold weather condition in the region has taken a toll on
                  the carvings, the fort still retains much of its architectural
                  magnificence.<br></br>
                  <br></br>
                  <strong>Gondhla Fort</strong> - Lahaul's sole fort, Gandhla,
                  built in a dreamy location at Purd, on the Manall-Leh Highway,
                  was constructed by Raja Ram Singh of Kullu in 1700 AD. The 8
                  storey towering fort made of stone and wood, overlooks the
                  valley. Its seven storeys have rooms while the eighth storey
                  has a wooden verandah running round the edifice. The
                  staircases of the structure are partially notched wooden logs
                  and it has apartments which can comfortably accommodate more
                  than 100 people. The Gondla Castle houses antique items like
                  bows, arrows. quivers, catapults, guns and canons beside
                  age-old costumes, furniture and idols. One article of great
                  historical significance here is the Sharab Raldi, i.e. the
                  sword of wisdom" (Sharab means wisdom and Raldi means a
                  sword), which in Sanskrit is called Pragya Kharga. This sword
                  of wisdom has great relevance for Tibetans who believe it to
                  be the weapon Lord Manjushri.<br></br>
                  <br></br>
                  <strong>Pangna Fort</strong> - In the open valley of Pangna, a
                  village in Karsog Tehsil of Mandi District, stands tall the
                  Pangna fort which is a tower-like structure on a 50 foot stone
                  platform overlooking the village spanning on its either side.
                  The 60 feet high, seven storied tower-like fortress built in a
                  typical style, using only wood and stone has a classic charm.
                  The elaborate wood carvings throughout the structure have
                  suffered little damage, even after so many centuries. In the
                  open courtyard there is a Mahamaya temple which is of
                  religious importance for the pilgrims who visit Pangna.
                  <br></br>
                  <br></br>
                  <strong>Kamlah Fort</strong> - Kamlah fort firmly footed on
                  the jagged ranges of Sikandar Dhar, in Mandi was an outpost
                  the rulers of Mandi had to keep a watch on enemy movements.
                  Named after Kanlah Baba, a local saint, fortification was
                  started by Raja Hart Sen around 1625 AD and completed by his
                  san, Suraj Sen. The spread out complex actually contains six
                  forts: Kamlah, Chawku, Chabara, Padampur, Shamsherpur and
                  Narsinghpur. The main entrance to fort is a labyrinthine which
                  a ensured the fort remained invincible for centuries. In 1840,
                  it was invaded by Bentura, a general of Maharaja Ranjit Singh
                  but in 1846 it was restored to the kings of Mandi.<br></br>
                  <br></br>
                  <strong>Jaitak Fort</strong> - This fort is 15 km from Nahan
                  and it crowns a steep ridge above the Kiarda Dun. Built by the
                  Sirmaur kings, it was run over and restored by the Gurkha
                  general Ranzor Thapa during the Gurkha invasions of early
                  1800s. The Gurkha general battled the British forces from this
                  fort but lost out.<br></br>
                  <br></br>
                  <strong>Gurkha Fort</strong> - Presently used as an Army
                  Training Center for Gurkha recruits, the fort at Subathu is
                  another remnant of the times when the area was invaded by
                  Gurkha warriors. This fort is 16 km from Parwanoo and is set
                  in the woods. The Gurkha Museum in the vicinity has exhibits
                  dating back to the fierce Anglo-Gurkha wars fought.<br></br>
                  <br></br>
                  <strong>Nauni Fort</strong> - The hilltop Nauni Fort, 15 km
                  from Solan, was a watchtower and a retreat during times of an
                  invasion in the valley. The fort can be reached from Nauni
                  village on the Solan-Rajgarh road. Explorers who take the
                  trouble of trekking to the hill are rewarded with some
                  breathtaking views of mountain vistas.<br></br>
                  <br></br>
                  <strong>Malaun Fort</strong> - Malaun fort is in Solan
                  district which can be reached from Bilaspur as well. On the
                  Shimla-Bilaspur highway, taking a diversion from near
                  Brahmapukhar, on the Malthi-Lalgarh road, one can get a
                  glimpse of Malaun Fort above the village. High on a hill, it
                  can only be reached by trekking to it. Ruins of the
                  fortification are spread over a large area and there is a
                  temple of Kall in the premises. The fort was overtaken by
                  Gorkhas and it was the British forces under Sir D. Ochterlony
                  that fought a pitched battle at Lohar ghat near Malaun to
                  occupy the fort. The cannons used in the battle were kept at
                  the fort but have now been brought down to the Gorkha Training
                  Center Museum in Sabathu.<br></br>
                  <br></br>
                  <strong>Kuthar Fort </strong> -Located at a distance of 34 km
                  from Salan, the oldest sections of Kuthar Fart are over 800
                  years old. The most recent structures are about eight decades
                  old. The fortress is spread over a large area and fresh water
                  springs flow within its confines. Within easy reach of scenic
                  Kunihar valley, the hill station of Kasaull and the Gurkha
                  fort of Subathu, Kuthar Fort are on a offbeat itinerary that
                  few travellers take to readily.
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <strong>Naggar Castle</strong> - The Naggar castle is a large
                  timber-bound structure built in a style indigenous to the
                  Western Himalayas. The structure makes use of big logs and
                  stones placed alternately, with the stones bound together by
                  mud. The deodar or spruce beams are placed horizontally and
                  inlaid with stones to give the structure inherent strength,
                  Roof of the fort has a slant and the icicle-like wooden
                  hangings act as decorations. From the castle one can watch the
                  distant snow-covered peaks, the beautiful Beas valley and the
                  lush green hillsides marked with orchards. When seen from the
                  valey below it seems like a lanky building, but on reaching,
                  one finds it to be just one besides the road. Presently,
                  Naggar Castle is maintained and run as a Heritage Hotel by
                  Himachal Tourism.<br></br>
                  <br></br>
                  <strong>Rang Mahal</strong> - One of the largest buildings
                  from the times when Himachal was under the rule of Princely
                  states, Rang Mahal of Chamba is a fusion of Mughal and British
                  architectural styles. Construction of this large palace was
                  started by Raja Umed Singh (1748-1754) but a brick made
                  superstructure was only added towards 1860 by Raja Sri Singh.
                  The large royal complex served as residence for some members
                  of the ruling family. On the western side is what used to be
                  the granary and a treasury. The building is still in use and
                  under the aegis of state handicrafts department, training
                  workshops for making shoes, chappals and rumals are being run
                  in some large rooms. Some of the decorative and colourful wall
                  paintings that were removed from this building are displayed
                  at the National Museum in Delhi The Bhun Singh Museum in
                  Chamba also has a collection of some paintings and artefacts
                  of Rang Mahal.<br></br>
                  <br></br>
                  <strong>Akhand Chandi Palace </strong> - The Akhand Chandi
                  Palace, overlooking the chaugan ground, is better known as the
                  Chamba Palace, Foundation of this palace was laid by Raja Umed
                  Singh (1748-64). The palace has delicately carved doors,
                  balustrades and window frames of intricate wood with painted
                  glass work. The massive Darbar Hall, also called the 'Marshal
                  Hall was constructed in 1879 by Capt. Marshal and the Lamina
                  Mahal was added by Raja Bhuri Singh at the start of the
                  twentieth century.<br></br>
                  <br></br>
                  <strong>Raj Mahal</strong> - In 1527, when Raja Ajbar Sen set
                  up his capital in Mandi, Chawk a palace with four towers was
                  constructed. Successive generations of rulers added to the
                  existing structure. Moorscraft, a British traveller, who
                  crossed Mandi in the mid-19th century did describe the place
                  as, The town is situated in the angle between the Beas and
                  Suketi rivers. The most conspicuous object is the palace of
                  the Raja, which still stands stout in the southern part of the
                  town, and presents a number of tall white buildings, with
                  rools of blue slate, concave like those of Chinese pagodas."
                  <br></br>
                  <br></br>
                  <strong>Chail Palace</strong> - Chail, a salubrious hill
                  station on a forested range, was founded as a summer residency
                  town by the former Maharaja of Patiala, Chail Palace, set on a
                  ridge, has a regal setting with spectacular views, plush lawns
                  and aesthetic Interiors. The Palace bears a European
                  architecture and is now maintained and run by Himachal Tourism
                  and is a heritage property.<br></br>
                  <br></br>
                  <strong>Padam Palace</strong> - Built in 1917 by Raja Padam
                  Singh, the erstwhile ruler of Bushair state, the palace
                  displays a fusion of hill and colonial architecture. European
                  and Indian design themes are apparent in the wooden structure,
                  galleries verandas and the roofline of the building. The
                  stylish conical roof and the white painted eaves gives the
                  building a distinct look. Front door is painted in white and
                  the Belgium glass work compliments the design. On the inside,
                  this palace has some fine stained glass windows, greatwoodwork
                  and a rich library.<br></br>
                  <br></br>
                  <strong>Kotkhai Palace</strong> - Kotkhal palace built by King
                  Rana Saab is on a narrow cliff formed by two streams, with one
                  of them being the Giri Ganga river. The palace bears a Tibetan
                  style architecture that dwarf the nearby houses by its sheer
                  size.
                  <br></br>
                  <br></br>
                  <strong>Jubbal Palace</strong> - Designed by a French
                  architect in 1930, the imposing Jubbal Palace is a mix of
                  Chinese, Indian and European style architecture. The main
                  entrance of the palace is through a huge wooden door
                  embellished with copper coins. Besides the beauty of the
                  mansion, antique furniture, rare guns, artefacts and a library
                  with a collection of Sanskrit and Persian books are part of
                  the palaces valuable possessions. An older palace that was
                  within the complex was gutted by a fire. The Palace is a
                  residence of the former rulers of Jubbal state.<br></br>
                  <br></br>
                  <strong>Arki Palace</strong> - The Palace within the Arki fort
                  was built between the years 1695-1700 by Rana Prithvi Singh.
                  Arki was the capital of Baghal princely state. In 1806
                  invading Gurkha forces overran Arki. Liberated after the
                  conclusion of the Anglo-Gurkha wars in 1814-15, but many
                  paintings and other artefacts surprisingly survived unscathed
                  from plunder of the invading forces. A good collection of
                  miniature paintings of the Arki Kalam are housed in the
                  Palace. It also has many good wall paintings, which have stood
                  the test of time as the glazed paint used still appears fresh
                  even after centuries when they were first painted.<br></br>
                  <br></br>
                  <strong>Sunni Palace</strong> - At Sunni on the bank of Satlul
                  river, near Tattapant is a pyramid-shaped palace that flaunts
                  a sprawling wide base with a two storied structure over it.
                  The design of the palace is a combination of colonial and
                  Pahari architecture, exemplified by cones, frills and turrets.
                  The palace belongs to the former royal family of Bhajji
                  princely state.<br></br>
                  <br></br>
                  <strong>Nalagarh Palace</strong> - The imposing palace,
                  strategically built atop a hillock in 1421 AD by Raja Bikram
                  Chand is spread over a large area. At the foothills of the
                  Himalayas, the views from the palace span a wide area of the
                  plains. It has a series of structures mostly carved in Mughal
                  style architecture. Owned by the former royal family of
                  Nalagarh, the palace has been painstakingly renovated and
                  converted into a heritage resort.
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <strong>Hotel Taragarh Palace</strong> - A summer resort of
                  the formers rulers of princely Jammu state, the Palace at
                  Taragarh, near Palampur was built in 1931 by Nawab Sadiq
                  Mohammed Khan Bahadur in the name of Maharani Tara Devi, queen
                  of the princely state. This splendid art-deco mansion set
                  amidst expansive grounds that host jungle camps and a
                  memorabilia of the past adorning its elegantly appointed rooms
                  has been converted into a heritage hotel.<br></br>
                  <br></br>
                  <strong>Hotel Naggar Castle</strong> - With hewn stone neatly
                  packed in a horizontal mesh of timber sleepers, the medieval
                  Naggar Castle was built by Raja Sidh Singh of Kullu In 1460.
                  Perched high on a cliff, this was the vantage point from where
                  the rulers administered Kullu valley for over two centuries.
                  Now turned into a resort, the Naggar Castle boasts authentic
                  western Hirkelayan architecture. Himachal Tourism operates a
                  heritage hotel in this castle.<br></br>
                  <br></br>
                  <strong>Hotel Raj Mahal</strong> -Palace A manor crafted in
                  the colonial style architecture and still owned by the former
                  ruling house of Mandi, the heritage Hotel Raj Mahal Palace is
                  partially concealed from view by other nearby buildings. With
                  corridors dotted by ancient arms and portraits, its interior
                  echoes a time and era of another age. Striking pieces of
                  ornate furniture placed at every nook and corner of the palace
                  give it a historical significance.<br></br>
                  <br></br>
                  <strong>The Holme</strong> - The Holme situated at Summerhill
                  in Shimla is a place that basks in its heritage rich
                  architecture. This colonial bungalow was the one-time
                  residence of the renowned artist Amrita Sher-Gill where she
                  painted some of her most celebrated creations.<br></br>
                  <br></br>
                  <strong>Palace Hotel Chail</strong> - The beautiful hill
                  station of Chail is renowned for its splendid mansion
                  encircled by picturesque cottages and deodar forests that
                  present panoramic views on all sides. The heritage property
                  served as a summer residence of the former royal family of
                  Patiala. It has been converted into a heritage hotel that is
                  being operated by Himachal Tourism.<br></br>
                  <br></br>
                  <strong>The Oberoi Cecil</strong> - A memorable gateway that
                  embodies the colonial charm of Shimla, the Oberoi Cecil was
                  built in the 1880s. Situated on the quitter western stretch of
                  The Mall road, the property gained popularity as writer
                  Rudyard Kipling spent some time here in 1885. The property
                  with warm woodwork complemented by the rarest furnishings and
                  a full range of suites, rooms and facilities, comparable with
                  the best in the world, make it a grand heritage hotel.
                  <br></br>
                  <br></br>
                  <strong>Hotel Springfield</strong> - On the eastern side of
                  Shimla, Hotel Springfield located in Chota Shimla, is the
                  refurbished heritage bungalow which offers a sublime
                  experience to travellers. With an excellent view of Churdhar
                  Peak, Springfield was the residence of the former chiefs of
                  Sheikupura.<br></br>
                  <br></br>
                  <strong>The Clarkes</strong> - Towards the eastern side of
                  Mall Road is the Clarkes Hotel, which bears the tag of being
                  Shimla's oldest hotel. The heritage property having neat
                  Tudor-framed structure with window boxes, was built 1898 as
                  The Carlton. In the 1920s it was taken over by Ernest Clarke
                  and named The Clarkes. Over the years, this historic building
                  has undergone structural modification, yet it retains the
                  character and warmth of colonial era buildings.
                  <br></br>
                  <br></br>
                  <strong>Madan Kunj</strong> - Once called Khud Cottage, Madan
                  Kunj built around 150 years ago is another colonial cottage in
                  western Shimla that resonates the grandeur of the past. During
                  World War II, when Burma was under Japanese occupation, this
                  building served as the summer residence to Governor of Burma.
                  Today, the bungalow serves as a peaceful abode for travellers
                  who want to bask in the glory of the yesteryears.<br></br>
                  <br></br>
                  <strong>Hotel Ros Common and Hotel Alasia</strong> - The small
                  hilltop town of Kasauli has many heritage bungalows and other
                  colonial buildings scattered about. Two heritage cottages, Ros
                  Common bungalow and Hotel Alasia, bearing the old world charm
                  with their gabled roofs, embodied by lush gardens, narrow
                  cobbled paths shaded by oak, pine and massive horse-chestnut
                  trees are run as hotels.
                  <br></br>
                  <br></br>
                  <strong>Chapslee</strong> -Originally built in 1835, Chapslee
                  perched atop Elysium Hill on northern side of Shimla has a
                  magnificent interior with priceless artefacts adomed in every
                  wall one can set eyes on. The architecture echoes the amalgam
                  of British Indian and European aesthetics which are well
                  complemented by the ornate brass beds, Belgian chandeliers,
                  drapes from the Doge's palace in Venice, Delft tiled
                  fireplaces and exquisite rugs. The Burma teak used in the
                  panelling is the same one that was used for the construction
                  of Viceregal Lodge at Shimla. Over the years Chapslee became
                  the property of Raja Charanjit Singh of Kapurthala, whose
                  descendants now run it as a heritage hotel.<br></br>
                  <br></br>
                  <strong>Hotel Woodville Palace</strong> - Beautified by a
                  hillside draped in tall Himalayan cedar trees, Hotel Woodville
                  Palace is a grand art deco mansion. During the 1865-1881
                  period, the estate was residence of Sir William Mansfield, the
                  British Commander-in-Chief of the Imperial army. In 1938, Raja
                  Sir Bhagat Chandra of Jubbal replaced the old structure with
                  the present day mansion. Terraced lawns and a facade covered
                  with trimmed Virginia vines is well complemented by an
                  evocative interior - complete with rare artefacts, paintings
                  and photographs, it is near Rajbhawan, Chota Shimla.
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <strong>War Memorial Dharamshala</strong> - Set amidst the
                  pine timberland, Dharamshala War Memorial is the gateway to
                  history paying tribute to the brave hearts who relinquished
                  their lives to safeguard the motherland. To reach the war
                  memorial, one can enjoy a stroll through the beautiful
                  forested area which is a heart pleasing experience in itself.
                  The architecture of the memorial is carefully laid, signifying
                  the continuity of life and the fact that sacrifice and valour
                  of our martyred soldiers will remain etched in our memories.
                  Three huge panels of black marble are engraved with the names
                  of martyrs who fought selflessly in the operations of 1947-48,
                  1962, 1965, 1971 and other peacekeeping missions, bearing
                  testimony of their supreme sacrifices.<br></br>
                  <br></br>
                  <strong>Maharana Sansar Chandra Museum</strong> - In the
                  confines of Kangra Fort is the small yet impressive Maharana
                  Sansar Chandra Museum, displaying the opulence of times when
                  kings ruled. Here one can find ornate palanquins, ancient
                  weapons like swords, silver-framed beds. exquisite thrones,
                  beautiful wall murals, Kangra School miniatures, before and
                  after photographs from the 1905 earthquake and lavish royal
                  attires. As the name suggest, the museum built by the
                  erstwhile royal family of Kangra is dedicated to Maharaja
                  Sansar Chandra who inherited the throne at the age of 10
                  years.
                  <br></br>
                  <br></br>
                  <strong>Bhuri Singh Museum</strong> - Raja Bhuri Singh, a
                  former ruler of Chamba, in his lifetime (1908 AD) did set up
                  this museum that has a fine collection of rare paintings,
                  coins, jewellery, musical instruments, artefacts, traditional
                  arms & armours, and other artefacts on permanent display are
                  the familles personal collection of miniature paintings. There
                  are also some rare copper-plate inscriptions and other
                  historical documents preserved in this museum.<br></br>
                  <br></br>
                  <strong>State Museum</strong> - Once the private residence of
                  Lord William Beresford, a Victoria Cross decorated soldier,
                  the colonial mansion in Shimla was turned into the Himachal
                  State Museum in 1974. just 2.5 km from town centre Scandal
                  Point, the museum treasures some rare artistic, archaeological
                  and historical artefacts. On display are Greek coins from the
                  time of Alexander The Great's Invasion in 326 BC Himachali
                  dolls, paintings, photographs of historical moments collected
                  from all over the country and a library treasure with over
                  10,000 books, journals and magazines. The sculpture gallery
                  features metal, wooden and stone sculptures while the
                  paintings section has Mughal, Pahari and Rajasthani paintings.
                  <br></br>
                  <br></br>
                  <strong>Indian Institute of Advanced Studies</strong> - Built
                  in 1888, the Indian Institute of Advanced Studies before
                  Independence served as the Viceregal Lodge, and was the seat
                  of pre-eminent power of British rule. This architectural
                  marvel is an English renaissance inspired grey-stone structure
                  with Burma teak panelling on the inside. The structure
                  surrounded by age-old trees, lush green lawns and gardens has
                  a small museum which preserves artefacts, documents,
                  photographs and other items that have shaped the history of
                  modern India. There's a library of historical books and the
                  iconic round table where some critical conferences related to
                  India's freedom struggle were conducted.<br></br>
                  <br></br>
                  <strong>Bhalku Railway Museum</strong> - Dedicated to Baba
                  Bhalku- a local man who worked closely with Chief Engineer HS
                  Harrington and his team on the Kalka-Shimla railway line, the
                  iconic Baba Bhalku Railway Museum located near the old Bus
                  Stand, Shimla reverberates tales of the heritage track. On
                  display are several items and train parts that date back to
                  early 20th century. The things displayed include steam
                  locomotive headlights, brass lamps, lanterns, ticket punching
                  machines, fine glassware, labels worn by porters, antique
                  wooden chairs which were placed in the rest rooms at the
                  stations, and vintage wall clocks manufactured in England. One
                  of the oldest objects displayed is a rail liner used on the
                  track dated to 1899 AD, This treasure cove also has rare old
                  photographs, important stations and the tunnels en route. The
                  museum is open to visitors from 9:30 am to 4:30 pm on all
                  days, except Mondays. One interesting thing on display is the
                  lost property register of 1930, which accounts all the lost
                  items like bags, umbrellas, caps and coats left, found in the
                  station waiting rooms or the trains.<br></br>
                  <br></br>
                  <strong>Army Heritage Museum, Annandale</strong> - Located
                  abreast the tranquil hinterlands of Annandale ground, the Army
                  Heritage Museum was established by the Army Training Command
                  in 2006 to commemorate Himachal's long lasting association
                  with the Indian Army. It is a rich repository of the Army's
                  heritage, traditions and valour. The free to visit museum is
                  open on all days except Mondays and gazetted holidays.
                  <br></br>
                  <br></br>
                  <strong>Shimla Heritage Museum</strong> - The Shimla Heritage
                  Museum is in the 1862 built United Service Club building, near
                  The Mall Road. In an exhibition hall, photographs, documents
                  and artefacts about events and the history of British Raj
                  associated with some heritage buildings are on display. The
                  museum is theme based on "Har Ghar Kuchh Kehta Hai" where
                  'Every house tells a story as a concept has been captured.
                  <br></br>
                  <br></br>
                  <strong>Suketi Fossil Park Museum</strong> - On the left bank
                  of Markanda rivulet, 21 km from Nahan, discovery of fossil
                  remains of Mesozoic age animals, better known as the age of
                  Dinosaurs spanning from 252 million years ago to about 66
                  million years ago, did bring the site to international
                  attention. To illustrate its importance, life size fibre glass
                  models of extinct species of hippopotamus, giant tortoise,
                  elephants, giraffes, saber tooth cats, crocodiles and other
                  animals of the age have been put up in a 5 sq km museum park
                  area. The very sight of these models evokes curiosity about
                  evolution and the ages gone by. The park is first of its kind
                  in the country, developed at the actual discovery site of
                  fossils. A museum here exhibits some of the fossil remains
                  found at the site.
                </Tab.Pane>
                <Tab.Pane eventKey="#link5">
                  <strong>Kalka Shimla Heritage Railway</strong> - An
                  engineering marvel, the narrow-gauge Kalka-Shimla railway line
                  with 102 tunnels was recognised by UNESCO as an India World
                  Heritage mountain railway site on 8 July 2008. The historical
                  rail line built under Herbert Septimus Harington between
                  1898-1903 has 20 beautiful stations, 912 curves and 969
                  bridges and 102 tunnels which takes travellers on a journey of
                  a lifetime. The railways locomotives hold great importance
                  from heritage point of view and some of them are immaculately
                  preserved for the generations to come.<br></br>
                  <br></br>
                  <strong>Great Himalayan National Park</strong> - High ridges,
                  valleys with slow moving glaciers, deep gorges, alpine meadows
                  and closed virgin forests make the Great Himalayan National
                  Park (GHNP) one of the most scenic destinations for nature
                  lovers. The vast 1,171 sq. km wilderness hovering between the
                  altitude of 1500 and 6000 m, harbours an abundance of wildlife
                  which includes the Himalayan Thar, Himalayan Brown Bear, Snow
                  Leopard, Blue Sheep, Western Tragopan and Monal in a landscape
                  filled with fervent water streams and alpine slopes, lulled by
                  stoic snow towers, to make it one of the wildest and most
                  unique ecosystems in the world. It was recognized as a UNESCO
                  World Heritage Site in 2014, a reason no winding roads or
                  paved trails find existence in GHNP.
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <br></br>
    </div>
  );
}

export default Cultureandheritage;
