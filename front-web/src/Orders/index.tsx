import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import StepsHeader from "./StepsHeader";
import FilterComponent from "./FilterComponent";
import ProductsList from "./ProductsList";
import { OrderLocationData, Product } from "./types";
import { fetchDropdownOptions, fetchProducts, saveOrder } from "../api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
import { checkIsSelected } from "./helpers";
import "./styles.css";
import {
  Categories,
  categoriesMap,
  CategoryElement,
} from "../component/Dropdown";

interface DropdownResponse {
  data: { type: Categories }[];
}

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [filtered, setFiltered] = useState<Product[]>([]);

  const [optionsDropdown, setOptionsDropdown] = useState<CategoryElement[]>([]);
  const [value, setValue] = useState<CategoryElement | undefined>();

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response.data);
        setFiltered(response.data);
      })
      .catch(() => {
        toast.warning("Erro ao listar produtos");
      });

    fetchDropdownOptions()
      .then(({ data }: DropdownResponse) => {
        const options = data.map((d) => d.type);

        setOptionsDropdown(options.map((type) => categoriesMap[type]));
      })
      .catch(() => {
        toast.warning("Erro ao carregar dropdown de categorias");
      });
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning("Erro ao enviar pedido");
      });
  };

  const filterData = useCallback(
    (filter: string) => {
      if (products) {
        setFiltered(
          products.filter((p) => {
            return (
              (p.description
                .toString()
                .toLowerCase()
                .includes(filter.toLowerCase()) ||
                p.name
                  .toString()
                  .toLowerCase()
                  .includes(filter.toLowerCase())) &&
              (typeof value === "undefined" ? true : p.type === value?.category)
            );
          })
        );
      }
    },
    [products, value]
  );

  const filterDataWithDropdown = useCallback(
    (filter: string) => {
      if (products) {
        setFiltered(
          products.filter((p) => {
            return (
              (p.description
                .toString()
                .toLowerCase()
                .includes(globalFilter.toLowerCase()) ||
                p.name
                  .toString()
                  .toLowerCase()
                  .includes(globalFilter.toLowerCase())) &&
              p.type === filter
            );
          })
        );
      }
    },
    [products, globalFilter]
  );

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <FilterComponent
          valueInput={globalFilter}
          onChangeInput={(e) => {
            setGlobalFilter(e.target.value);
            filterData(e.target.value);
          }}
          optionsDropdown={optionsDropdown}
          valueDropdown={value?.label || ""}
          onChangeDropdown={(e) => {
            let optionSelected = optionsDropdown.find(
              (o) => o.label === e.currentTarget.textContent
            );
            if (optionSelected) {
              setValue(optionSelected);
              filterDataWithDropdown(optionSelected.category);
            }
          }}
        />
        <ProductsList
          products={filtered}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  );
}

export default Orders;
