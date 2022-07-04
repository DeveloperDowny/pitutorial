import {
  edited_aim_bg,
  how_bg,
  how_we_teach,
  courses,
  results_1,
  our_services,
} from "../../assets";

import { Navbar2 as Navbar, Footer, Heading1 } from "..";

import styles from "../../../styles/MHome.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const delayTime = 4;
const dur = 1.5;
let anim1;
let anim2;
let anim3;
let anim4;
let anim5;
let anim6;
let anim7;
let anim8;

//  useEffect(() => {
//    const handleWindowClick = () => setAlert(false);
//    if (alert) {
//      window.addEventListener("click", handleWindowClick);
//    } else {
//      window.removeEventListener("click", handleWindowClick);
//    }
//    return () => window.removeEventListener("click", handleWindowClick);
//  }, []);

const Card = ({ title, subTitle, desc, imgUrl, reversed, animRef }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
      }}
    >
      <div
        ref={animRef}
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
            paddingTop: "8.5vh",
            // paddingTop: "97px",
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
  function AnimateThis(noOfImg, id) {
    const delayTime = 2;
    const dur = 0.5;
    let marginLeftVal = 100;
    let marginLeftConst = marginLeftVal;
    let counter = 1;
    let anim;
    let shouldPlayCount = 0;
    let numOfImages = noOfImg - 1;
    function repeatAnimG() {
      // console.log(document.querySelector("#toAnimateHome").style["margin-left"]);
      if (counter > numOfImages) {
        if (document.querySelector(id) == null) {
          return;
        }
        document.querySelector(id).style["margin-left"] = "0px";

        marginLeftVal = 0;
        counter = 0;
      }
      marginLeftVal += marginLeftConst;
      ++counter;
      // console.log(marginLeftVal);
      // console.log(++counter);
      anim1 = gsap
        .to(id, {
          marginLeft: `-${marginLeftVal}%`,
          duration: dur,
          onComplete: repeatAnimG,
        })
        .delay(delayTime);
    }
    useEffect(() => {
      shouldPlayCount += 1;
      if (shouldPlayCount == 2) {
        anim2 = gsap
          .to(id, {
            marginLeft: `-${marginLeftVal}%`,
            duration: dur,
            onComplete: repeatAnimG,
          })
          .delay(delayTime);
      }
      return () => {
        // if (anim1 != null) {
        //   console.log("in return");
        //   anim1.kill();
        //   anim2.kill();
        //   // anim3.kill();
        //   // anim4.kill();
        //   // anim5.kill();
        //   // anim6.kill();
        //   // anim7.kill();
        //   // anim8.kill();
        // }
      };
    }, []);
  }

  AnimateThis(3, "#toAnimateHomeHighlights");

  const titleRef = useRef(null);
  const animRef1 = useRef(null);
  const animRef2 = useRef(null);
  const animRef3 = useRef(null);
  let marginLeftVal = 100;
  let marginLeftConst = marginLeftVal;

  let counter = 1;
  let shouldPlayCount = 0;
  let numOfImages = 1;
  function repeatAnim() {
    // console.log(document.querySelector("#toAnimateHome").style["margin-left"]);
    // if (gsap) {
    //   return;
    // }
    anim3 = gsap.fromTo(
      [animRef1.current, animRef2.current, animRef3.current],

      { opacity: 0 },
      {
        opacity: 1,
        duration: "0.5",
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
    ++counter;
    // console.log(marginLeftVal);
    // console.log(++counter);
    anim4 = gsap
      .to("#toAnimateHome", {
        marginLeft: `-${marginLeftVal}%`,
        duration: dur,
        onStart: () => {
          // if (gsap) {
          //   return;
          // }
          anim5 = gsap.fromTo(
            [animRef1.current, animRef2.current, animRef3.current],

            { opacity: 1 },
            {
              opacity: 0,
              duration: "0",
              stagger: "0.5",
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
      anim6 = gsap.fromTo(
        [animRef1.current, animRef2.current, animRef3.current],

        { opacity: 0 },
        {
          opacity: 1,
          duration: "0.5",
          // stagger: "0.1",
        }
      );

      anim7 = gsap
        .to("#toAnimateHome", {
          marginLeft: `-${marginLeftVal}%`,
          duration: dur,
          onComplete: repeatAnim,
          onStart: () => {
            // if (gsap) {
            //   return;
            // }
            anim8 = gsap.fromTo(
              [animRef1.current, animRef2.current, animRef3.current],

              { opacity: 1 },
              {
                opacity: 0,
                duration: "0",
              }
            );
          },
        })
        .delay(delayTime);

      return () => {
        const animArr = [
          anim1,
          anim2,
          anim3,
          anim4,
          anim5,
          anim6,
          anim7,
          anim8,
        ];

        for (const i of animArr) {
          if (i != null) {
            i.kill();
          }
        }

        // if (anim3 != null) {
        //   console.log("in return 2");

        //   anim3.kill();
        //   anim4.kill();
        //   anim5.kill();
        //   anim6.kill();
        //   anim7.kill();
        //   anim8.kill();
        // }
      };
    }
  }, []);
  return (
    <div>
      <Navbar whichActive={"none"} />
      <div
        className=""
        style={{
          // width: "100vw",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <div
          ref={titleRef}
          id="toAnimateHome" //come back here
          style={{
            display: "flex",
            flexDirection: "row",
            width: "max-content",
            height: "100%",
            zIndex: 1,
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
        <div className="flexCenter offWhiteBg">
          <div
            className="mainContainer "
            style={{
              // width: "100%",
              // height: "100vh",
              marginTop: "100vh",
              // background: "black",
            }}
          >
            <Heading1 title={"Highlights"} />
            {/* <img
              style={{ objectFit: "contain", height: "50vh" }}
              // height={"0%"}
              src={our_services.src}
            /> */}
            <div
              className="flexCenter roundCorner dropShadow"
              style={{
                overflow: "hidden",
                marginBottom: "3rem",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                // width: "100vw",
              }}
              // style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <div
                // ref={titleRef}
                id="toAnimateHomeHighlights"
                className={`${styles.highlights_container} `}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "max-content",
                  // height: "100%",
                  height: "calc(100vh - 200px)",
                  zIndex: 1,
                }}
              >
                <img src={results_1.src} />
                <img src={courses.src} />
                <img src={how_we_teach.src} />
                <img src={results_1.src} />

                {/* <img src={JEE.src} /> */}
                {/* <img src={JEE.src} /> */}
                {/* <img src={JEE.src} /> */}
              </div>
              {/* <div
                style={{
                  width: "50%",
                  // overflow: "hidden",
                  display: "flex",
                }}
              ></div>
              <div style={{ width: "50%", background: "white" }}>tes</div> */}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {/* <div className="flexCenter">
        <div
          className="mainContainer flexCenter"
          style={{
            marginTop: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{ width: "100%", height: "100vh", background: "black" }}
            >
              hbgyg
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MHome;
