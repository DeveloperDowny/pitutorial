import styles from "./HWTCard.module.css";

const HWTCard = ({ title, mimg }) => {
  return (
    <div
      className={`roundCorner dropShadow ${styles.courseCard}`}
      // style={{ maxWidth: "max-content" }}
    >
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
            className={`${title.length > 7 ? styles.pTextSmall : styles.pText}`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HWTCard;
