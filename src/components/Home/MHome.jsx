import { edited_aim_bg, how_bg } from "../../assets";
import { Navbar2 as Navbar } from "..";

import styles from "../../../styles/MHome.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const delayTime = 6;
const dur = 2;

const Card = ({ title, subTitle, desc, imgUrl, reversed, animRef }) => {
  // // const delayTime = 1;
  // // const dur = 2;
  // const dur2 = 0.5; // + dur;
  // let shouldPlayCount = 1;
  // let anim;
  // function repeatAnim() {
  //   console.log("in r");
  //   console.log(shouldPlayCount);

  //   gsap
  //     .fromTo(
  //       animRef.current,
  //       // marginTop: `-100%`,
  //       { opacity: 0 },
  //       {
  //         opacity: 1,
  //         duration: dur2,

  //         onComplete: repeatAnim,
  //       }
  //     )
  //     .delay(dur + delayTime - dur2);
  //   // .delay(delayTime);
  // }

  // useEffect(() => {
  //   shouldPlayCount += 1;
  //   if (animRef != null && shouldPlayCount == 3) {
  //     console.log("here");
  //     gsap.fromTo(
  //       animRef.current,
  //       { opacity: 0 },
  //       {
  //         opacity: 1,
  //         duration: dur2,

  //         onComplete: repeatAnim,
  //       }
  //     );
  //     // .delay(delayTime);
  //   }
  //   console.log("here");
  //   // shouldPlayCount == 2;
  //   // if (shouldPlayCount == 2) {
  //   //   anim = gsap
  //   //     .to(animRef.current, {
  //   //       opacity: 0,
  //   //       scale: 2,
  //   //       // y: "100px",
  //   //       // marginTop: `-100%`,
  //   //       // top: "0",
  //   //       duration: dur,
  //   //       onComplete: repeatAnim,
  //   //     })
  //   //     .delay(delayTime);
  //   // }
  // }, []);
  return (
    <div
      style={{
        display: "flex",

        width: "100vw",
      }}
    >
      <div
        ref={animRef}
        // ref={animRef}
        // id="thisOne"
        className="dropShadow"
        style={{
          color: "white",
          top: "33vh",
          opacity: 0,

          margin: 0,
          padding: "0 10%",

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
        style={{
          objectFit: "cover",
          height: "100vh",
          width: "100%",

          position: "absolute",
          zIndex: "-25",
        }}
        src={imgUrl.src}
        alt=""
      />
    </div>
  );
};

const MHome = () => {
  const titleRef = useRef(null);
  const animRef1 = useRef(null);
  const animRef2 = useRef(null);
  const animRef3 = useRef(null);
  let marginLeftVal = 100;
  let marginLeftConst = marginLeftVal;

  // const dur = 0.5;
  let counter = 1;
  let anim;
  let shouldPlayCount = 0;
  let numOfImages = 1;
  function repeatAnim() {
    gsap.fromTo(
      [animRef1.current, animRef2.current, animRef3.current],
      // marginTop: `-100%`,
      { opacity: 0 },
      {
        opacity: 1,
        duration: "0.5",

        // onComplete: repeatAnim,
      }
    );

    if (counter > numOfImages) {
      if (document.querySelector("#toAnimateHome") == null) {
        return;
      }
      document.querySelector("#toAnimateHome").style["margin-left"] = "0px";

      marginLeftVal = 0;
      counter = 0;
    }
    marginLeftVal += marginLeftConst;
    console.log(marginLeftVal);
    console.log(++counter);
    gsap
      .to("#toAnimateHome", {
        marginLeft: `-${marginLeftVal}%`,
        duration: dur,
        onStart: () => {
          gsap.fromTo(
            [animRef1.current, animRef2.current, animRef3.current],
            // marginTop: `-100%`,
            { opacity: 1 },
            {
              opacity: 0,
              duration: "0",
              stagger: "0.1",

              // onComplete: repeatAnim,
            }
          );
        },
        onComplete: repeatAnim,
      })
      .delay(delayTime);
  }
  useEffect(() => {
    shouldPlayCount += 1;
    if (shouldPlayCount == 2) {
      gsap.fromTo(
        [animRef1.current, animRef2.current, animRef3.current],
        // marginTop: `-100%`,
        { opacity: 0 },
        {
          opacity: 1,
          duration: "0.5",
          stagger: "0.1",

          // onComplete: repeatAnim,
        }
      );

      anim = gsap
        .to("#toAnimateHome", {
          marginLeft: `-${marginLeftVal}%`,
          duration: dur,
          onComplete: repeatAnim,
          onStart: () => {
            gsap.fromTo(
              [animRef1.current, animRef2.current, animRef3.current],
              // marginTop: `-100%`,
              { opacity: 1 },
              {
                opacity: 0,
                duration: "0",

                // onComplete: repeatAnim,
              }
            );
          },
        })
        .delay(delayTime);
      // .pause();
    }
  }, []);
  return (
    <div>
      <Navbar whichActive={"none"} />
      <div
        ref={titleRef}
        id="toAnimateHome"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "max-content",
          height: "100%",
        }}
      >
        <Card
          animRef={animRef1}
          title={"OUR MISSION"}
          subTitle={"Is To Unlock Hidden Potential"}
          desc={
            "We believe that every student has hidden potential. We strive to unlock this potential."
          }
          imgUrl={edited_aim_bg}
        />
        <Card
          animRef={animRef2}
          title={"BETTER EDUCATION "}
          subTitle={"For Better Future "}
          desc={
            "We give high quality education so that the future of your child is bright and secure."
          }
          reversed
          imgUrl={how_bg}
        />

        <Card
          animRef={animRef3}
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
