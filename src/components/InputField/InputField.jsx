import { useEffect } from "react";
import gsap, { shuffle } from "gsap";

const InputField = ({
  labelRef,
  tween,
  setPostData,
  postData,
  ph,
  propName,
}) => {
  // const [played, setplayed] = useState(false)
  // let isReversed = false;
  // let decider = "10";
  // useEffect(() => {
  //   tween = gsap.to(labelRef.current, {
  //     y: "-3rem",
  //     scale: "1.3",
  //     //perfect for page load

  //     duration: 0.1,
  //     // opacity: 1,
  //     // scale: 5,
  //     // ease: "back",
  //   });

  //   tween.pause();
  // });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <p
        ref={labelRef}
        id="temp"
        style={{
          zIndex: "9",
          textAlign: "center",
          position: "absolute",
          top: "0.9rem",
          left: "2rem",
        }}
        onClick={(e) => {
          gsap.to(labelRef.current, {
            y: "-3rem",
            scale: "1.3",
            //perfect for page load

            duration: 0.1,
            // opacity: 1,
            // scale: 5,
            // ease: "back",
          });
          document.getElementsByTagName("input")[0].focus();
          // if (decider === "10") {
          //   // tween.play();
          //   gsap.to(labelRef.current, {
          //     y: "-3rem",
          //     scale: "1.3",
          //     //perfect for page load

          //     duration: 0.1,
          //     // opacity: 1,
          //     // scale: 5,
          //     // ease: "back",
          //   });
          //   document.getElementsByTagName("input")[0].focus();
          //   decider = "00";
          // }
          // if (!isReversed) {
          //   // shouldPlay = false;
          //   // console.log(shouldPlay);
          //   tween.play();
          //   document.getElementsByTagName("input")[0].focus();
          // }
        }}
      >
        {ph}
      </p>

      <input
        onBlur={(e) => {
          // console.log(shouldPlay);
          if (e.target.value == "") {
            console.log("reversed");
            // tween =
            gsap.to(labelRef.current, {
              y: "0",
              scale: "1",
              //perfect for page load

              duration: 0.1,
              // opacity: 1,
              // scale: 5,
              // ease: "back",
            });
            // tween.reverse();
            // decider = "11";
          }
        }}
        // ref={inRef}
        onClick={(e) => {
          gsap.to(labelRef.current, {
            y: "-3rem",
            scale: "1.3",
            //perfect for page load

            duration: 0.1,
            // opacity: 1,
            // scale: 5,
            // ease: "back",
          });
          // if (decider === "10" || decider === "11") {
          //   // tween.play();
          //   gsap.to(labelRef.current, {
          //     y: "-3rem",
          //     scale: "1.3",
          //     //perfect for page load

          //     duration: 0.1,
          //     // opacity: 1,
          //     // scale: 5,
          //     // ease: "back",
          //   });
          //   // decider = "00";
          //   // document.getElementsByTagName("input")[0].focus();
          // }
        }}
        // placeholder="ph"
        onChange={(e) => {
          // shouldPlay = false;
          setPostData(e.target.value);
        }}
      />
    </div>
    // <div className="flexCenter" style={{ alignItems: "flex-start" }}>
    //   <p className="form__pText">{title}</p>
    //   <input
    //     style={{ width: "200px" }}
    //     type="tel"
    //     id="phone"
    //     name="phone"
    //     placeholder="123-45-678"
    //     pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    //   />
    // </div>
  );
};

export default InputField;

{
  /* <input type="tel" id="phone" name="phone" placeholder="123-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br><br>
  <small>Format: 123-45-678</small><br><br>
  <input type="submit"></input> */
}
