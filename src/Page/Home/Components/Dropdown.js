import React from "react";
import "./style.scss";

const Dropdown = ({ onChange, options }) => {
  return (
    <select className="dropdown" onChange={onChange}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
