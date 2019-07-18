import React from "react";
import { Form } from "semantic-ui-react";

function DropdownSelect({ name, placeholder, required, val, _handleChange }) {
  return (
    <div>
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
        label={name}
        placeholder={name}
        options={val}
        search
        required={required}
        autoComplete="off"
      />
    </div>
  );
}

export default DropdownSelect;
