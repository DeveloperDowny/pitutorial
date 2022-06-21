import { createStyles, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { Heading1, InputField, Navbar2 as Navbar } from "../src/components";
import { orange, blue, green } from "@material-ui/core/colors";

const JoinUs = () => {
  const [postData, setPostData] = useState({
    // creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        color: green[900],
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "rgba(0, 0, 0, 0.23)", // default
          },
          "&.Mui-focused fieldset": {
            border: "2px solid red", // focus
          },
        },
      },
    })
  );

  const classes = useStyles();
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

          <input
            onChange={(e) => {
              setPostData({
                ...postData,
                title: e.target.value,
              });
            }}
          />

          <p>{postData["title"]}</p>

          {/* <TextField
            name="title"
            // variant="outlined"
            variant="filled"
            label="Title"
            classes={{
              root: classes.root,
            }}
            fullWidth
            value={postData.title}
            onChange={(
              e // maybe here
            ) =>
              setPostData({
                ...postData,
                title: e.target.value,
              })
            }
          /> */}
          {/* <InputField title={"Full Name"} /> */}
          {/* <InputField />
          <InputField />
          <InputField /> */}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
