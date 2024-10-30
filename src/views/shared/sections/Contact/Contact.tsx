import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { inject, observer } from "mobx-react";

import { Container, Row, Col, Button } from "~components";
import { IContact } from "~models";
import { ContactFormStore } from "~stores";

import * as style from "./Contact.module.scss";

export interface Props {
  section: IContact;
  contactFormStore?: ContactFormStore;
}

export const Contact = inject("contactFormStore")(
  observer(({ section, contactFormStore }: Props) => {
    const { description, socialMediaLinks, contactInfo } = section;
    const { formData, setFormData, sendForm } = contactFormStore;

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      sendForm(data);
    };
    //   if (sendForm)
    // };

    const handleChange = (event) => {
      setFormData(event.target.value, event.target.name);
    };

    const handleCheckbox = (event) => {
      setFormData(event.target.checked, event.target.name);
    };

    return (
      <section data-sectionname="Contact" className={style.contact}>
        <Container>
          <Row>
            <Col md={4}>
              {description && (
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { y: "60px", opacity: 0 },
                    visible: { y: "0", opacity: 1 },
                  }}
                  className={style.description}
                >
                  {description}
                </motion.p>
              )}
              {contactInfo.address && (
                <motion.address
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { y: "60px", opacity: 0 },
                    visible: { y: "0", opacity: 1 },
                  }}
                  className={style.address}
                >
                  {contactInfo.address} <br />
                  {contactInfo.city} {contactInfo.postCode}
                  {contactInfo.email && (
                    <>
                      <br />
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className={style.linkAnimation}
                      >
                        {contactInfo.email}
                      </a>
                    </>
                  )}
                  {contactInfo.phoneNumber && (
                    <>
                      <br />
                      <a
                        href={`tel:${contactInfo.phoneNumber
                          .split(" ")
                          .filter((e) => e.trim().length)
                          .join("")}`}
                        className={style.linkAnimation}
                      >
                        {contactInfo.phoneNumber}
                      </a>
                    </>
                  )}
                </motion.address>
              )}
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { y: "60px", opacity: 0 },
                  visible: { y: "0", opacity: 1 },
                }}
                className={style.socialMedia}
              >
                {socialMediaLinks.instagram && (
                  <li>
                    <a href={socialMediaLinks.instagram} target="_blank">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                )}
                {socialMediaLinks.twitter && (
                  <li>
                    <a href={socialMediaLinks.twitter} target="_blank">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                )}
                {socialMediaLinks.linkedin && (
                  <li>
                    <a href={socialMediaLinks.linkedin} target="_blank">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                )}
              </motion.ul>
            </Col>
            <Col md={7} className={"offset-md-1"}>
              <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.formContent}>
                  <div className={style.input1}>
                    <input
                      id="name"
                      name="name"
                      placeholder=""
                      value={formData.name}
                      onChange={handleChange}
                      className={`${formData.name ? style.hasFilled : ""} ${
                        errors.name ? style.hasError : ""
                      }`}
                      aria-invalid={errors.name ? "true" : "false"}
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    <label htmlFor="name">Name</label>
                    {errors.name && <span>{errors.name.message}</span>}
                  </div>
                  <div className={style.input1}>
                    <input
                      id="email"
                      name="email"
                      placeholder=""
                      value={formData.email}
                      onChange={handleChange}
                      className={`${formData.email ? style.hasFilled : ""} ${
                        errors.email ? style.hasError : ""
                      }`}
                      aria-invalid={errors.email ? "true" : "false"}
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Entered value does not match email format!",
                        },
                      })}
                    />
                    <label htmlFor="email">Email</label>
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                  <div className={style.textarea1}>
                    <label htmlFor="textarea">Message</label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      placeholder=""
                      value={formData.textarea}
                      onChange={handleChange}
                      className={`${errors.textarea ? style.hasError : ""}`}
                      aria-invalid={errors.textarea ? "true" : "false"}
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                    ></textarea>
                    {errors.textarea && <span>{errors.textarea.message}</span>}
                  </div>
                </div>
                <div className={style.formFooter}>
                  <div className={style.checkbox1}>
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      checked={formData.terms}
                      onChange={handleCheckbox}
                    />
                    <label htmlFor="terms">
                      I agree with the{" "}
                      <Link to="/privacy-policy" className={style.linkAnimation}>
                        terms and conditions.
                      </Link>
                    </label>
                  </div>
                  <Button type="submit" icon="icon-arrow-right">
                    Send Message
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
          <Row>
            <Col>
              {contactInfo.address ? (
                <address className={`${style.address} ${style.showInMobile}`}>
                  {contactInfo.address} <br />
                  {contactInfo.city} {contactInfo.postCode}
                  {contactInfo.email ? (
                    <>
                      {" "}
                      <br />
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className={style.linkAnimation}
                      >
                        {contactInfo.email}
                      </a>
                    </>
                  ) : null}
                  {contactInfo.phoneNumber ? (
                    <>
                      <br />
                      <a
                        href={`tel:${contactInfo.phoneNumber
                          .split(" ")
                          .filter((e) => e.trim().length)
                          .join("")}`}
                        className={style.linkAnimation}
                      >
                        {contactInfo.phoneNumber}
                      </a>
                    </>
                  ) : null}
                </address>
              ) : null}
              <ul className={`${style.socialMedia} ${style.showInMobile}`}>
                {socialMediaLinks.instagram ? (
                  <li>
                    <a href={socialMediaLinks.instagram} target="_blank">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                ) : null}
                {socialMediaLinks.twitter ? (
                  <li>
                    <a href={socialMediaLinks.twitter} target="_blank">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                ) : null}
                {socialMediaLinks.linkedin ? (
                  <li>
                    <a href={socialMediaLinks.linkedin} target="_blank">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                ) : null}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  })
);
