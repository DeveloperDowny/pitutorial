import Link from "next/link";
import styles from "./Navbar2.module.css";
import { pit_logo, badge, phone_call } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { useState, useEffect } from "react";
import { gsap, Power3 } from "gsap";

const Navbar = ({ whichActive }) => {
  const [shouldShow, setshouldShow] = useState(false);
  useEffect(() => {
    let anim;
    if (shouldShow && anim == null) {
      anim = gsap.from(".slide-bottom", {
        y: "-100%",
        duration: 0.25,
        onComplete: () => (anim = null),
        ease: Power3.easeIn,
      });
    }

    return () => {
      if (anim != null) {
        anim.kill();
      }
    };
  }, [shouldShow]);

  return (
    <div
      // className={`${styles.dropShadow}`}
      className={`dropShadow navbar__container`}
      style={{
        background: "linear-gradient(90deg, #F29800, #E8C301, #FDE116)",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",

        position: "fixed",
        zIndex: 5,
        width: "100%",
      }}
    >
      <div>
        <Link href="/">
          <a>
            <img
              className="navbar__pit_logo"
              src={pit_logo.src}
              style={{
                height: "100%",
                padding: "1rem",
                // margin: "0 0 0 10rem"
                marginLeft: "8vw",
              }}
            />
          </a>
        </Link>
      </div>

      <div
        className="navbar__right_partition"
        style={{
          display: "flex",
          // justifyContent: "space-between",
          flexDirection: "row",
          justifyContent: "flex-end",
          // height: "97px",
          // position: "fixed",
          // zIndex: 5,
          width: "100%",
        }}
      >
        <div
          className={`${styles.linksText} navbar__links_superContainer`}
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   width: "100%",
          //   justifyContent: "flex-end",
          //   color: "#D60000",
          // }}
        >
          <div
            className={`${styles.navbar__links_container} navbar__links_container`}
            style={{
              display: "flex",
              flexDirection: "row",
              // marginRight: "5rem",
              // come back here// you need to make this margin responsive
            }}
          >
            <Link href="/results">
              <a
                className={
                  whichActive != "results"
                    ? styles.test
                    : styles.text__underlined
                }
              >
                RESULTS
              </a>
            </Link>

            <Link href="/courses">
              <a
                className={
                  whichActive != "courses"
                    ? styles.test
                    : styles.text__underlined
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
                  whichActive != "join_us"
                    ? styles.test
                    : styles.text__underlined
                }
              >
                CAREER
              </a>
            </Link>
          </div>
        </div>
        <div
          className="navbar__smallScreen__freeDemoClass dropShadow"
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   alignItems: "center",
          //   marginRight: "2rem",
          //   // width: "100vw",
          //   // width: "100%",
          // }}
        >
          <img className="callNow__icon" src={phone_call.src} alt="" />
          <Link href="tel:+8975803664">
            <a className="callNow__text">
              <p
                style={{
                  width: "max-content",

                  color: "white",
                }}
                // className={styles.linksText}
              >
                call now
              </p>
            </a>
          </Link>
        </div>

        <div className="navbar__menuContainer">
          <GiHamburgerMenu
            className="navbar__gihamMenu "
            onClick={() => setshouldShow(true)} //todo
          />

          {shouldShow && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <FaPencilRuler
                // fontSize={27}
                className="overlay__close"
                onClick={() => setshouldShow(false)}
              />

              <div //this works really good
                // onClick={() => setshouldShow(false)}
                className={`
                
               navbar__links_container
                
                navbar__links_container__smallscreen`}
                style={{
                  display: "flex",
                  flexDirection: "column",

                  // marginRight: "5rem",
                  // come back here// you need to make this margin responsive
                }}
              >
                <Link href="/results">
                  <a
                    onClick={() => setshouldShow(false)}
                    className={
                      whichActive != "results"
                        ? styles.test
                        : styles.text__underlined
                    }
                  >
                    RESULTS
                  </a>
                </Link>

                <Link href="/courses">
                  <a
                    onClick={() => setshouldShow(false)}
                    className={
                      whichActive != "courses"
                        ? styles.test
                        : styles.text__underlined
                    }
                  >
                    COURSES
                  </a>
                </Link>
                <Link href="/contact-us">
                  <a
                    onClick={() => setshouldShow(false)}
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
                    onClick={() => setshouldShow(false)}
                    className={
                      whichActive != "join_us"
                        ? styles.test
                        : styles.text__underlined
                    }
                  >
                    CAREER
                  </a>
                </Link>
              </div>

              {/* <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans">
                  <a
                  
                   onClick={() => setshouldShow(false)}href="#home">Home</a>
                </li>
                <li className="p__opensans">
                  <a
                  
                   onClick={() => setshouldShow(false)}href="#about">About</a>
                </li>
                <li className="p__opensans">
                  <a
                  
                   onClick={() => setshouldShow(false)}href="#menu">Menu</a>
                </li>
                <li className="p__opensans">
                  <a
                  
                   onClick={() => setshouldShow(false)}href="#awards">Awards</a>
                </li>
                <li className="p__opensans">
                  <a
                  
                   onClick={() => setshouldShow(false)}href="#contact">Contact</a>
                </li>
              </ul> */}
            </div>
          )}
        </div>

        <div className={`navbar__badge`}>
          <Link href="tel:+8975803664">
            <a>
              <img
                className={`${styles.dropShadow}`}
                src={badge.src}
                style={{ height: "125%", margin: "-1px 3rem 0 0" }}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
