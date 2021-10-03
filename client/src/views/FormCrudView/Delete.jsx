import React, { useState } from "react";
import { useSelector } from "react-redux";

const Delete = () => {
  const [input, setInput] = useState();
  let product = useSelector((state) => state.products);
  console.log("desde el delete", product);

  const deleteProduct = (id) => {
    setInput(product.filter((user) => user.id !== id));
    return alert("Estas seguro que desea eliminar ");
  };
  return (
    <div>
      <form onClick={() => deleteProduct()}>
        <div className="flex-large">
          <h2>View users</h2>
          <div
            product={input}
            deleteProduct={deleteProduct}
            // editRow={editRow}
          />
        </div>

        <button>Delete no me renderiza</button>
      </form>
    </div>
  );
};

export default Delete;
