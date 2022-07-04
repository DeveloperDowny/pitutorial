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
            <CourseCard
              mimg={JEE}
              title={"JEE"}
              desc="2 year long rigorous program to crack JEE (Mains/Advanced)"
            />

            <CourseCard
              mimg={NEET}
              title={"NEET"}
              desc="2 year long rigorous program to crack NEET"
            />
            <CourseCard
              mimg={CET}
              title={"CET"}
              desc="2 year long rigorous program to crack CET"
            />
            <CourseCard
              mimg={college}
              title={"CBSE 11th & 12th Science"}
              desc="2 year long rigorous program to ace board exams"
            />
            <CourseCard
              mimg={school}
              title={"CBSE 8th to 10th"}
              desc="Tution classes standard wise to excel in academics"
            />
            <CourseCard
              mimg={SOF}
              title={"Olympiad Exams"}
              desc="Training for competitive exams like NSO, NCO, IMO, etc.. Also for NTSE and scholarship examinations. "
            />
          </div>
          <div>
            <Heading1 title={"How We Teach"} reversed />
          </div>
          <div
            style={{ marginBottom: "4rem" }}
            className={`${styles.courses__courseCard__container}`}
          >
            <HWTCard
              title={"Experienced Faculty"}
              mimg={staff}
              desc="We have highly experienced faculty so that your child gets right guidance"
            />
            <HWTCard
              title={"Basic to Advance"}
              mimg={basicsToAdvance}
              desc="We teach basics first then jump to advance so that your child's foundations are clear"
            />
            <HWTCard
              title={"Dedicated Doubt Solving"}
              mimg={doubtSolving}
              desc="We have anytime doubt asking policy so that your child can practice without breaks"
            />
            <HWTCard
              title={"Small Batches"}
              mimg={smallBatches}
              desc="We have classroom size of 15 to 20 students per batch so that your child gets individual attention"
            />
            <HWTCard
              title={"Best Books Provided"}
              mimg={books}
              desc="We provide best study material for free"
            />
            <HWTCard
              title={"Test Series"}
              mimg={tests}
              desc="We have subscriptions to high quality test taking softwares to train test taking behaviour of your child"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
