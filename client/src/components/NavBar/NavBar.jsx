import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../stateManagement/actions/getAllProducts";
import { getAllCategories } from "../../stateManagement/actions/getAllCategories";
import { getCategory } from "../../stateManagement/actions/getCategory";
import { getType } from "../../stateManagement/actions/getType";
import { getPrice } from "../../stateManagement/actions/getPrice";
import { getSearch } from "../../stateManagement/actions/getSearch";
import { Badge } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./NavBar.css";
import { getAllTypes } from "../../stateManagement/actions/getAllTypes";
import { getAllCart } from "../../stateManagement/actions/getAllCart";
import { useUserRol } from '../../hooks/useUserRol';

function NavBar() {

  let [rol, ok] = useUserRol();

  const [categoryValue, setCategoryValue] = useState("C");
  const [typeValue, setTypeValue] = useState("T");

  const onSelectCategory = (e) => {
    e.preventDefault();
    setCategoryValue(e.target.value);
    dispatch(getCategory(e.target.value));
  };

  const onSelectTypes = (e) => {
    console.log("mostre on select types");
    e.preventDefault();
    setTypeValue(e.target.value);
    dispatch(getType(e.target.value));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  var types = useSelector((state) => state.typesReducer.types);
  var categories = useSelector((state) => state.categoriesReducer.categories);
  var { cart } = useSelector((state) => state.checkoutReducer);

  const showList = () => {
    console.log("desde showww")
    if (rol === 1 || rol === 2) {
      return (
        <li>
          <Link className="List_return" to="/list">
            Admin Lists
          </Link>
        </li>
      )
    }
  }

  const OptionsCategories = categories.map((e, i) => {
    return (
      <option key={i} value={e.name}>
        {e.name}
      </option>
    );
  });

  const OptionsTypes = types?.map((e, i) => {
    return (
      <option key={i} value={e.name}>
        {e.name}
      </option>
    );
  });

  const onChangeSearch = (e) => {
    dispatch(getSearch(e.target.value));
  };

  const onChangePrice = (e) => {
    e.preventDefault();
    dispatch(getPrice(e.target.value));
  };

  return (
    <div className="todo">
      <div className="navbar">
        <Link to="/">
          <div className="navbar__logo">
            <img
              className="img"
              src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
              alt="clothes-Shop"
              border="0"
            ></img>
          </div>
        </Link>
        <div className="cart__link">
          <span className="cart_Link_name">Categories</span>
          <select
            className="pintar"
            value={categoryValue}
            onChange={onSelectCategory}
          >
            <option value="none">All</option>
            {OptionsCategories}
          </select>
        </div>
        <div className="cart__link">
          <span className="cart_Link_name">Types</span>
          <select className="pintar" value={typeValue} onChange={onSelectTypes}>
            <option value="none">All</option>
            {OptionsTypes}
          </select>
        </div>
        <div className="cart__link">
          <span className="cart_Link_name">Price</span>
          <select className="pintar" onChange={onChangePrice}>
            <option value="none">-</option>
            <option value="H">Higher</option>
            <option value="L">Lower</option>
          </select>
        </div>
        <div className="SearchInput1">
          <input
            className="SearchInput"
            type="text"
            onChange={onChangeSearch}
            placeholder="Search products..."
          />
        </div>
        <ul className="navbar__links">
          <li className="saco">
            <Link to="/CheckoutPage">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCart
                    className="temp"
                    fontSize="large"
                    color="ligth"
                  />
                </Badge>
              </IconButton>
            </Link>
          </li>
          {showList()}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
