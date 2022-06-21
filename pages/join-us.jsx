import { Heading1, InputField, Navbar2 as Navbar } from "../src/components";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const JoinUs = () => {
  let labelRef = useRef(null);
  const [fullName, setFullName] = useState("");
  // let inRef = useRef(null);
  // const [postData, setPostData] = useState({
  //   full_name: "",
  //   phone_no: "",
  //   email_add: "",
  //   wantToApplyAs: "",
  // });
  let tween;

  return (
    <div>
      <Navbar whichActive={"join_us"} />
      <div className={`offWhiteBg superContainer`}>
        <div className="mainContainer">
          <div>
            <Heading1 title={"Join Us"} />
          </div>
          <p
            style={{
              marginBottom: "2.5rem",
            }}
            className="pTextSmall"
          >
            Fill the following form to schedule a call
          </p>
          {/* <InputField title={"Full Name"} /> */}

          <InputField
            ph={"Full Name"}
            propName={"full_name"}
            labelRef={labelRef}
            tween={tween}
            setPostData={setFullName}
            postData={fullName}
          />

          <p>{fullName}</p>
          {/* <InputField />
          <InputField />
          <InputField /> */}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
