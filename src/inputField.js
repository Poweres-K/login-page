import React from "react";

const inputField = ({ value, name, type, handleChange }) => {
  return (
    <div className="input-box">
      <input
        autoComplete="off"
        name={name}
        type={type}
        placeholder={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default inputField;
