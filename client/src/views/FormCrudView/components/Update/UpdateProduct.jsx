import React, { useEffect, useState  } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../../../stateManagement/actions/getAllCategories";
import { getAllsizes } from "../../../../stateManagement/actions/getAllsizes";
import { getAllTypes } from "../../../../stateManagement/actions/getAllTypes";
// import {putProduct} from "../../../../stateManagement/actions/putProduct"
import { useHistory } from "react-router-dom";


const validate = (input) => {
  let errors = {};
  if(!input.categories.length) {
    errors.categories = "Required field"
  } else if (!input.valueSize) {
    errors.sizes = "Required field enter a size";
  } else if (!input.name) {
    errors.name = "Required field enter a name";
  } else if ((!input.price)) {
    errors.price = "Required field. enter a value greater than zero";
  } else if (!input.description ) {
    errors.description = "Required field enter a Description";
  } else if (!input.stock) {
    errors.stock = "Required field enter a amount";
  } else if (!input.color) {
    errors.color = "Required field enter a color";
  }  if(!input.categories.length) {
    errors.categories = "Required field"
  }
  return errors;
};


// let obj = {
//   id:1,
//   name: "medias",
//   description: "medias largas",
//   price: "",
//   color: "rojo",  
//   stock: 15,
//   type_product: 5,
//   categories: [{id: 1, name: "rodrsdasdsadi"},{id: 2, name: "rodrsdsdi"},{id: 3, name: "rosdsaddri"}],
//   sizes: [{id: 1, name: "rodri"},{id: 2, name: "rodrigo"}],
// }




