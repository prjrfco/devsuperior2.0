import { useState } from "react";
import Dropdown from "../component/Dropdown";
import Input from "../component/Input";

function FilterComponent() {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  return (
    <div className="container-filter">
      <div className="content-filter">
        <span className="label-filter">FILTROS</span>
        <Dropdown />
        <div className="container-input">
          <Input
            label="Buscar o produto"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
