import { edited_aim_bg, how_bg } from "../../assets";
import { Navbar2 as Navbar } from "..";
// import { Footer, Heading1, Navbar2 as Navbar } from "";
import styles from "../../../styles/MHome.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Card = ({ title, subTitle, desc, imgUrl, reversed, animRef }) => {
  const delayTime = 1;
  const dur = 2;
  let shouldPlayCount = 1;
  let anim;
  function repeatAnim() {
    gsap
      .from(animRef, {
        marginLeft: `-100%`,
        duration: dur,

        onComplete: repeatAnim,
        // delay: 5,
      })
      .delay(delayTime);
  }

  useEffect(() => {
    // console.log("in use effect");

    shouldPlayCount += 1;
    if (shouldPlayCount == 2) {
      anim = gsap
        .from(animRef, {
          marginTop: `-100%`,
          duration: dur,
          onComplete: repeatAnim, //temp
          // onComplete: () => {
          //   counter++;
          //   console.log(counter);
          // },
          // delay: 5,
        })
        .delay(delayTime)
        .pause();
      // .pause();
      // .delay(delayTime);
    }

    // anim.repeat(5);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        // height: "100%",
        width: "100vw", //absolute value
        // justifyContent: "center",
      }}
    >
      <div
        ref={animRef}
        className="dropShadow"
        style={{
          color: "white",
          top: "33vh",
          // left: "10%",
          // right: "10%",
          // margin: "10%",
          margin: 0,
          padding: "0 10%",
          // height: "100vh",
          // objectFit: "cover",
          // width: "100%",
          position: "absolute",
          zIndex: "-24",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: reversed ? "flex-end" : "flex-start",
          justifyContent: reversed ? "flex-end" : "flex-start",
        }}
      >
        <h1
          className="h1Text"
          style={{
            color: "white",
            textAlign: reversed ? "right" : "left",
            padding: 0,
            margin: 0,
            paddingTop: "97px",
            fontFamily: "Open sans",
            fontWeight: 600,
          }}
        >
          {title}
        </h1>
        <p
          className={styles.pText}
          style={{
            color: "white",
            textAlign: reversed ? "right" : "left",
            // width: "30%",
            lineHeight: "2.2rem",
            padding: 0,
            margin: 0,
          }}
        >
          {subTitle}
        </p>
        <p
          className="pTextSmall"
          style={{
            color: "white",
            textAlign: reversed ? "right" : "left",
            width: "30%",
            lineHeight: "2.2rem",
            padding: 0,
            margin: 0,
            fontWeight: "normal",
          }}
        >
          {desc}
        </p>
      </div>
      <img
        // width={"100%"}

        style={{
          // display: "flex",
          // height: "100vh",
          objectFit: "cover",
          height: "100vh",
          width: "100%",
          // height: "100%",
          // width: "100%",
          position: "absolute",
          zIndex: "-25",
        }}
        src={imgUrl.src}
        alt=""
      />
    </div>
    // <div
    //   style={{
    //     // zIndex: "-25",
    //     display: "flex",
    //     height: "100vh",
    //     width: "100%",
    //     margin: "0",
    //     padding: "0",
    //     // justifyContent: "flex-end",
    //   }}
    // >
    //   <div
    //     className="dropShadow"
    //     style={{
    //       color: "white",
    //       // top: "33vh",
    //       // left: "10%",
    //       // right: "10%",
    //       // margin: "10%",
    //       margin: 0,
    //       padding: "0 10%",
    //       // height: "100vh",
    //       // objectFit: "cover",
    //       // width: "100%",
    //       position: "absolute",
    //       zIndex: "-24",
    //       display: "flex",
    //       width: "100%",
    //       flexDirection: "column",
    //       alignItems: reversed ? "flex-end" : "flex-start",
    //       justifyContent: reversed ? "flex-end" : "flex-start",
    //     }}
    //   >
    //     <h1
    //       className="h1Text"
    //       style={{
    //         color: "white",
    //         textAlign: reversed ? "right" : "left",
    //         padding: 0,
    //         margin: 0,
    //         paddingTop: "97px",
    //         fontFamily: "Open sans",
    //         fontWeight: 600,
    //       }}
    //     >
    //       {title}
    //     </h1>
    //     <p
    //       className={styles.pText}
    //       style={{
    //         color: "white",
    //         textAlign: reversed ? "right" : "left",
    //         // width: "30%",
    //         lineHeight: "2.2rem",
    //         padding: 0,
    //         margin: 0,
    //       }}
    //     >
    //       {subTitle}
    //     </p>
    //     <p
    //       className="pTextSmall"
    //       style={{
    //         color: "white",
    //         textAlign: reversed ? "right" : "left",
    //         width: "30%",
    //         lineHeight: "2.2rem",
    //         padding: 0,
    //         margin: 0,
    //         fontWeight: "normal",
    //       }}
    //     >
    //       {desc}
    //     </p>
    //   </div>
    //   <img
    //     style={{
    //       height: "100vh",
    //       objectFit: "cover",
    //       width: "100%",
    //       position: "absolute",
    //       zIndex: "-25",
    //     }}
    //     src={imgUrl.src}
    //     alt=""
    //   />
    // </div>
  );
};

