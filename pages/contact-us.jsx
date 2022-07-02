import { basicsToAdvance, JEE, pen_fff } from "../src/assets";
import {
  Heading1,
  Navbar2 as Navbar,
  CourseCard,
  HWTCard,
  LocationCard,
  Footer,
} from "../src/components";
import styles from "../styles/contactUs.module.css";

const ContactUs = () => {
  return (
    <div>
      <Navbar whichActive={"contactus"} />
      <div className={`offWhiteBg superContainer`}>
        <div className="mainContainer">
          <div>
            <Heading1 title={"Locations"} />
          </div>
          <div
            className="flexCenter"
            style={{ flexDirection: "row", flexWrap: "wrap" }}
          >
            <LocationCard mimg={JEE} title="Virar" />
            <LocationCard mimg={JEE} title="Vasai" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
