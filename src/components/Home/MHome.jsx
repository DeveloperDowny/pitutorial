import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { Navbar, Navbar2 } from "../src/components";
// import { Footer, Heading1, Navbar2 as Navbar } from "../src/components";
import gsap from "gsap";
import { useRef, useEffect } from "react";
// import styles from "../../styles/MHome.module.css";
import styles from "../../../styles/MHome.module.css";

import {
  Heading1,
  Navbar2 as Navbar,
  CourseCard,
  HWTCard,
  LocationCard,
  Footer,
} from "../index";
import { aim_bg } from "../../assets";

const MHome = () => {
  const resImg = aim_bg;
  const titleRef = useRef(null);
  let marginLeftVal = 100;
  let marginLeftConst = marginLeftVal;
  const delayTime = 1;
  const dur = 2;
  let counter = 1;
  let anim;
  let shouldPlayCount = 0;
  let numOfImages = 3;
  function repeatAnim() {
    if (counter > numOfImages) {
      // document.querySelector("#toAnimate").style["flex-direction"] = "row-reverse";
      if (document.querySelector("#toAnimate") == null) {
        return;
      }
      document.querySelector("#toAnimate").style["margin-left"] = "0px";

      marginLeftVal = 0;
      counter = 0;
      // return;
      // ("this is kind of working. You would need to have last image same as the first. Then programmatically reset every marginLeftVal etc to run smoothly")
      // return;
    }
    marginLeftVal += marginLeftConst;
    console.log(marginLeftVal);
    console.log(++counter);
    gsap
      .to("#toAnimate", {
        marginLeft: `-${marginLeftVal}%`,
        duration: dur,

        onComplete: repeatAnim,
        // delay: 5,
      })
      .delay(delayTime)
      .pause();
  }
  useEffect(() => {
    // console.log("in use effect");
    shouldPlayCount += 1;
    if (shouldPlayCount == 2) {
      anim = gsap
        .to("#toAnimate", {
          marginLeft: `-${marginLeftVal}%`,
          duration: dur,
          onComplete: repeatAnim,
          // onComplete: () => {
          //   counter++;
          //   console.log(counter);
          // },
          // delay: 5,
        })
        .delay(delayTime)
        .pause();
      // .delay(delayTime);
    }

    // anim.repeat(5);
  }, []);

  return (
    <div>
      <Navbar whichActive={"none"} />
      <div
        ref={titleRef}
        id="toAnimate"
        style={{
          // position: "absolute",
          // marginLeft: "-3rem", // animate this property
          display: "flex",
          flexDirection: "row",
          width: "max-content",
          height: "100%",
          // overflowX: "scroll",
          // overflowY: "hidden",
          // msOverflowStyle: "none",
          // scrollbarWidth: "none",
        }}
      >
        {/* noOfImages = effective images-1 */}
        <div
          className="final"
          style={{
            // width: "865px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "contain",
              position: "absolute",
              zIndex: 1,
            }}
            height={"100vh"}
            src={resImg.src}
            alt=""
          />
          <img
            className={styles.bgImg}
            width="865px"
            src={resImg.src}
            alt=""
            style={{
              objectFit: "cover",
              position: "absolute",
              position: "top",
              zIndex: -11,
              filter: "blur(5px)",
            }}
          />
        </div>
        {/* above is effective images. Below image should be same as the first one */}
      </div>
      <div className={`offWhiteBg superContainer`}>
        <div className="mainContainer">
          <div>
            <Heading1 title={"Highlights"} />
          </div>
          <div className="flexCenter" style={{ flexDirection: "row" }}>
            {/* addmission open image at the bottom */}
            {/* call us now */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MHome;
