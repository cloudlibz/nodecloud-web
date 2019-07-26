import React from "react";
import { Form } from "semantic-ui-react";

function DropdownSelect({ name, placeholder, required, val, _handleChange }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <Form.Select
        name={name}
        label={name}
        placeholder={name}
        options={val}
        search
        required={required}
        autoComplete="off"
        onChange={_handleChange}
      />
    </div>
  );
}

export default DropdownSelect;
