import React from "react";
import { pit_logo, pit_logo_bl } from "../../assets";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="flexCenter"
      style={{ width: "100%", background: "white", padding: "0 1rem" }}
    >
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
          {/* <Link href="/contact-us"> todo

           </Link> */}
          <Link href="/results">
            <a className={styles.footer__link}>Results</a>
          </Link>
          <Link href="/">
            <a className={styles.footer__link}>Admissions</a>
          </Link>
        </div>

        <div
          className="flexCenter"
          style={{
            alignItems: "flex-start",
            // width: "100%",
          }}
        >
          <p className={styles.pText}>Courses</p>
          <Link href="/courses">
            <a className={styles.footer__link}>{"JEE"}</a>
          </Link>
          <Link href="/courses">
            <a className={styles.footer__link}>{"NEET"}</a>
          </Link>
          <Link href="/courses">
            <a className={styles.footer__link}>{"CET"}</a>
          </Link>
          <Link href="/courses">
            <a className={styles.footer__link}>{"CBSE 11th & 12th Science"}</a>
          </Link>
          <Link href="/courses">
            <a className={styles.footer__link}>{"CBSE 8th to 10th"}</a>
          </Link>
          <Link href="/courses">
            <a className={styles.footer__link}>{"Olympiad Exams"}</a>
          </Link>
        </div>
        <div
          className="flexCenter"
          style={{
            alignItems: "flex-start",
            // width: "100%",
          }}
        >
          <p className={styles.pText}>Contact Us</p>
          <Link href="/contact-us">
            <a className={styles.footer__link}>Virar Branch</a>
          </Link>
          <Link href="/contact-us">
            <a className={styles.footer__link}>Vasai Branch</a>
          </Link>
          <Link
            href={`mailto:vedantpanchal12345@gmail.com?subject=Inquiry for Pi TUTORIAL`}
          >
            <a className={styles.footer__link}>
              {" Mail us at emailAdd@gmail.com"}
            </a>
          </Link>
          <Link href="tel:+918975803664">
            <a className={styles.footer__link}>Call us at +91 782 1865 157</a>
          </Link>
        </div>
      </div>

      <div
        className="divider"
        style={{
          // width: "80%",
          // background: "black", //alternate black
          height: "2px",
          margin: "1rem",
        }}
      ></div>
      <div
        className="flexCenter footer__textContainer"
        style={{
          flexDirection: "row",
          // justifyContent: "flex-end",
          // justifyContent: "space-between",
          width: "80%",
          marginBottom: "1rem",
        }}
      >
        <p
          style={{
            // margin: "0 3rem",
            width: "100%",
            fontSize: "xx-small",
          }}
        >
          © Copyright 2022, Pi TUTORIAL. All rights reserved.
        </p>
        <img
          className="footer__greyLogoImg"
          src={pit_logo_bl.src}
          alt=""
          style={{
            objectFit: "contain",
            // margin: "0 3rem",
            // filter: "grayscale(1)",
          }}
        />
        <p
          style={{
            //  margin: "0 3rem",
            width: "100%",
            fontSize: "xx-small",
            textAlign: "right",
          }}
        >
          Website built by{" "}
          <Link href="https://www.linkedin.com/in/vedantpanchal/">
            <a
              className={styles.footer__link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "xx-small",
              }}
            >
              <u>Vedant Panchal</u>
            </a>
          </Link>
        </p>
        {/* <p>Copy rig</p> */}
      </div>
    </div>
  );
};

export default Footer;
