import React, { useEffect, useState } from "react";
import { fetchDropdownOptions } from "../../api";
import { ReactComponent as ArrowDown } from "../../arrow-down.svg";

import "./styles.css";

export type Categories =
  | "PIZZA"
  | "SANDUICHES"
  | "ACOMPANHAMENTOS"
  | "BEBIDAS"
  | "MILK_SHAKES"
  | "COMBOS"
  | "SUSHI"
  | "PASTEL"
  | "KIKAO"
  | "MASSAS"
  | "RISOTO"
  | "CHURRASCO"
  | "GELADOS";

export interface CategoryElement {
  label: string;
  category: Categories;
}

export type CategoryMap = {
  [name in Categories]: CategoryElement;
};

export const categoriesMap: CategoryMap = {
  ACOMPANHAMENTOS: { category: "ACOMPANHAMENTOS", label: "Acompanhamentos" },
  CHURRASCO: { category: "CHURRASCO", label: "Churrascos" },
  COMBOS: { category: "COMBOS", label: "Combos" },
  GELADOS: { category: "GELADOS", label: "Gelados" },
  KIKAO: { category: "KIKAO", label: "Kikães" },
  MASSAS: { category: "MASSAS", label: "Massas" },
  MILK_SHAKES: { category: "MILK_SHAKES", label: "Milk Shakes" },
  PASTEL: { category: "PASTEL", label: "Pasteis" },
  PIZZA: { category: "PIZZA", label: "Pizzas" },
  BEBIDAS: { category: "BEBIDAS", label: "Bebidas" },
  SANDUICHES: { category: "SANDUICHES", label: "Sanduíches" },
  SUSHI: { category: "SUSHI", label: "Sushis" },
  RISOTO: { category: "RISOTO", label: "Risotos" },
};

interface Props {
  value: string | null;
  onChange: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  options: CategoryElement[];
}

const Dropdown: React.FC<Props> = ({ options, value, onChange }) => {
  // const [value, setValue] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="dropdown-container">
      <label className="container-label" htmlFor="touch">
        <span className="label-dropdown">{value || "CATEGORIA"}</span>
        <div className="container-arrow">
          <ArrowDown />
        </div>
      </label>
      <input
        type="checkbox"
        id="touch"
        checked={expanded}
        onChange={(e) => {
          setExpanded(e.target.checked);
        }}
      />
      <ul className="dropdown-options">
        {options.length > 0 ? (
          options.map((option) => (
            <li
              className="dropdown-item"
              onClick={(e) => {
                onChange(e);
                setExpanded(false);
              }}
            >
              <span>{option.label}</span>
            </li>
          ))
        ) : (
          <li className="dropdown-item">
            <span>Não há categorias</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
