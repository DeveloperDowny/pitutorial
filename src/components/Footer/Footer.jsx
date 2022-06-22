import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="flexCenter" style={{ width: "100%", background: "white" }}>
      <div
        className="footer__container flexCenter"
        style={{
          // background: "linear-gradient(90deg, #F29800, #E8C301, #FDE116)",
          background: "white",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          paddingTop: "3rem",
          width: "100%",
        }}
      >
        <div
          className="flexCenter"
          style={{
            alignItems: "flex-start",
          }}
        >
          <p className="pText">Title</p>
          <p>Link</p> <p>Link</p> <p>Link</p> <p>Link</p>
        </div>
        <div
          className="flexCenter"
          style={{
            alignItems: "flex-start",
          }}
        >
          <p className="pText">Title</p>
          <p>Link</p> <p>Link</p> <p>Link</p> <p>Link</p>
        </div>

        <div
          className="flexCenter"
          style={{
            alignItems: "flex-start",
          }}
        >
          <p className="pText">Title</p>
          <p>Link</p> <p>Link</p> <p>Link</p> <p>Link</p>
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
          justifyContent: "space-between",
          width: "80%",
          marginBottom: "3rem",
        }}
      >
        <p>© Copyright 2022, Pi TUTORIAL. All rights reserved</p>
        <p style={{ marginLeft: "1rem" }}>
          Websie built by{" "}
          <a href="">
            <u>Vedant Panchal</u>
          </a>
        </p>
        {/* <p>Copy rig</p> */}
      </div>
    </div>
  );
};

export default Footer;
