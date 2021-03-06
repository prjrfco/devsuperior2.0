import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import StepsHeader from "./StepsHeader";
import FilterComponent from "./FilterComponent";
import ProductsList from "./ProductsList";
import { OrderLocationData, Product } from "./types";
import { fetchProducts, saveOrder } from "../api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
import { checkIsSelected } from "./helpers";
import "./styles.css";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [filtered, setFiltered] = useState<Product[]>([]);
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
              p.description
                .toString()
                .toLowerCase()
                .includes(filter.toLowerCase()) ||
              p.name.toString().toLowerCase().includes(filter.toLowerCase())
            );
          })

          // modules.user.modules.filter((d) => {
          //   console.log(d.pretty_name);
          //   return d.pretty_name
          //     .toString()
          //     .toLowerCase()
          //     .includes(filter.toLowerCase());
          // })
        );
      }
    },
    [products]
  );

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <FilterComponent
          value={globalFilter}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
            filterData(e.target.value);
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
