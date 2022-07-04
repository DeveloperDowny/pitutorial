import styles from "./HWTCard.module.css";

const HWTCard = ({ title, mimg, desc }) => {
  // let desc = "tet";
  return (
    <div className={` dropShadow ${styles.courseCard} card2`}>
      <div
        className="roundCorner card2__inner"
        // style={{
        //   borderRadius: "50%",
        // }}
      >
        <div className={`card2__face card2__face--front `}>
          <div className={`flexCenter ${styles.hwtCardContainer}`}>
            <div className={`${styles.courseCard__image__container}`}>
              <img
                width={"72px"}
                height={"72px"}
                src={mimg.src}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <p
                className={`${
                  title.length > 7 ? styles.pTextSmall : styles.pText
                }`}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="card2__face card2__face--back">
          <div className={`flexCenter ${styles.courseCard__container}`}>
            <div>
              <p className={`${title.length > 7 ? "pTextSmall" : "pText"}`}>
                {title}
              </p>
              <p className="CourseCard__pDescText">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className={`roundCorner dropShadow ${styles.courseCard}`}
    //   // style={{ maxWidth: "max-content" }}
    // >
    //   <div className={`flexCenter ${styles.hwtCardContainer}`}>
    //     <div className={`${styles.courseCard__image__container}`}>
    //       <img
    //         width={"72px"}
    //         height={"72px"}
    //         src={mimg.src}
    //         style={{ objectFit: "contain" }}
    //       />
    //     </div>
    //     <div>
    //       <p
    //         className={`${title.length > 7 ? styles.pTextSmall : styles.pText}`}
    //       >
    //         {title}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HWTCard;
