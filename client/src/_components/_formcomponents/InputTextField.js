import React, { Component } from "react";
import { Form } from "semantic-ui-react";

function InputTextField({ name, placeholder, required, _handleChange }) {
  return (
    <div>
      <Form.Input
        type="text"
        name={name}
        label={name}
        required={required}
        autoComplete="off"
        placeholder={placeholder}
        onChange={_handleChange}
      />
    </div>
  );
}

export default InputTextField;
