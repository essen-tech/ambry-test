import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, Row, Col, Button } from "~components";
import { ITextAndImageScatter } from "~models";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as style from "./TextAndImageScatter.module.scss";

interface Props {
  section: ITextAndImageScatter;
}

interface AddressData {
  title: string;
  address: string;
  link: string;
  url: string;
  image?: string;
}

const londonAddressData: AddressData[] = [
  {
    title: "Panzers",
    address: "13-19 Circus Rd, London NW8 6PB",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761abcadb9a683:0xd6181630c7795859?sa=X&ved=1t:8290&ictx=111",
    url: "www.panzers.co.uk",
    image: "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/london-1.jpg",
  },
  {
    title: "Lidgate's",
    address: "110 Holland Park Avenue, London W11 4UA",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760fe658ef9c0f:0x4d47d74bfa6240a?sa=X&ved=1t:8290&ictx=111",
    url: "www.lidgates.com",
  },
  {
    title: "Supermarket of Dreams",
    address: "126 Holland Park Ave, London W11 4UE",
    link: "",
    url: "",
    image:
      "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/11/HP_Journal-2.width-2400_hfZvoeEyzozUZSfu-1.jpg",
  },
  {
    title: "Hampstead Butcher & Providore",
    address: "56 Rosslyn Hill, London NW3 1ND",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761a89b2c3f279:0xab4e6f48d8e28343?sa=X&ved=1t:8290&ictx=111",
    url: "www.hampsteadbutcher.com",
  },
  {
    title: "All Greens Clifton Road",
    address: "16 Clifton Rd, London W9 1SS",
    link: "https://www.google.com/maps/search/16+Clifton?entry=gmail&source=g",
    url: "www.allgreens.co.uk",
    image:
      "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/11/WhatsApp_Image_2022-05-23_at_10.46.08_AM-768x1024-1.jpg",
  },
  {
    title: "All Greens Newington Green",
    address: "109 Newington Green Road, London N1 4QY",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761c846be02b79:0xb669f8f67e66129b?sa=X&ved=1t:8290&ictx=111",
    url: "www.allgreens.co.uk",
  },
  {
    title: "The Good Plot",
    address: "296 Westbourne Grove, London W11 2PS",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760fe2427d5049:0x197b1daf675f23b4?sa=X&ved=1t:8290&ictx=111",
    url: "www.thegoodplot.com",
  },
  {
    title: "Notting Hill Fish & Meat Shop",
    address: "287-289 Westbourne Grove, London W11 2QA",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760f3e304e47b5:0xd994a5c908e16475?sa=X&ved=1t:8290&ictx=111",
    url: "www.nottinghillfishshop.co.uk",
    image: "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/london-2.jpg",
  },
  {
    title: "Provenance Village Butcher - Notting Hill",
    address: "33 Kensington Park Rd, London W11 2EU",
    link: "https://www.google.com/maps/search/33+Kensington+Park+Rd,+London+W11+2EU?entry=gmail&source=g",
    url: "www.provenancebutcher.com",
    image: "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/london-3.jpg",
  },
  {
    title: "Provenance Village Butcher - Chelsea",
    address: "247 Pavillion Road, London SW1X 0BP",
    link: "https://www.google.com/maps/search/247+Pavillion+Road,+London+SW1X+0BP?entry=gmail&source=g",
    url: "www.provenancebutcher.com",
  },

  {
    title: "Finchley Nurseries",
    address: "Burtonhole Lane, London NW7 1AS",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x487617158d698053:0x444dae67eaf708dd?sa=X&ved=1t:8290&ictx=111",
    url: "www.finchleynurseries.com",
  },
  {
    title: "Pomona Foods",
    address: "179 Haverstock Hill, Belsize Park, London NW3 4QS",
    link: "https://www.google.com/maps/search/179+Haverstock+Hill,+Belsize+Park,+London+NW3+4QS?entry=gmail&source=g",
    url: "www.pomonafoods.co.uk",
  },
];

const norfolkAddressData: AddressData[] = [
  {
    title: "The Greengrocers",
    address: "Earlham House Shops, 2-4 Earlham Road, Norwich, NR2 3PD",
    link: "https://www.google.com/maps/search/2-4+Earlham+Road,+Norwich,+NR2+3PD?entry=gmail&source=g",
    url: "www.thegreengrocers.co.uk",
    image:
      "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/11/the-green-grocers-norwich-1-1.jpg",
  },
  {
    title: "Jarrolds Food Hall",
    address: "1, 11 London St, Norfolk NR2 1JF",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d9e32f428ad8a1:0x79be73e3b6a89c0e?sa=X&ved=1t:8290&ictx=111",
    url: "www.jarrolds.co.uk",
    image: "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/norfolk-2.jpg",
  },
  {
    title: "AG Meale",
    address: "Wayford Nurseries, Stalham, Norwich NR12 9LJ",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d756b1ffc7e733:0x65025aa5995b3ee9?sa=X&ved=1t:8290&ictx=111",
    url: "www.agmeale.co.uk",
  },
  {
    title: "Green Pastures",
    address: "Mill Rd, Bergh Apton, Norwich NR15 1BQ",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d9fad801cf9857:0xf7e56561324d4bd8?sa=X&ved=1t:8290&ictx=111",
    url: "www.greenpasturesnursery.co.uk",
  },
  {
    title: "White’s Butcher",
    address: "16 Red Lion St, Aylsham, Norwich NR11 6ER",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d75c310878f16f:0x660f76fb2a9c6870?sa=X&ved=1t:8290&ictx=111",
    url: "www.whitesbutchers.co.uk",
    image: "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/norfolk-3.jpg",
  },
  {
    title: "Algy’s Farm Shop",
    address: "Billingford Rd, Dereham NR20 5PW",
    link: "www.algys.com",
    url: "www.algys.co.uk",
    image:
      "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/11/415919057_856333813162755_6063727267605355927_n-1.jpg",
  },
  {
    title: "J. Jones Family Butcher",
    address: "38 King Street, Thetford, IP24 2AP",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4877fb16dc3a86c9:0x64fa031c6cc02cb9?sa=X&ved=1t:8290&ictx=111",
    url: "",
  },
  {
    title: "Baker and Larner",
    address: "8 Market Pl, Holt NR25 6BW",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d76f2eb8059279:0x810259f608c80f2a?sa=X&ved=1t:8290&ictx=111",
    url: "www.bakerandlarner.com",
    image: "https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/norfolk-1.jpg",
  },

  {
    title: "Robertson’s Butcher",
    address: "Market Pl, Reepham, Norwich NR10 4JJ",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d76141f107b8cf:0x762ed921cca2b3ff?sa=X&ved=1t:8290&ictx=111",
    url: "",
  },
];

