import React from "react";
import { ReactComponent as ArrowDown } from "../../arrow-down.svg";

import "./styles.css";

const Dropdown: React.FC = () => {
  return (
    <div className="dropdown-container">
      <label className="container-label" htmlFor="touch">
        <span className="label-dropdown">Categoria</span>
        <div className="container-arrow">
          <ArrowDown />
        </div>
      </label>
      <input type="checkbox" id="touch" />

      <ul className="dropdown-options">
        <li className="dropdown-item">
          <span>Alluisio</span>
        </li>
        <li className="dropdown-item">
          <span>Alluisio</span>
        </li>
        <li className="dropdown-item">
          <span>Alluisio</span>
        </li>
        <li className="dropdown-item">
          <span>Alluisio</span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
