import styles from "./CourseCard.module.css";

const CourseCard = ({ mimg, title, desc }) => {
  return (
    <div
      className={`roundCorner dropShadow ${styles.courseCard}`}
      // style={{ maxWidth: "max-content" }}
    >
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
  );
};

export default CourseCard;
