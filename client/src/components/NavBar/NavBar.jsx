import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import "./NavBar.css"

function NavBar() {

 const onChangeCategory = (e) => {
    e.preventDefault()
 }

 const onChangePopulation = (e) => {
    e.preventDefault()
 }

 const onChangePrice = (e) => {
     e.preventDefault()
 }

 //const Navbar = ({ click }) => {
   // const cart = useSelector((state) => state.cart);
   // const { cartItems } = cart;
 //}
 //const getCartCount = () => {
   // return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
 // };

    return (
        <div>
             <div className="navbar">
            <div className="navbar__logo h2" >
            <img className="img" src="https://i.ibb.co/jwF67rm/clothes-Shop.png" alt="clothes-Shop" border="0"></img>
            </div>
            <div className="cart__link">
            <select className="" onChange={onChangeCategory}>
                <optgroup className="" label="Category Order">
                    <option value="none">Category</option>
                    <option value="">hombre</option>
                    <option value="">mujer</option>
                </optgroup>
            </select>
        </div>
        <div className="cart__link">
            <select className="pintar" onChange={onChangePopulation}>
                <optgroup className="" label="Type Order">
                    <option value="none">Type</option>
                    <option value="">zapatillas</option>
                    <option value="">pantalon</option>
                </optgroup>
            </select>
        </div>
        <div className="cart__link">
            <select className="pintar" onChange={onChangePrice}>
                <optgroup className="" label="Order by Price">
                    <option value="none">Price</option>
                    <option value="">Higher</option>
                    <option value="">Lower</option>
                </optgroup>
            </select>
        </div>
        <div className="navbar__links">
            Search
        </div>
        <div className="SearchInput">
                <input type="text" placeholder="Search..." className=""/>
        </div>
        <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
        </div>
        </div>
    )
}

export default NavBar