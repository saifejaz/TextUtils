import React, { useState } from "react";

export default function TextForm(props) {
  //let defaultText = 'Enter text here'

  const [text, setText] = useState('');
  //setText('abcdefg')
  const convertToUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert('success', 'Converted to Uppercase')
  };

  const convertToLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert('success', 'Converted to Lowercase')
  };

  const handleOnChange = event => {
    setText(event.target.value);
  };

  return (
    <div style={{color: props.mode==='dark'?'white':'black'}} >
      <div className="container my-3">
        <div className="form-group">
          <h3>{props.heading}</h3>
          <textarea
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            value={text}
            rows="8"
            placeholder="Enter text here"
          />
        </div>
        <button className="btn btn-primary" onClick={convertToUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={convertToLowerCase}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.length ? text.split(" ").length : 0 } words and {text.length} characters.
        </p>
        <p>{text.length ? 0.08 * text.split(" ").length : 0} minutes to read</p>
        <h2>Text Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
