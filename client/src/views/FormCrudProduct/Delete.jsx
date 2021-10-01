import React, { useState } from "react";
import Insert from "./Insert";

const data = [
  { id: 1, name: "", stock: "", description: "" },
  { id: 2, name: "", stock: "", description: "" },
  { id: 3, name: "", stock: "", description: "" },
  { id: 4, name: "", stock: "", description: "" },
  { id: 5, name: "", stock: "", description: "" },
  { id: 6, name: "", stock: "", description: "" },
  { id: 7, name: "", stock: "", description: "" },
];

const Delete = () => {
  const [input, setInput] = useState(data);
  // Eliminar usuario
  const deleteProduct = (id) => {
    setInput(data.filter((user) => user.id !== id));
    //return alert("Estas seguro que desea eliminar ");
  };
  return (
    <div>
      <form onClick={() => deleteProduct()}>
        <div className="flex-large">
          <h2>View users</h2>
          <Insert
            product={input}
            deleteProduct={deleteProduct}
            // editRow={editRow}
          />
        </div>

        <button>Delete</button>
      </form>
    </div>
  );
};

export default Delete;
