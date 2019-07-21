import React from "react";
import { Form } from "semantic-ui-react";

function DropdownSelect({ name, placeholder, required, val, _handleChange }) {
  return (
    <div style={{ marginTop: "10px" }}>
      {/* <label>{placeholder}</label>
      <select name={name} required={required} onChange={_handleChange}>
        <option value="">Select an option</option>
        {val.map(values => (
          <option value={values} key={values}>
            {values}
          </option>
        ))}
      </select> */}
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
