import {
  Footer,
  Heading1,
  InputField,
  Navbar2 as Navbar,
} from "../src/components";
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
            <Heading1 title={"Career"} />
          </div>
          <p
            style={{
              marginBottom: "2rem",
            }}
            className="pTextSmall"
          >
            Fill the following form to apply for job
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
            ph={
              "About You (experience, preferred job role, certifications, etc.)"
            }
            labelRef={useRef(null)}
            setPostData={setCustom}
            postData={custom}
          />
          <div
            className="flexCenter"
            style={{ alignItems: "flex-end", marginRight: "2rem" }}
          >
            <a
              href={`mailto:vedantpanchal12345@gmail.com?subject=${fullName}'s Job Application For Pi TUTORIAL&body=${
                `Full Name:%0d%0a${fullName}%0d%0a%0d%0a` +
                `Phone. No.:%0d%0a${phoneNo}%0d%0a%0d%0a` +
                `Email Address:%0d%0a${emailAdd}%0d%0a%0d%0a` +
                `About Me:%0d%0a${custom}%0d%0a%0d%0a<Attach your resume with this mail>`
              }`}
            >
              <button
                style={{ marginBottom: "2rem" }}

                // style={{ minWidth: "242px" }}
              >
                Submit
              </button>
            </a>
          </div>

          {/* <p>{fullName}</p> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default JoinUs;
