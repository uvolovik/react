import * as React from "react";
import Checkbox from "../Checkbox/Checkbox";
import TextField from "../TextField/TextField";
import "./FormsCheckbox.scss";

class FormsCheckbox extends React.Component{
  state = {
    checked: true,
    value: "",
    hasError: {
      TextField: false,
      Checkbox: false
    }
  };

  handleCheckboxChange = (event: any): void => {
    this.setState({ checked: event.target.checked });
  };

  handleTextFieldChange = (event: any): void => {
    if (event.target.value === "")
      this.setState({
        hasError: {
          ...this.state.hasError,
          TextField: true
        }
      });
    else 
    this.setState({
      hasError: {
        ...this.state.hasError,
        TextField: false
      }
    });
    
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event: any) => {
    if (this.state.value === "") {
      event.preventDefault();
      this.setState({
        hasError: {
          ...this.state.hasError,
          TextField: true
        }
      });
    }
  };

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handleSubmit} action="/test">
          <label htmlFor="checkbox">
            <Checkbox
              id="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <span>Are you seriosly?</span>
          </label>

          <TextField
            type="text"
            placeholder="Your text"
            value={this.state.value}
            onChange={this.handleTextFieldChange}
            hasError={this.state.hasError.TextField}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default FormsCheckbox;
