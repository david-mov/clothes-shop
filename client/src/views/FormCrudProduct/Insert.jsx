import React, { useState } from "react";

const data = [
  { id: 1, name: "", stock: "", description: "" },
  { id: 2, name: "", stock: "", description: "" },
  { id: 3, name: "", stock: "", description: "" },
  { id: 4, name: "", stock: "", description: "" },
  { id: 5, name: "", stock: "", description: "" },
  { id: 6, name: "", stock: "", description: "" },
  { id: 7, name: "", stock: "", description: "" },
];

const Insert = () => {
  // const product = useSelector(state => state.products)
  const [input, setInput] = useState({
    form: { id: "", name: "", price: "", stock: "", description: "" },
    data: data,
    modalInsertar: false,
  });

  const handleChange = (e) => {
    setInput({
      form: {
        ...input.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  const cerrarModalInsertar = () => {
    setInput({ modalInsertar: false });
  };
  const insert = () => {
    var valorNuevo = { ...input.data.id };
    valorNuevo = input.data.length + 1;
    var lista = input.data;
    lista.push(valorNuevo);
    setInput({ modalInsertar: false, data: lista });
  };
  console.log("insert", insert);
  return (
    <div className="crud_form">
      <button>Insert new Product</button>
      <div isOpen={input.modalInsertar} className="insertar">
        <header>
          <div>
            <h3>Insertar Personaje</h3>
          </div>
        </header>
        <div>
          <form>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={data.length + 1}
            />
          </form>

          <form>
            <label>Product:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
            />
          </form>
          <form>
            <label>Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
            />
          </form>
        </div>

        <div>
          <button color="primary" onClick={() => insert()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insert;
