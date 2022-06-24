import React, { useMemo, useState } from "react";
import { ReactComponent as ArrowDown } from "../../arrow-down.svg";

import "./styles.css";

type Categories =
  | "PIZZA"
  | "SANDUICHE"
  | "ACOMPANHAMENTOS"
  | "REFRIGENTES"
  | "MILK_SHAKES"
  | "COMBOS"
  | "SUSHI"
  | "PASTEL"
  | "KIKAO"
  | "MASSAS"
  | "CHURRASCO"
  | "GELADO";

interface CategoryElement {
  label: string;
  category: Categories;
}

type CategoryMap = {
  [name in Categories]: CategoryElement;
};

const categoriesMap: CategoryMap = {
  ACOMPANHAMENTOS: { category: "ACOMPANHAMENTOS", label: "Acompanhamentos" },
  CHURRASCO: { category: "CHURRASCO", label: "Churrascos" },
  COMBOS: { category: "COMBOS", label: "Combos" },
  GELADO: { category: "GELADO", label: "Gelados" },
  KIKAO: { category: "KIKAO", label: "Kikães" },
  MASSAS: { category: "MASSAS", label: "Massas" },
  MILK_SHAKES: { category: "MILK_SHAKES", label: "Milk Shakes" },
  PASTEL: { category: "PASTEL", label: "Pasteis" },
  PIZZA: { category: "PIZZA", label: "Pizzas" },
  REFRIGENTES: { category: "REFRIGENTES", label: "Refrigerantes" },
  SANDUICHE: { category: "SANDUICHE", label: "Sanduíches" },
  SUSHI: { category: "SUSHI", label: "Sushis" },
};

const Dropdown: React.FC = () => {
  const [value, setValue] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const optionsDropdown: CategoryElement[] = useMemo(
    () => [
      categoriesMap.ACOMPANHAMENTOS,
      categoriesMap.CHURRASCO,
      categoriesMap.COMBOS,
      categoriesMap.GELADO,
      categoriesMap.KIKAO,
      categoriesMap.MASSAS,
      categoriesMap.MILK_SHAKES,
      categoriesMap.PASTEL,
      categoriesMap.PIZZA,
      categoriesMap.REFRIGENTES,
      categoriesMap.SANDUICHE,
      categoriesMap.SUSHI,
    ],
    []
  );

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
        {optionsDropdown.length > 0 ? (
          optionsDropdown.map((option) => (
            <li
              className="dropdown-item"
              onClick={(e) => {
                setValue(e.currentTarget.textContent);
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
        {/* <li
          className="dropdown-item"
          onClick={(e) => setValue(e.currentTarget.textContent)}
        >
          <span>PIZZA</span>
        </li>

        <li className="dropdown-item">
          <span>SANDUICHE</span>
        </li>

        <li className="dropdown-item">
          <span>ACOMPANHAMENTOS</span>
        </li>

        <li className="dropdown-item">
          <span>REFRIGENTES</span>
        </li>

        <li className="dropdown-item">
          <span>REFRIGENTES</span>
        </li>

        <li className="dropdown-item">
          <span>MILK_SHAKES</span>
        </li>

        <li className="dropdown-item">
          <span>SUSHI</span>
        </li>

        <li className="dropdown-item">
          <span>PASTEL</span>
        </li>

        <li className="dropdown-item">
          <span>KIKAO</span>
        </li>

        <li className="dropdown-item">
          <span>MASSAS</span>
        </li>

        <li className="dropdown-item">
          <span>CHURRASCO</span>
        </li>

        <li className="dropdown-item">
          <span>GELADOS</span>
        </li> */}
      </ul>
    </div>
  );
};

export default Dropdown;
