import React from "react";
import { pit_logo, pit_logo_bl } from "../../assets";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="flexCenter" style={{ width: "100%", background: "white" }}>
      <div
        className="footer__container flexCenter"
        style={{
          // background: "linear-gradient(90deg, #F29800, #E8C301, #FDE116)",
          background: "white",
          // width: "80%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-start",
          width: "100%",
          paddingTop: "1rem",
        }}
      >
        <div
          className="flexCenter"
          style={{
            alignItems: "flex-start",
            // width: "100%",
          }}
        >
          <p className={styles.pText}>Miscellaneous</p>
          <a className={styles.footer__link} href="/results">
            Results
          </a>
          <a className={styles.footer__link} href="/href">
            Admissions
          </a>
        </div>

        <div
          className="flexCenter"
          style={{
            alignItems: "flex-start",
            // width: "100%",
          }}
        >
          <p className={styles.pText}>Courses</p>
          <a className={styles.footer__link} href="/courses">
            {"JEE"}
          </a>
          <a className={styles.footer__link} href="/courses">
            {"NEET"}
          </a>
          <a className={styles.footer__link} href="/courses">
            {"CET"}
          </a>
          <a className={styles.footer__link} href="/courses">
            {"CBSE 11th & 12th Science"}
          </a>
          <a className={styles.footer__link} href="/courses">
            {"CBSE 8th to 10th"}
          </a>
          <a className={styles.footer__link} href="/courses">
            {"Olympiad Exams"}
          </a>
        </div>
        <div
          className="flexCenter"
          style={{
            alignItems: "flex-start",
            // width: "100%",
          }}
        >
          <p className={styles.pText}>Contact Us</p>
          <a href="/contact-us">Virar Branch</a>
          <a href="/contact-us">Vasai Branch</a>
          <a
            href={`mailto:vedantpanchal12345@gmail.com?subject=Inquiry for Pi TUTORIAL`}
          >
            {" Mail us at emailAdd@gmail.com"}
          </a>
          <a href="tel:+918975803664">Call us at +91 782 1865 157</a>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          background: "black", //alternate black
          height: "2px",
          margin: "1rem",
        }}
      ></div>
      <div
        className="flexCenter"
        style={{
          flexDirection: "row",
          // justifyContent: "flex-end",
          // justifyContent: "space-between",
          width: "80%",
          marginBottom: "1rem",
        }}
      >
        <p style={{ margin: "0 3rem", width: "100%" }}>
          © Copyright 2022, Pi TUTORIAL. All rights reserved.
        </p>
        <img
          src={pit_logo_bl.src}
          alt=""
          width="15%"
          style={{
            objectFit: "contain",
            margin: "0 3rem",
            // filter: "grayscale(1)",
          }}
        />
        <p style={{ margin: "0 3rem", width: "100%" }}>
          Websie built by{" "}
          <a href="https://www.linkedin.com/in/vedantpanchal/" target="_blank">
            <u>Vedant Panchal</u>
          </a>
        </p>
        {/* <p>Copy rig</p> */}
      </div>
    </div>
  );
};

export default Footer;
