import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../../../stateManagement/actions/getAllCategories";
import { getAllsizes } from "../../../../stateManagement/actions/getAllsizes";
import { getAllTypes } from "../../../../stateManagement/actions/getAllTypes";
import "./update.css";
import { useHistory, useParams } from "react-router-dom";
// import { putCategory } from "../../../../stateManagement/actions/putCategory";
// import {putCategory} from "../../../../stateManagement/actions/putCategory";


const UpdateZises = ({id = 1, name = 'XXS'}) => {
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
  
  let sizess = useSelector((state) => state.sizesReducer.sizes);

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
    let namesSizes = sizess.map(e => e.name);   
    //BUSCO SI HAY ALGUNA Size QUE ESTE REPETIDA
    let repetida = namesSizes.find(e => e === input.name && input.name !== name)     
    console.log("namesSizes",namesSizes)
    if(repetida) {
      alert("El tamaño que esta ingresando ya se encuentra en nuestra base de datos. por favor ingrese otro")
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
            <h3 className="h3_insert">Edit Size</h3>
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

export default UpdateZises;
