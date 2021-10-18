import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllsizes } from "../../../../stateManagement/actions/getAllsizes";
import "./update.css";
import { useHistory} from "react-router-dom";
import { putSize } from "../../../../stateManagement/actions/putSize";

const UpdateZises = ({name, id}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllsizes());     
  }, [dispatch]); 

  const history = useHistory();

  let sizes = useSelector((state) => state.sizesReducer.sizes);

  const [input, setInput] = useState({
    name,
  });  
  
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let namesSizes = sizes.map((e) => e.name);
    //BUSCO SI HAY ALGUNA CATEGORIA QUE ESTE REPETIDA
    let repetida = namesSizes.find(
      (e) => e === input.name && input.name !== name
    );

    if (repetida) {
      alert(
        "El tamaño que esta ingresando ya se encuentra en nuestra base de datos. por favor ingrese otro"
      );
    } else {
      
      let obj = {
        name: input.name,
      };
      
      dispatch(putSize(id,obj));
      
      setInput({});
  
      history.push("/list");
      alert("Excelente");
    }
    

  };

  const cerrarModalInsertar = () => {
    setInput({});
    history.push("/list");
  };
  
  return (
    <div className="crud_form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="insertar">
          <div className="insert_label">
            <label className="label_Insert">Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
              value={input.name}
            />
           
          </div>
          <div className="crud_Form_Insert_cancelar">
            <button
              className="crud_Form_Insert_cancelar_button"
              type="submit"
              disabled={!input.name}
            >
              Editar
            </button>
            <button
              className="crud_Form_Insert_cancelar_button_danger"
              onClick={cerrarModalInsertar}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateZises;
