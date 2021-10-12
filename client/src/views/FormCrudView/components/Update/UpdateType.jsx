import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../../../stateManagement/actions/getAllCategories";
import { getAllsizes } from "../../../../stateManagement/actions/getAllsizes";
import { getAllTypes } from "../../../../stateManagement/actions/getAllTypes";
import "./update.css";
import { useHistory, useParams } from "react-router-dom";
// import { putCategory } from "../../../../stateManagement/actions/putCategory";
// import {putCategory} from "../../../../stateManagement/actions/putCategory";


const UpdateType = ({id = 2, name = 'Sweater', enabled = true}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllsizes());
    dispatch(getAllTypes());
    // dispatch(getUpdateProductDetails(productId));
    // dispatch(putProduct())
  }, [dispatch]);

  const { productId } = useParams();

  // const product = useSelector(state => state.productsReducer.productUpdateDetails);
  // console.log("data desde el detalle de update", product)

  const history = (useHistory())
  
  let typess = useSelector((state) => state.typesReducer.types); 

  const [input, setInput] = useState({
    name    
  })
  const [errors, setErrors] = useState({}); 
  
  

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });    
  };   

  const handleSubmit = async (e) => {
    e.preventDefault();    
    let namesTypes = typess.map(e => e.name);   
    //BUSCO SI HAY ALGUNA CATEGORIA QUE ESTE REPETIDA
    let repetida = namesTypes.find(e => e === input.name && input.name !== name)     
    
    if(repetida) {
      alert("El tipo que esta ingresando ya se encuentra en nuestra base de datos. por favor ingrese otra")
    }else {
      alert("Excelente")
      
      let obj = {
        name: name,
      }
      console.log("OBJ", obj)
      // dispatch(putCategory(id,obj));
      // history.push("/list");
    }    
      
      setInput({}) 

  };

  

  const cerrarModalInsertar = () => {
    setInput({})    
    history.push("/list")
  };

  console.log(input);

  return (
    <div className="crud_form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="insertar">
          <div>
            <h3 className="h3_insert">Edit Category</h3>
          </div>  
          
          <div className="insert_label">
            <label className="label_Insert">Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
              value={input.name}
            />
            {errors.name && <p className ="error">{errors.name}</p>}            
          </div>
          <div className="crud_Form_Insert_cancelar">
            <button 
            className="crud_Form_Insert_cancelar_button" 
            type="submit"
            disabled = {!(input.name)}>
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

export default UpdateType;
