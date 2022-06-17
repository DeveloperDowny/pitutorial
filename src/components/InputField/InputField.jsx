import React from "react";

const InputField = ({ title }) => {
  return (
    <div className="flexCenter" style={{ alignItems: "flex-start" }}>
      <p className="form__pText">{title}</p>
      <input
        style={{ width: "200px" }}
        type="tel"
        id="phone"
        name="phone"
        placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      />
    </div>
  );
};

export default InputField;

{
  /* <input type="tel" id="phone" name="phone" placeholder="123-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br><br>
  <small>Format: 123-45-678</small><br><br>
  <input type="submit"></input> */
}
