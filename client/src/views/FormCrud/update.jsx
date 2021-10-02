import {getAllProducts} from "../../stateManagement/actions/getAllProducts";
import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";


 const Update = () => {
  const dispatch = useDispatch();  
  const products = useSelector(state => state.products); 
  useEffect(() => {
    dispatch(getAllProducts())
  },[dispatch]);
  const [input, setInput] = useState({
    
    name: "",
    price: "",
    description: "",
    color: "",
    stock: "",
    typeId: "",
    categories: [],
    size: [],
    imageId: [],          
  }) 

  const handleChange = (e) => {
    e.preventDefaul();
    setInput({
      ...input,       
      [e.target.name]: e.target.value     
      
    });
  };
  
  return (
    <div>
      <form>
        <input type= "text" name= "name" value= {input.name} onChange={e => handleChange(e)} /> 
        <input type= "text" name = "price" value={input.price} onChange={e => handleChange(e)}/>
        

      </form>
    </div>
  )
}

export default Update;
// form : {
//   name: "",
//   price: "",
//   description: "",
//   color: "",
//   stock: "",
//   typeId: "",
//   categories: [],
//   size: [],
//   imageId: [],      
// }