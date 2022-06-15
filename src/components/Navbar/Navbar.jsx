import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { pit_logo, badge } from "../../assets";

const Navbar = () => {
  return (
    <div className={styles.app__navbar}>
      <div className={styles.navbar__logo_image_container__parent}>
        <div className={styles.navbar__logo_image_container}>
          <Image className={styles.navbar__logo_image} src={pit_logo} />
        </div>
      </div>

      <div className={styles.navbar__links_container__parent}>
        <div className={styles.navbar__links_container}>
          <Link href="/results">
            <a>
              <p className="hover-underline-animation">RESULTS </p>
            </a>
          </Link>
          <Link href="/courses">
            <a>COURSES</a>
          </Link>
          <Link href="/contact-us">
            <a>CONTACT US</a>
          </Link>
          <Link href="/join-us">
            <a>JOIN US</a>
          </Link>
        </div>
      </div>
      <div className={styles.navbar__badge_container}>
        <Image src={badge} className={styles.navbar__badge_img} />
      </div>
    </div>
  );
};

export default Navbar;
