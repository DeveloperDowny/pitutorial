import { Footer, Heading1, Navbar2 as Navbar } from "../src/components";

import {
  JEE,
  NEET,
  r1,
  r2,
  r3,
  result_f,
  r4,
  vp_result,
  confetti_bg,
} from "../src/assets";
import styles from "../styles/results.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const animArr = [];

const ResImgFinal = ({ resImg }) => {
  return (
    <div
      className="final ResImgFinal"
      style={{
        // width: "865px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <img
        style={{
          objectFit: "contain",
          position: "absolute",
          zIndex: 1,
        }}
        height={"100%"}
        src={resImg.src}
        alt=""
      /> */}

      <img
        style={{
          objectFit: "contain",
          position: "absolute",
          zIndex: 1,
          paddingTop: "2.5rem",
        }}
        height={"100%"}
        width={"100%"}
        src={resImg.src}
        alt=""
      />

      <img
        // className={styles.bgImg}
        height="100%"
        // width="865px"

        src={confetti_bg.src}
        alt=""
        style={{
          objectFit: "cover",
          position: "absolute",
          position: "top",
          zIndex: -11,
          // filter: "blur(5px)",
        }}
      />
      {/* <img
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
      /> */}
    </div>
  );
};

const Card = ({ title }) => {
  return (
    <div className={`roundCorner dropShadow ${styles.courseCard}`}>
      <div
        className={`flexCenter ${styles.courseCard__container} results__cardContainer`}
        // style={{
        //   height: "100%",
        // }}
      >
        <p
          className="pTextSmall"
          // style={{
          //   // fontSize: "1rem",
          //   // width: "140px",
          // }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

const Results = () => {
  const titleRef = useRef(null);
  let marginLeftVal = 100;
  let marginLeftConst = marginLeftVal;
  const delayTime = 1;
  const dur = 2;
  let counter = 1;
  let anim;
  let shouldPlayCount = -1; // while testing -1. // in deployment 0
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
    const anim1 = gsap
      .to("#toAnimate", {
        marginLeft: `-${marginLeftVal}%`,
        duration: dur,

        onComplete: repeatAnim,
        // delay: 5,
      })
      .delay(delayTime);

    animArr.push(anim1);
  }
  useEffect(() => {
    // console.log("in use effect");
    shouldPlayCount += 1;
    if (shouldPlayCount == 1) {
      const anim2 = gsap
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
        .delay(delayTime);
      animArr.push(anim2);
      // .delay(delayTime);
    }

    return () => {
      for (const i of animArr) {
        if (i != null) {
          i.kill();
        }
      }
    };

    // anim.repeat(5);
  }, []);

  // let anim = gsap.to(useRef, {
  //   marginLeft: "-3rem",
  //   opacity: "0",
  //   duration: 0.5,
  // });

  // console.log(anim.delay);
  return (
    <div>
      <Navbar whichActive={"results"} />
      <div className={`offWhiteBg superContainer`}>
        <div className="mainContainer">
          <div
            className="dropShadow roundCorner"
            style={{
              width: "100%",
              marginTop: "4rem",

              height: "189px",
            }}
          >
            <div
              className="flexCenter results__wellDoneContainer"
              style={{
                zIndex: "11",
                height: "100%",
                paddingLeft: "1rem", //check what happens
                position: "absolute",
                top: "0px",
                alignItems: "flex-start",
                justifyContent: "space-around",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <p className="h1Text" style={{ color: "white", margin: 0 }}>
                Well Done Students!
              </p>
              <p
                className="pTextSmall"
                style={{
                  width: "80%",
                  color: "white",
                  textAlign: "left",
                  fontWeight: "normal",
                  margin: "0",
                }}
              >
                Pi Tutorial has been delivering wonderful results since 2016. It
                has been possible only because of our committed teachers and
                determined students.
              </p>
            </div>

            <img
              className="roundCorner"
              src={result_f.src}
              style={{
                objectFit: "cover",
                width: "100%",
                // filter: "blur(5px)",
                zIndex: "-20",
                // scale: "1.6",
                // filter: "blur(5px)",
                // zIndex: "-10",

                height: "100%",
              }}
              alt=""
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <Heading1 title={"Results"} />
          </div>

          <div
            className="flexCenter animated_results__container"
            style={{
              // width: "865px",
              height: "100%",
              zIndex: "11",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                marginBottom: "-2rem",
              }}
            >
              <Card title="100% Results" />
              <Card title="Admission in Reputed Colleges" />
              <Card title="Top Rankers" />
            </div>
            <div
              className="flexCenter roundCorner dropShadow results__toAnimateContainer"
              style={{
                // width: "865px",
                zIndex: "11",
                background: "white",
                marginBottom: "3rem",
                flexDirection: "row",
                overflow: "hidden",
                // overflowX: "scroll",
                // scrollbarWidth: "none",
                // scrollbarGutter: "none",

                //  -ms-overfanimlow-style: "none",

                height: "60vh",
                zIndex: -1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <div
                ref={titleRef}
                id="toAnimate"
                style={{
                  // position: "absolute",
                  // marginLeft: "-3rem", // animate this property
                  display: "flex",
                  flexDirection: "row",
                  width: "max-content",
                  // overflowX: "scroll",
                  // overflowY: "hidden",
                  // msOverflowStyle: "none",
                  // scrollbarWidth: "none",
                }}
              >
                {/* noOfImages = effective images-1 */}
                <ResImgFinal resImg={r4} />
                <ResImgFinal resImg={vp_result} />
                <ResImgFinal resImg={r2} />
                <ResImgFinal resImg={r3} />
                <ResImgFinal resImg={r4} />
                {/* above is effective images. Below image should be same as the first one */}
                <ResImgFinal resImg={r4} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Results;
