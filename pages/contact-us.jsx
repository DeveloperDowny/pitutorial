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
            className="flexCenter ContactUs__LocCardsContainer"
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "stretch",
            }}
          >
            <LocationCard
              mimg={JEE}
              add={
                "Loonwat Compound 142 ghaswala estate near shastri nagar or soul select, opp. 24 carrot cinema, Mumbai, Maharashtra 400102"
              }
              title="Virar"
            />
            <LocationCard mimg={JEE} title="Vasai" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
