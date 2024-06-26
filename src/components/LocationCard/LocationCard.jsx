import styles from "./LocationCard.module.css";
const multiplier = 0.75;
const LocationCard = ({ mimg, title, desc, add }) => {
  return (
    // <div
    //   className={`roundCorner dropShadow ${styles.courseCard} LocCard__superSuperContainer`}
    //   style={{
    //     marginBottom: "3rem",
    //   }}
    // >
    <div
      className={`dropShadow roundCorner LocCard__superContainer`}
      style={{
        overflow: "hidden",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "0.5rem",
        height: "auto",
        marginBottom: "3rem",
        display: "flex",
        flexDirection: "column",
        // alignItems: "flex-start",
        // display: "flex",
      }}
    >
      <div className={`LocCard__gmapContainer `}>
        <iframe
          className="locCard__iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15048.270431744235!2d72.76232453955076!3d19.452651699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9e4d92d13a7%3A0xb8528a1236dda0f!2sPI%20Tutorials!5e0!3m2!1sen!2sin!4v1655263027836!5m2!1sen!2sin"
          style={{
            // borderRadius: "20px 20px 0px 0px",
            borderStyle: "none",
            display: "flex",
            // width: "100vw",
            // height: "100%",
          }}
          // width={400 * multiplier}
          width={"100%"}
          height={"100%"}
          // height={300 * multiplier}
          // style={{ border: 0, width: "100%" }}
          // allowfullscreen="false"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        className={`dropShadow roundCorner`}
        style={{
          background: "white",
          margin: "-1rem 0 0 0",
          padding: "0.5rem 1rem",
          width: "min-content",
          // display: "flex",
        }}
      >
        <p
          className="pTextSmall"
          style={{
            margin: 0,
            // padding: "0 1rem",
            width: "7rem",
          }}
        >
          {title}
        </p>
      </div>
      <div
        className="flexCenter LocCard__textContainer"
        style={{ width: "100%" }}
        // style={{ width: "10px" }}
      >
        <p
          style={{
            // width: "100%",
            textAlign: "left",
            marginBottom: "0.5rem",
            // fontSize: "14pt",
          }}
          className="pText LocCard__titleText"
        >
          Address:
        </p>
        <p
          style={{
            marginBottom: "1rem",
            // width: "100%",
            textAlign: "left",
            // fontSize: "11pt",
          }}
          className="pTextSmall LocCard__detailsText"
        >
          {add}
        </p>

        <p
          style={{
            // width: "100%",
            textAlign: "left",
            marginBottom: "0.5rem",
            // fontSize: "14pt",
          }}
          className="LocCard__titleText pText"
        >
          Phone Number:
        </p>
        <p
          style={{
            // fontSize: "11pt",
            marginBottom: "1rem",
            // width: "100%",
            textAlign: "left",
          }}
          className="LocCard__detailsText pTextSmall"
        >
          <a href="tel:+918975803664">+91 782 1865 157</a>
        </p>
      </div>
    </div>
    // </div>
  );
};

export default LocationCard;
