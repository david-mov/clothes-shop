import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./insert.css";
const Insert = () => {
  const [input, setInput] = useState({
    id: "",
    name: "",
    description: "",
    released: "",
    image: "",
    stock: true,
    types: [],
    category: [],
    product: [],
  });
  let product = useSelector((state) => state.products);

  const handleChange = (e) => {
    setInput({
      ...input,
      products: [...input.id, e.target.value],
    });
  };
  const cerrarModalInsertar = () => {
    setInput({ modalInsertar: false });
  };
  const insert = () => {
    var valorNuevo = { ...input.product };

    valorNuevo = input.product.length + 1;
    var lista = input.product;

    lista.push(valorNuevo);
    setInput({ modalInsertar: false, name: lista });
  };

  return (
    <div className="crud_form">
      <div isOpen={input.modalInsertar} className="insertar">
        <div>
          <h3 className="h3_insert">Insert Product</h3>
        </div>

        <div className="insert_label">
          <label className="label_Insert">Id:</label>

          <input
            className="form-control"
            readOnly
            type="text"
            value={product.length + 1}
          />

          <label className="label_Insert">Product:</label>
          <input
            className="form-control"
            name="name"
            type="text"
            onChange={handleChange}
          />

          <label className="label_Insert">Name:</label>
          <input
            className="form-control"
            name="name"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="crud_Form_Insert_cancelar">
          <button
            className="crud_Form_Insert_cancelar_button"
            onClick={() => insert()}
          >
            Insert
          </button>
          <button
            className="crud_Form_Insert_cancelar_button_danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insert;