const MHome = () => {
  const titleRef = useRef(null);
  let marginLeftVal = 100;
  let marginLeftConst = marginLeftVal;
  const delayTime = 1;
  const dur = 2;
  let counter = 1;
  let anim;
  let shouldPlayCount = 0;
  let numOfImages = 1;
  function repeatAnim() {
    if (counter > numOfImages) {
      // document.querySelector("#toAnimateHome").style["flex-direction"] = "row-reverse";
      if (document.querySelector("#toAnimateHome") == null) {
        return;
      }
      document.querySelector("#toAnimateHome").style["margin-left"] = "0px";

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
      .to("#toAnimateHome", {
        marginLeft: `-${marginLeftVal}%`,
        duration: dur,

        onComplete: repeatAnim,
        // delay: 5,
      })
      .delay(delayTime);
  }
  useEffect(() => {
    // console.log("in use effect");
    shouldPlayCount += 1;
    if (shouldPlayCount == 2) {
      anim = gsap
        .to("#toAnimateHome", {
          marginLeft: `-${marginLeftVal}%`,
          duration: dur,
          onComplete: repeatAnim, //temp
          // onComplete: () => {
          //   counter++;
          //   console.log(counter);
          // },
          // delay: 5,
        })
        .delay(delayTime);
      // .pause();
      // .delay(delayTime);
    }

    // anim.repeat(5);
  }, []);
  return (
    <div>
      <Navbar whichActive={"results"} />
      <div
        ref={titleRef}
        id="toAnimateHome"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "max-content",
          height: "100%",
          // height: "100%",
        }}
        // style={{
        //   // position: "absolute",
        //   height: "100vh",
        //   // zIndex: -12,
        //   // marginLeft: "-3rem", // animate this property
        //   display: "flex",
        //   flexDirection: "row",
        //   width: "max-content",
        //   // overflowX: "scroll",
        //   // overflowY: "hidden",
        //   // msOverflowStyle: "none",
        //   // scrollbarWidth: "none",
        // }}
      >
        <Card
          // animRef={useRef(null)}
          title={"OUR MISSION"}
          subTitle={"Is To Unlock Hidden Potential"}
          desc={
            "We believe that every student has hidden potential. We strive to unlock this potential."
          }
          imgUrl={edited_aim_bg}
        />
        <Card
          title={"BETTER EDUCATION "}
          subTitle={"For Better Future "}
          desc={
            "We give high quality education so that the future of your child is bright and secure."
          }
          reversed
          imgUrl={how_bg}
        />

        <Card
          title={"OUR MISSION"}
          subTitle={"Is To Unlock Hidden Potential"}
          desc={
            "We believe that every student has hidden potential. We strive to unlock this potential."
          }
          imgUrl={edited_aim_bg}
        />
      </div>
    </div>
  );
};

export default MHome;
