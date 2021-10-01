import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../stateManagement/actions/getAllProducts";
import "./insert.css";

const Insert = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    stock: true,
    types: [],
    category: [],
    product: [],
  });
  let product = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const handleChange = (e) => {
    setInput({
      ...input,
      products: [...input.id, e.target.value],
    });
  };
  const cerrarModalInsertar = () => {
    setInput({ modalInsertar: false });
  };
  const handleSelect = (e) => {
    setInput({
      ...input,
      name: [...input.name, e.target.value],
    });
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
        <div className="datos">
          <label>Products:</label>
          <select onChange={(e) => handleSelect(e)}>
            {product.map((prod) => (
              <option value={prod.name}>{prod.name}</option>
            ))}
          </select>
          <h4>{input.name}</h4>
        </div>
        <div className="insert_label">
          <label className="label_Insert">Name:</label>
          <input
            className="form-control"
            name="name"
            type="text"
            onChange={handleChange}
          />
          <label className="label_Insert">Price:</label>
          <input
            className="form-control"
            name="name"
            type="text"
            onChange={handleChange}
          />

          <label className="label_Insert">Description:</label>
          <input
            className="form-control"
            name="name"
            type="text"
            onChange={handleChange}
          />
          <label className="label_Insert">Stock:</label>
          <input
            className="form-control"
            name="name"
            type="text"
            onClick={handleChange}
          />

          <label className="label_Insert">Image:</label>
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
