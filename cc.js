<div
  className={`roundCorner dropShadow ${styles.courseCard} card`}
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
      <p className={`${title.length > 7 ? "pTextSmall" : "pText"}`}>{title}</p>
    </div>
  </div>
</div>;

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
      <p className={`${title.length > 7 ? styles.pTextSmall : styles.pText}`}>
        {title}
      </p>
    </div>
  </div>
</div>;
