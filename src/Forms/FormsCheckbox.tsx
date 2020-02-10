import React, { useState } from "react";

import Checkbox from "../Checkbox/Checkbox";
import TextField from "../TextField/TextField";
import "./FormsCheckbox.scss";

function FormsCheckbox() {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(true);
  const [hasError, setHasError] = useState({
    TextField: false,
    Checkbox: false
  });

  const handleCheckboxChange = (event: any): void => {
    setChecked(event.target.checked);
  };

  const handleTextFieldChange = (event: any): void => {
    event.target.value === ""
      ? setHasError({...hasError, TextField : true})
      : setHasError({...hasError, TextField : false});

    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    if (value === "") {
      event.preventDefault();
      setHasError({...hasError, TextField : true});
    }
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit} action="/test">
        <label htmlFor="checkbox">
          <Checkbox
            id="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <span>Are you seriosly?</span>
        </label>

        <TextField
          type="text"
          placeholder="Your text"
          value={value}
          onChange={handleTextFieldChange}
          hasError={hasError.TextField}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default FormsCheckbox;
