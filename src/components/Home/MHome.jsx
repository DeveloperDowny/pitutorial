import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { Navbar, Navbar2 } from "../src/components";

import {
  Heading1,
  Navbar2 as Navbar,
  CourseCard,
  HWTCard,
  LocationCard,
  Footer,
} from "../index";

const MHome = () => {
  return (
    <div>
      <Navbar whichActive={"none"} />
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
