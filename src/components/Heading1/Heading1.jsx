import { pen_fff } from "../../assets";

const Heading1 = ({ title, reversed }) => {
  return (
    // <div style={{ display: "block",  }}>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "2rem",
        marginTop: "4rem",
      }}
    >
      {reversed && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginRight: "3px",
            marginBottom: "3px",
            transform: "scaleX(-1)",
          }}
        >
          <img className="h1heading__pen_img" src={pen_fff.src} alt="" />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <p className="h1Text" style={{ margin: 0 }}>
            {title}
          </p>
        </div>
        <div
          style={{
            background: "black",
            height: "2px",
          }}
        ></div>
      </div>
      {!reversed && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginLeft: "3px",
            marginBottom: "3px",
          }}
        >
          <img className="h1heading__pen_img" src={pen_fff.src} alt="" />
        </div>
      )}
    </div>
    // <div className="flexCenter" style={{ marginBottom: "2rem" }}>
    //   <div
    //     style={{
    //       // maxWidth: "min-content",
    //       paddingTop: "4rem",
    //       display: "flex",
    //       justifyContent: "space-around",
    //       flexDirection: "column",
    //     }}
    //   >
    //     <h1 className={"h1Text"} style={{ margin: "0 0 -30px 0" }}>
    //       {title}
    //     </h1>
    //     <div
    //       className="h1heading__displaced_pen_div"
    //       style={
    //         reversed == null
    //           ? {
    //               display: "flex",
    //               justifyContent: "flex-end",
    //               // marginBottom: "-2px",
    //               marginBottom: "10px",
    //               // marginRight: "-24px",
    //               // marginRight: "-40px",
    //             }
    //           : {
    //               display: "flex",
    //               justifyContent: "flex-start",
    //               // marginBottom: "-2px", //real one
    //               marginBottom: "10px",
    //               // marginLeft: "-24px",
    //               marginLeft: "-40px",
    //             }
    //       }
    //     >
    //       <img
    //         className={`${reversed ? "mirror" : ""} h1heading__pen_img`}
    //         src={pen_fff.src}
    //         // style={{ height: "20px" }}
    //         // style={{ height: "30px" }}
    //       />
    //     </div>

    //     <div
    //       className="munderline"
    //       style={{
    //         // width: "100px",
    //         width: "100%",
    //         // marginRight: "230px",
    //         // marginLeft: "20px",

    //         // background: "black",
    //         height: "2px",
    //       }}
    //     ></div>
    //   </div>
    // </div>
  );
};

export default Heading1;
