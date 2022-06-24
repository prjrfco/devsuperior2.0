import React from "react";
import { ReactComponent as Search } from "../../buscar.svg";
import "./styles.css";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #fff",
      }}
    >
      <div className="icon-container">
        <Search />
      </div>
      <div className="input__group field">
        <input
          type="input"
          className="input__field"
          placeholder={label}
          // name={label}
          id={label}
          value={value}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor={label} className="input__label">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;
