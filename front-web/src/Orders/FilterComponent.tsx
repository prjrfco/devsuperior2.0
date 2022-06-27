import React from "react";
import Dropdown from "../component/Dropdown";
import Input from "../component/Input";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterComponent({ value, onChange }: Props) {
  return (
    <div className="container-filter">
      <div className="content-filter">
        <span className="label-filter">FILTROS</span>
        <Dropdown />
        <div className="container-input">
          <Input
            label="Buscar o produto"
            value={value}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
