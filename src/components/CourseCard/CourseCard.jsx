import styles from "./CourseCard.module.css";

const CourseCard = ({ mimg, title, desc }) => {
  // desc = "2 year long rigorous program to crack JEE (Mains and/or Advanced)";
  return (
    <div className={` dropShadow ${styles.courseCard} card`}>
      <div className="roundCorner card__inner">
        <div className="card__face card__face--front">
          <div className={`flexCenter ${styles.courseCard__container}`}>
            <div className={`${styles.courseCard__image__container}`}>
              <img
                width={"92px"}
                height={"92px"}
                src={mimg.src}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <p className={`${title.length > 7 ? "pTextSmall" : "pText"}`}>
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="card__face card__face--back">
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
  );
};

export default CourseCard;
