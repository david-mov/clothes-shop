import React, { useState } from "react";
import ListaProducts from "../AdminListView/components/ProductList";
import CategoryList from "./components/CategoryLista";
import SizeList from "./components/SizeLista";
import TypeList from "./components/TypeLista";
import "../../components/NavBar/NavBar.css";
import Select from "react-select";
import { Link } from "react-router-dom";

const ListaAdmin = () => {
  const [vista, setvista] = useState({
    label: "list products",
    value: "list products",
  });
  const [label, setlabel] = useState("list products");

  const FilterStateInit = () => {
    switch (label) {
      case "list Products":
        return <ListaProducts />;
      case "list Category":
        return <CategoryList />;
      case "list Size":
        return <SizeList />;
      case "list Type":
        return <TypeList />;
      default:
        return <ListaProducts />;
    }
  };
  const OptionSelect = [
    { label: "list Products", value: "list Products" },
    { label: "list Category", value: "list Category" },
    { label: "list Size", value: "list Size" },
    { label: "list Type", value: "list Type" },
  ];

  const handleChangeSelect = (vista) => {
    setvista(vista);
    setlabel(vista.label);
  };

  return (
    <div>
      <div className="todo">
        <div className="navbar">
          <div className="navbar__logo">
            <img
              className="img"
              src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
              alt="clothes-Shop"
              border="0"
            ></img>
          </div>
          <div className="cart__link">
            <Select
              className="selected"
              value={vista}
              options={OptionSelect}
              onChange={handleChangeSelect}
            />
          </div>
          <ul className="navbar__links">
            <li className="saco">
              <Link to="/" className="cart__link">
                <i class="fas fa-arrow-left fa-1x"></i>
                <span>
                  Go to back <span className="cartlogo__badge">{}</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {FilterStateInit()}
    </div>
  );
};

export default ListaAdmin;
