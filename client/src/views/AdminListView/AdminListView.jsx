import React from "react";
import ListaProducts from "../AdminListView/components/ProductList";
import CategoryList from "./components/CategoryLista";
import SizeList from "./components/SizeLista";
import TypeList from "./components/TypeLista";

const ListaAdmin = () => {
  return (
    <div>
      <ListaProducts />
      <CategoryList />
      <SizeList />
      <TypeList />
    </div>
  );
};

export default ListaAdmin;
