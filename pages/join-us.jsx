import { Heading1, InputField, Navbar2 as Navbar } from "../src/components";

const JoinUs = () => {
  return (
    <div>
      <Navbar whichActive={"join_us"} />
      <div className={`offWhiteBg superContainer`}>
        <div className="mainContainer">
          <div>
            <Heading1 title={"Join Us"} />
          </div>
          <p className="pTextSmall">
            Fill the following form to schedule a call
          </p>
          <InputField title={"Full Name"} />
          {/* <InputField />
          <InputField />
          <InputField /> */}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
