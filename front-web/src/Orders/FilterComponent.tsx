import React from "react";
import Dropdown, { CategoryElement } from "../component/Dropdown";
import Input from "../component/Input";

interface Props {
  valueInput: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;

  valueDropdown: string | null;
  onChangeDropdown: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  optionsDropdown: CategoryElement[];
}

function FilterComponent({
  valueInput,
  onChangeInput,

  valueDropdown,
  onChangeDropdown,
  optionsDropdown,
}: Props) {
  return (
    <div className="container-filter">
      <div className="content-filter">
        <span className="label-filter">FILTROS</span>
        <Dropdown
          value={valueDropdown}
          onChange={onChangeDropdown}
          options={optionsDropdown}
        />
        <div className="container-input">
          <Input
            label="Buscar o produto"
            value={valueInput}
            onChange={(e) => onChangeInput(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
