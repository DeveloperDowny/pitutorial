import { Heading1, InputField, Navbar2 as Navbar } from "../src/components";
import { useRef, useState } from "react";

const JoinUs = () => {
  // let labelRef = useRef(null);
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [custom, setCustom] = useState("");

  return (
    <div>
      <Navbar whichActive={"join_us"} />
      <div className={`offWhiteBg superContainer`}>
        <div className="formContainer">
          <div>
            <Heading1 title={"Join Us"} />
          </div>
          <p
            style={{
              marginBottom: "2rem",
            }}
            className="pTextSmall"
          >
            Fill the following form to schedule a call
          </p>

          <InputField
            ph={"Full Name"}
            labelRef={useRef(null)}
            setPostData={setFullName}
            postData={fullName}
          />

          <InputField
            ph={"Phone no."}
            labelRef={useRef(null)}
            setPostData={setPhoneNo}
            postData={phoneNo}
          />
          <InputField
            ph={"Email Address"}
            labelRef={useRef(null)}
            setPostData={setEmailAdd}
            postData={emailAdd}
          />
          <InputField
            ph={"Why should we hire you?"}
            labelRef={useRef(null)}
            setPostData={setCustom}
            postData={custom}
          />
          <div
            className="flexCenter"
            style={{ alignItems: "flex-end", marginRight: "2rem" }}
          >
            <button
              style={{ marginBottom: "2rem" }}

              // style={{ minWidth: "242px" }}
            >
              Submit
            </button>
          </div>

          {/* <p>{fullName}</p> */}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