const Update = ({
  id=1,
  name="rodri", 
  price=200,
  description="sads",
  color="rojo",
  stock=1,
  type_product=2,
  type = {
    name: "pantalon"
  },
  categories=[{id: 2, name: "futbol"},{id: 5, name: "elegante"},{id: 4, name: "sport"}],
  sizes = [{id: 1, name: "big"},{id: 2, name: "medium"}],
  image=""
  
}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories()); 
    dispatch(getAllsizes());
    dispatch(getAllTypes()); 
    // dispatch(putProduct())   
  }, [dispatch]);

  const history = (useHistory())



  


  // console.log("*********************************************", mapCategories)
  let categoriess = useSelector((state) => state.categoriesReducer.categories);
  let sizess = useSelector((state) => state.sizesReducer.sizes);
  let types = useSelector((state) => state.typesReducer.types);
  const mapCategories = categories.map(e =>({
    value: e.id,
    label: e.name
  }));


  const mapSizes = sizes.map(e =>({
    value: e.id,
    label:e.name
  }));


  // const mapTypeFind =  types.map(e => {
  //   if(e.id === type_product) {
  //     return e.name
  //   }    
  // });
  // let nameType = "";
  // mapTypeFind.forEach(element => {
  //   if(element) {
  //    nameType = element
  //   }
  // });
  // // console.log("NOMBRE", nameType )
  
  
  const mapType = {value: type_product, label: type.name}

  // console.log("MAPTYPE", mapType)


  const [valueCate, setvalueCate] = useState(mapCategories);
  const [valueSize, setvalueSize] = useState(mapSizes);
  const [valueType, setvalueType] = useState(mapType);

  const [input, setInput] = useState({
    name,
    description,
    color,
    image,
    stock,
    type_product,
    categories: valueCate,
    sizes: valueSize,
    price
  })
  const [errors, setErrors] = useState({});

  // console.log("ESTADOOOOO",valueType)



  
  // // setvalueCate(mapCategories)
  
  const Options = categoriess.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });
  const Optionsize = sizess.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });
  const OptionType = types.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });


  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  };

  const onSelectChangeNew = (valueCate) => {
    let tipesEnv = "";
    if (valueCate) {
      tipesEnv = valueCate.map((e) => {
        return e.value;
      });
     
    }
    setvalueCate(valueCate);
    addcategories(tipesEnv);
  };

  
  const addcategories = (tipesEnv) => {
    setInput({
      ...input,
      categories: tipesEnv,
    });
  };
  

  const onSelectChangeNewSize = (valueSize) => {
    let tipesEnv = "";
    if (valueSize) {
      tipesEnv = valueSize.map((e) => {
        return e.value;
      });
    }
    setvalueSize(valueSize);
    addSizes(tipesEnv);
  };

  const addSizes = (tipesEnv) => {
    setInput({
      ...input,
      sizes: tipesEnv,
    });
  };

  const onSelectChangeNewType = (valueType) => {
    // let tipesEnv = "";
    // if (valueType) {
    //   // tipesEnv = valueType.map((e) => {
    //   //   return e.value;
    //   // });
    //   setvalueType(valueType);
    //   set
    // }

    setInput({
      ...input,
      type_Product: valueType.value,
    });

    setvalueType(valueType);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await postAllProducts(input);
    // alert("Product has edited correctly");
      let mapCategorie = input.categories.map(e => e.value);
      let mapSizes = input.sizes.map(e => e.value);

      let obj = {
        name: input.name,
        description: input.description,
        color:input.color,
        image:input.image,
        stock:input.stock,
        type_product:input.type_product,
        categories: mapCategorie,
        sizes: mapSizes,
        price:input.price
      }

      // dispatch(putProduct(obj));
      
      console.log("OBJ",obj);
      console.log("INPUT",input)
      
      alert("Successfully edited product")
      history.push("/list");

    
  };

  const cerrarModalInsertar = () => {
    setInput({ modalInsertar: false });
  };

  console.log(input)

  return (
    <div className="crud_form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="insertar">
          <div>
            <h3 className="h3_insert">Edit Product</h3>
          </div>
          <div className="insert_label">
            <label>Categories</label>
            <input name = "categories" type= "text" value = {id} readOnly />
            <Select
              name = "categories"
              value={valueCate}
              options={Options}
              isMulti
              onChange={(e) => onSelectChangeNew(e)}
            />
          </div>
            {errors.categories && <p className="error">{errors.categories}</p>}
          <div className="insert_label">
            <label>Zise</label>
            <Select
              value={valueSize}
              options={Optionsize}
              isMulti
              onChange={(e) => onSelectChangeNewSize(e)}
            />
          </div>
          <div className="insert_label">
            <label>Type</label>
            <Select
              value={valueType}
              options={OptionType}
              onChange={(e) => onSelectChangeNewType(e)}
            />
          </div>
          <div className="insert_label">
            <label className="label_Insert">Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
              value = {input.name}
            />
            {errors.name && <p className ="error">{errors.name}</p>}
            <label className="label_Insert">Price:</label>
            <input
              className="form-control"
              name="price"
              type="number"
              min= "0"              
              onChange={handleChange}
              value={input.price}
            />
            {errors.price && <p className= "error">{errors.price}</p>}

            <label className="label_Insert">Description:</label>
            <input
              className="form-control"
              name="description"
              type="text"
              onChange={handleChange}
              value = {input.description}
            />
            {errors.description && <p className ="error">{errors.description}</p>}
            
            <label className="label_Insert">Stock:</label>
            <input
              className="form-control"
              name="stock"
              type="number"
              min="0" 
              onChange={handleChange}
              value = {input.stock}
            />
            {errors.stock && <p className = "error">{errors.stock}</p>}
            <label className="label_Insert">Color:</label>
            <input
              className="form-control"
              name="color"
              type="text"
              onChange={handleChange}
              value = {input.color}
            />
            {errors.color && <p className="error">{errors.color}</p>}

            <label className="label_Insert">Image:</label>
          </div>
          <div className="crud_Form_Insert_cancelar">
            <button 
            className="crud_Form_Insert_cancelar_button" 
            type="submit"
            disabled = {!(input.name && input.description && input.color  && input.stock  && input.type_product && input.sizes.length && input.categories.length && input.price)}>
              Editar
            </button>
            <button
              className="crud_Form_Insert_cancelar_button_danger"
              onClick={(e) => cerrarModalInsertar(e)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;