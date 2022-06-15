import { pen_fff } from "../../assets";

const Heading1 = ({ title, reversed }) => {
  return (
    // <div style={{ display: "block",  }}>
    <div className="flexCenter" style={{ marginBottom: "2rem" }}>
      <div
        style={{
          // maxWidth: "min-content",
          paddingTop: "4rem",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <h1 className={"h1Text"} style={{ margin: "0 0 -30px 0" }}>
          {title}
        </h1>
        <div
          style={
            reversed == null
              ? {
                  display: "flex",
                  justifyContent: "flex-end",
                  // marginBottom: "-2px",
                  // marginBottom: "-2px",
                  // marginRight: "-24px",
                  marginRight: "-40px",
                }
              : {
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: "-2px",
                  // marginLeft: "-24px",
                  marginLeft: "-40px",
                }
          }
        >
          <img
            className={`${reversed ? "mirror" : ""}`}
            src={pen_fff.src}
            // style={{ height: "20px" }}
            style={{ height: "30px" }}
          />
        </div>

        <div
          className="munderline"
          style={{
            // width: "100px",
            width: "100%",
            // marginRight: "230px",
            // marginLeft: "20px",

            // background: "black",
            height: "2px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Heading1;
