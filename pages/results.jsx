import { Heading1, Navbar2 as Navbar } from "../src/components";

import { JEE, result_f } from "../src/assets";
import styles from "../styles/results.module.css";

const ResImgFinal = ({ resImg }) => {
  return (
    <div
      className="final"
      style={{
        width: "865px",
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
        height={"100%"}
        src={resImg.src}
        alt=""
      />
      <img
        className={styles.bgImg}
        width="865px"
        // height="60vh"
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
  );
};
const ResultImg = ({ resultImg }) => {
  return (
    <div
      className="result_img__container"
      style={{
        // width: "min-content",
        display: "flex",
        // width: "100%",
        // height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          position: "absolute",
          objectFit: "contain",

          height: "100%",

          zIndex: 5,
        }}
        src={resultImg.src}
      />
      <img
        style={{
          width: "865px",

          position: "absolute",
          zIndex: -5,
          filter: "blur(5px)",
          objectFit: "cover",
        }}
        src={resultImg.src}
      />
    </div>
  );
};
const Card = ({ title }) => {
  return (
    <div className={`roundCorner dropShadow ${styles.courseCard}`}>
      <div
        className={`flexCenter ${styles.courseCard__container}`}
        style={{
          height: "100%",
          padding: "0.5rem 2rem",
        }}
      >
        <p
          className="pTextSmall"
          style={{
            fontSize: "1rem",
            width: "140px",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <div>
      <Navbar whichActive={"Results"} />
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
              className="flexCenter"
              style={{
                height: "100%",
                paddingLeft: "1rem",
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
            style={{ width: "865px", height: "100%" }}
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
              className="flexCenter roundCorner dropShadow"
              style={{
                // width: "max-content",
                width: "865px",

                background: "white",
                marginBottom: "3rem",
                flexDirection: "row",
                overflow: "hidden",
                height: "60vh",
                zIndex: -1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {/* <div
                className="flexCenter roundCorner dropShadow"
                style={{
                  // width: "max-content",
                  width: "max-content",

                  background: "white",
                  marginBottom: "3rem",
                  flexDirection: "row",
                  overflow: "hidden",
                  height: "60vh",
                  zIndex: -1,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <ResultImg resultImg={JEE} />
              </div> */}
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <ResImgFinal resImg={JEE} />
                <ResImgFinal resImg={JEE} />
              </div>
            </div>
          </div>

          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "max-content",
            }}
          >
            <div>
              <img width={"100%"} src={result_f.src} alt="" />
              {/* <img width={"100%"} src={result_f.src} alt="" /> */}
        </div>
        {/* 
            <div>
              {/* <img width={"100%"} src={result_f.src} alt="" /> 
              <img width={"100%"} src={result_f.src} alt="" />
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Results;
