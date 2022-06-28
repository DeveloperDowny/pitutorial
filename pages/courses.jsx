import {
  Heading1,
  Navbar2 as Navbar,
  CourseCard,
  HWTCard,
  Footer,
} from "../src/components";
import {
  basicsToAdvance,
  books,
  CET,
  college,
  doubtSolving,
  JEE,
  lectures,
  NEET,
  school,
  smallBatches,
  SOF,
  staff,
  tests,
} from "../src/assets";
import styles from "../styles/courses.module.css";

const Courses = () => {
  return (
    <div>
      <Navbar whichActive={"courses"} />
      <div
        className={`offWhiteBg superContainer`}
        // style={{
        //   // background: "#F6F6F6",
        //   // flexDirection: "column",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   position: "absolute",
        //   top: "97px",
        //   width: "100%",
        //   zIndex: -5,
        // }}
      >
        <div className="mainContainer">
          {/* <div
          style={{
            width: "865px",
            display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
            // alignContent: "center",
          }}
        > */}
          <div>
            <Heading1 title={"Courses"} />
          </div>
          <div className={`${styles.courses__courseCard__container}`}>
            <CourseCard mimg={JEE} title={"JEE"} />

            <CourseCard mimg={NEET} title={"NEET"} />
            <CourseCard mimg={CET} title={"CET"} />
            <CourseCard mimg={college} title={"CBSE 11th & 12th Science"} />
            <CourseCard mimg={school} title={"CBSE 8th to 10th"} />
            <CourseCard mimg={SOF} title={"Olympiad Exams"} />
          </div>
          <div>
            <Heading1 title={"How We Teach"} reversed />
          </div>
          <div
            style={{ marginBottom: "4rem" }}
            className={`${styles.courses__courseCard__container}`}
          >
            <HWTCard title={"Experienced Faculty"} mimg={staff} />
            <HWTCard title={"Basic to Advance"} mimg={basicsToAdvance} />
            <HWTCard title={"Dedicated Doubt Solving"} mimg={doubtSolving} />
            <HWTCard title={"Small Batches"} mimg={smallBatches} />
            <HWTCard title={"Best Books Provided"} mimg={books} />
            <HWTCard title={"Test Series"} mimg={tests} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
