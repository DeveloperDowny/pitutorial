import {
  Heading1,
  Navbar2 as Navbar,
  CourseCard,
  HWTCard,
} from "../src/components";

import { JEE, result_f } from "../src/assets";
import styles from "../styles/results.module.css";

const ResultImg = ({ resultImg }) => {
  return (
    <div
      style={{
        display: "flex",

        // width: "2000px",
        width: "100%",
        // flex: "1",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          position: "absolute",
          objectFit: "contain",
          // width: "100%",
          height: "100%",

          zIndex: 5,
        }}
        src={resultImg.src}
      />
      <img
        style={{
          width: "100%",

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
    <div
      className={`roundCorner dropShadow ${styles.courseCard}`}
      // style={{ maxWidth: "max-content" }}
    >
      <div
        className={`flexCenter ${styles.courseCard__container}`}
        style={{
          height: "100%",
          padding: "0.5rem 2rem",
          // alignItems: "center",
        }}
      >
        <p
          className="pTextSmall"
          style={{
            // padding: "3rem 0rem",
            // height: "100%",
            // alignItems: "center",
            // justifyContent: "center",
            // margin: "auto",

            fontSize: "1rem",
            width: "140px",
            // width: "150px",
            // height: "100%",
            // alignItems: "flex-start",
            // justifyContent: "flex-start",
            // verticalAlign: "flex-end",
            // margin: "auto 1rem",
            // alignSelf: "center",

            // margin: 0,
            // textAlign: "center",
            // height: "113px",
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
              // height,
              // height: "min-content",
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

          <div className="flexCenter" style={{ width: "100%", height: "100%" }}>
            <div
              // className="flexCenter"
              style={{
                display: "flex",
                flexDirection: "row",
                // position: "absolute",
                // top: "4.5rem",
                // margin: "50%",
                marginBottom: "-2rem",
                // width: "100%",
                // height: "100%",
              }}
            >
              <Card
                title="100%
Results"
              />
              <Card
                title="Admission in 
Reputed Colleges"
              />
              <Card title="Top Rankers" />
            </div>
            <div>
              <ResultImg resultImg={JEE} />
              <ResultImg resultImg={JEE} />
              <ResultImg resultImg={JEE} />
            </div>
            <div
              className="flexCenter roundCorner dropShadow"
              style={{
                width: "100%",
                // width: "max-content",
                // overflowX: " scroll",
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
              {/* <ResultImg resultImg={JEE} /> */}
              {/* <ResultImg resultImg={JEE} /> */}
              {/* <ResultImg resultImg={JEE} /> */}

              {/* <ResultImg resultImg={JEE} /> */}
              {/* <ResultImg resultImg={JEE} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
