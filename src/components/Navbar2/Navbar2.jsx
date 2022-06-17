import Link from "next/link";
import styles from "./Navbar2.module.css";
import { pit_logo, badge } from "../../assets";

const Navbar = ({ whichActive }) => {
  return (
    <div
      className={`${styles.dropShadow}`}
      style={{
        background: "linear-gradient(90deg, #F29800, #E8C301, #FDE116)",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        height: "97px",
        position: "fixed",
        zIndex: 5,
        width: "100%",
      }}
    >
      <div>
        <img
          src={pit_logo.src}
          style={{ height: "100%", padding: "1rem", margin: "0 0 0 10rem" }}
        />
      </div>
      <div
        className={`${styles.linksText}`}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "flex-end",
          color: "#D60000",
        }}
      >
        <div
          className={styles.navbar__links_container}
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "5rem",
          }}
        >
          <Link href="/results">
            <a className={styles.test}>RESULTS</a>
          </Link>

          <Link href="/courses">
            <a
              className={
                whichActive != "courses" ? styles.test : styles.text__underlined
              }
            >
              COURSES
            </a>
          </Link>
          <Link href="/contact-us">
            <a
              className={
                whichActive != "contactus"
                  ? styles.test
                  : styles.text__underlined
              }
            >
              CONTACT US
            </a>
          </Link>
          <Link href="/join-us">
            <a
              className={
                whichActive != "join_us" ? styles.test : styles.text__underlined
              }
            >
              JOIN US
            </a>
          </Link>
        </div>
      </div>
      <div>
        <img
          className={`${styles.dropShadow}`}
          src={badge.src}
          style={{ height: "125%", margin: "-1px 3rem 0 0" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
