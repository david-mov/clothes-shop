import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DetailInformeProducto from "./components/DetailInfoUni";
import ReportProductU from './components/TableReportU';


const DetailsInformeP = () => {

  const [vista, setvista] = useState({label: "Graphic product", value: "Graphic product"})
  const [label, setlabel] = useState("Graphic product")

  
  const FilterStateInit = () => { 
      
    switch (label){

      case "Graphic Product":
        return (<DetailInformeProducto />)
      case "Table Product":          
        return (<ReportProductU />)     
      default:            
        return (<DetailInformeProducto />)
    }
    
}
  const OptionSelect = [
    {label: "Graphic Product", value: "Graphic Product"},
    {label: "Table Product", value: "Table Product"}
   
  ]

  const handleChangeSelect = (vista) =>{
    setvista(vista);
    setlabel(vista.label);
  }

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
              onChange= {handleChangeSelect}
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

export default DetailsInformeP;