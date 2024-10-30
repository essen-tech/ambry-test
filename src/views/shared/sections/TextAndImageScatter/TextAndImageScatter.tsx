import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { Container, Row, Col, Button } from "~components";
import { ITextAndImageScatter } from "~models";

import * as style from "./TextAndImageScatter.module.scss";

interface Props {
  section: ITextAndImageScatter;
}

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
                src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/Frame-653-1.png"
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
          <li className={`col-md-4 ${style.imageHolder}`}>
            <img
              src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/london-1.jpg"
              alt=""
            />
          </li>
          <li className={`col-md-4 ${style.imageHolder}`}>
            <img
              src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/london-2.jpg"
              alt=""
            />
          </li>
          <li className={`col-md-4 ${style.imageHolder}`}>
            <img
              src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/london-3.jpg"
              alt=""
            />
          </li>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} className={style.addressHol}>
            <Address
              title="Panzers"
              address="110 Holand Park Ave, London W11 4UA"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760fe658ef9c0f:0x4d47d74bfa6240a?sa=X&ved=1t:8290&ictx=111"
              showButton={true}
              url="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761abcadb9a683:0xd6181630c7795859?sa=X&ved=1t:8290&ictx=111"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <ul className={`row ${style.addressHolder}`}>
          <li className="col-sm-3">
            <Address
              title="Panzers"
              address="110 Holand Park Ave, London W11 4UA"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760fe658ef9c0f:0x4d47d74bfa6240a?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.lidgates.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Panzers"
              address="13-19 Circus Rd, London NW8 6PB"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761abcadb9a683:0xd6181630c7795859?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.panzers.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Supermarket of Dreams"
              address="126 Holland Park Ave, London W11 4UE"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760fbf9b6a7681:0x9053e1ad59e96800?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.supermarketofdreams.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Notting Hill Fish & Meat Shop"
              address="287-289 Westbourne Grove, London W11 2QA"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760f3e304e47b5:0xd994a5c908e16475?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.nottinghillfishandmeat.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Newington Greens"
              address="109 Newington Green Rd, London N1 4QY"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761c846be02b79:0xb669f8f67e66129b?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.newingtongreens.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Clifton Greens"
              address="16 Clifton Rd, London W9 1SS"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761aa58215f927:0x8fe336777167137a?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.cliftongreens.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Hampstead Butcher & Providore"
              address="56 Rosslyn Hill, London NW3 1ND"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761a89b2c3f279:0xab4e6f48d8e28343?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.hampsteadbutcher.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Provenance Village Butcher"
              address="33 Kensington Park Rd, London W11 2EU"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761a89b2c3f279:0xab4e6f48d8e28343?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.provenancevillagebutcher.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Finchley Nurseries"
              address="Burtonhole Ln, London NW7 1AS"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x487617158d698053:0x444dae67eaf708dd?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.finchleynurseries.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="The Good Plot"
              address="296 Westbourne Grove, London W11 2PS"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760fe2427d5049:0x197b1daf675f23b4?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.thegoodplot.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Battersea General Store"
              address="Battersea Power Station, Units 9 and, 10 Circus Rd W, London SW11 8EZ"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4876053d95d0af85:0x9534c22629fd4a8?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.batterseageneralstore.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Londis N16"
              address="76 Fountayne Rd, London N16 7DT"
              addressLink="https://maps.app.goo.gl/ZaS1CgTFurBy6e6DA"
              showButton={false}
              url="www.londisn16.com"
            />
          </li>
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
          <li className={`col-md-4 ${style.imageHolder}`}>
            <img
              src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/norfolk-1.jpg"
              alt=""
            />
          </li>
          <li className={`col-md-4 ${style.imageHolder}`}>
            <img
              src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/norfolk-2.jpg"
              alt=""
            />
          </li>
          <li className={`col-md-4 ${style.imageHolder}`}>
            <img
              src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/norfolk-3.jpg"
              alt=""
            />
          </li>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} className={style.addressHol}>
            <Address
              title="Jarrolds Food Hall"
              address="1, 11 London St, Norwich NR2 1JF"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48760fe658ef9c0f:0x4d47d74bfa6240a?sa=X&ved=1t:8290&ictx=111"
              showButton={true}
              url="https://maps.app.goo.gl/Z5aEP3hXZDvmvx2CA"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <ul className={`row ${style.addressHolder}`}>
          <li className="col-sm-3">
            <Address
              title="Jarrolds Food Hall"
              address="1, 11 London St, Norfolk NR2 1JF"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d9e32f428ad8a1:0x79be73e3b6a89c0e?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.jarroldsfoodhall.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Earlham Rd Greengrocers"
              address="13-19 Circus Rd, London NW8 6PB"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761abcadb9a683:0xd6181630c7795859?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.earlhamrdgreengrocers.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Hotblack Stores"
              address="2-4, Earlham House, Shop, Norwich NR2 3PD"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d9e1d62eff39cd:0x50b311b8701edb1a?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.hotblackstores.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Baker and Larner"
              address="8 Market Pl, Holt NR25 6BW"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d76f2eb8059279:0x810259f608c80f2a?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.bakerandlarner.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="AG Meale"
              address="Wayford Nurseries, Stalham, Norwich NR12 9LJ"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d756b1ffc7e733:0x65025aa5995b3ee9?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.agmeale.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="White’s Butcher"
              address="16 Red Lion St, Aylsham, Norwich NR11 6ER"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d75c310878f16f:0x660f76fb2a9c6870?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.whitesbutcher.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="J. Jones Butcher"
              address="24 Broad St, Whittlesey, Peterborough PE7 1HA"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4877fb16dc3a86c9:0x64fa031c6cc02cb9?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.jonesbutcher.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Robertson’s Butcher"
              address="Market Pl, Reepham, Norwich NR10 4JJ"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d76141f107b8cf:0x762ed921cca2b3ff?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.robertsonsbutcher.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Green Pastures"
              address="Mill Rd, Bergh Apton, Norwich NR15 1BQ"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d9fad801cf9857:0xf7e56561324d4bd8?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.greenpastures.com"
            />
          </li>
          <li className="col-sm-3">
            <Address
              title="Algy’s Farm Shop"
              address="Billingford Rd, Dereham NR20 5PW"
              addressLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47d7634c8768bd15:0x860e75c6e15f144e?sa=X&ved=1t:8290&ictx=111"
              showButton={false}
              url="www.algys.com"
            />
          </li>
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
            <Row style={{ alignItems: "center" }}>
              <div className="col-md-3">
                <Address
                  title="Copas Farm Shop"
                  address="Off Long Ln., Cookham, Maidenhead SL6 9RF"
                  addressLink="www.copasfarm.com"
                  showButton={false}
                  url="www.copasfarm.com"
                />
              </div>
              <div className="col-md-3">
                <Address
                  title="Todelli"
                  address="Online"
                  addressLink="www.todelli.com"
                  showButton={false}
                  url="www.todelli.com"
                />
              </div>
              <Col md={6}>
                <figure>
                  <img
                    src="https://wholesum-wp-uploads.s3.amazonaws.com/uploads/2024/10/Frame-653-1.png"
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

const Address = ({
  title,
  address,
  addressLink,
  showButton,
  url,
}: {
  title: string;
  address: string;
  addressLink: string;
  showButton: boolean;
  url: string;
}) => (
  <div className={style.ad}>
    <h3>{title}</h3>
    {!showButton ? (
      <a href={addressLink} target="_blank">
        {address}
      </a>
    ) : (
      <p>{address}</p>
    )}
    {showButton ? (
      <Link to={url}>
        <Button type="submit" icon="icon-arrow-right">
          View on map
        </Button>
      </Link>
    ) : (
      <a href={url} target="_blank">
        {url}
      </a>
    )}
  </div>
);