const Address = ({ title, link, url, address }: AddressData) => (
  <div className={style.addressCard}>
    <h3>{title}</h3>
    <a href={link} target="_blank">
      {address}
    </a>
    <a href={"https://" + url} target="_blank">
      {url}
    </a>
  </div>
);

const AddressSliderCard = ({ title, image, address, link }: AddressData) => (
  <figure className={style.addressSliderCard}>
    <div>
      <img src={image} alt={title} />
    </div>
    <figcaption>
      <h3>{title}</h3>
      <p>{address}</p>
      <Link to={link}>
        <Button type="submit" icon="icon-arrow-right">
          View on map
        </Button>
      </Link>
    </figcaption>
  </figure>
);

const AddressSlider = ({ data }: { data: AddressData[] }) => (
  <div className={style.addressSlider}>
    <Swiper
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      loop={true}
      breakpoints={{
        721: {
          slidesPerView: 3,
        },
      }}
    >
      {data.map((e, i) => (
        <SwiperSlide key={i}>
          <AddressSliderCard
            title={e.title}
            address={e.address}
            image={e.image}
            url={e.url}
            link={e.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export const TextAndImageScatter = ({ section }: Props) => {
  const { description, link, textAndImagesGroups } = section;

  return (
    <section data-sectionname="TextAndImageScatter" className={style.textAndImageScatter}>
      <Container className={style.mainContainer}>
        <Row className={style.row}>
          <Col md={6}>
            <div className={style.description}>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
              >
                {"Where to find us?"}
              </motion.p>
              <motion.p
                className={style.secondary}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
              >
                We believe in food that is just food. Just tasty, nutritional ingredients,
                able to stand on their own. Food that is good for you and for generations
                to come. Now in your favourite store.
              </motion.p>
            </div>
          </Col>
          <Col md={6}>
            <figure>
              <img
                src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/11/Untitled_Artwork-108-1.png"
                alt=""
              />
            </figure>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className={style.titl}>London</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <AddressSlider
            data={[
              ...londonAddressData.filter((e) => e.image !== undefined),
              ...londonAddressData.filter((e) => e.image !== undefined),
            ]}
          />
        </Row>
      </Container>
      <Container>
        <ul className={`row ${style.addressHolder}`}>
          {londonAddressData.map((e, i) => (
            <li className="col-sm-3" key={i}>
              <Address title={e.title} address={e.address} link={e.link} url={e.url} />
            </li>
          ))}
        </ul>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className={style.titl} style={{ marginTop: 120 }}>
              Norfolk
            </h1>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <AddressSlider
            data={[
              ...norfolkAddressData.filter((e) => e.image !== undefined),
              ...norfolkAddressData.filter((e) => e.image !== undefined),
            ]}
          />
        </Row>
      </Container>
      <Container>
        <ul className={`row ${style.addressHolder}`}>
          {norfolkAddressData.map((e, i) => (
            <li className="col-sm-3" key={i}>
              <Address title={e.title} address={e.address} link={e.link} url={e.url} />
            </li>
          ))}
        </ul>
      </Container>
      <Container className={style.mainContainer}>
        <Row className={style.row}>
          <Col md={12}>
            <Row>
              <Col>
                <h1 className={style.tit}>Other</h1>
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }} className={style.others}>
              <div className="col-md-3">
                <Address
                  title="Copas Farm Shop"
                  address="Off Long Ln., Cookham, Maidenhead SL6 9RF"
                  link="www.copasfarm.com"
                  url="www.copasfarm.com"
                />
              </div>
              <div className="col-md-3">
                <Address
                  title="Todelli"
                  address="Online"
                  link="www.todelli.com"
                  url="www.todelli.com"
                />
              </div>
              <Col md={6}>
                <figure>
                  <img
                    src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/11/Untitled_Artwork-106-1.png"
                    alt=""
                  />
                </figure>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className={style.awards}>
        <Row>
          <Container>
            <Row>
              <Col>
                <h1>Awards</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>
                  In 2023, Ambry turkey bacon won multiple awards, including the Quality
                  Food Awards Product of the Year, Small Producer of the Year and Gold
                  product award. It also won Gold in the Great British Food Awards where
                  judges awarded a perfect 15/15 score.
                </p>
                <ul>
                  <li>
                    <img
                      src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/award-1.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/award-2.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/award-3.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/award-4.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/award-5.png"
                      alt=""
                    />
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <p className={style.secondary}>
                  "The perfectly crispy texture complements the rich, natural flavours,
                  making it an exquisite guilt-free indulgence. This bacon is a
                  gamechanger, offering a healthier alternative without compromising on
                  taste"
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </section>
  );
};
