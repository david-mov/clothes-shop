import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { postAllProducts } from "../../../../stateManagement/actions/postAllProducts";
import { getAllCategories } from "../../../../stateManagement/actions/getAllCategories";
import { getAllsizes } from "../../../../stateManagement/actions/getAllsizes";
import { getAllTypes } from "../../../../stateManagement/actions/getAllTypes";
import "./Insert.css";
import { Link } from "react-router-dom";

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Required field enter a name";
  } else if (!input.price) {
    errors.price = "Required field enter a Number";
  } else if (!input.description) {
    errors.description = "Required field enter a Description";
  } else if (!input.stock) {
    errors.stock = "Required field enter a Number";
  } else if (!input.color) {
    errors.color = "Required field enter a color";
  } else if (!input.valueSize) {
    errors.valueSize = "Campo requerido ingresa un Rating";
  }
  return errors;
};

const Insert = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllsizes());
    dispatch(getAllTypes());
    dispatch(postAllProducts());
  }, [dispatch]);
  const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
    color: "",
    stock: "",
    type_product: 0,
    categories: [],
    sizes: [],
    images: [],
  });

  let categories = useSelector((state) => state.categoriesReducer.categories);
  let sizes = useSelector((state) => state.sizesReducer.sizes);
  let types = useSelector((state) => state.typesReducer.types);
  const [valueCate, setvalueCate] = useState("C");
  const [valueSize, setvalueSize] = useState("S");
  const [valueType, setvalueType] = useState("T");
  const [errors, setErrors] = useState({});
  const Options = categories.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });
  const Optionsize = sizes.map((e) => {
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
  const onSelectChangeNew = (valueCate) => {
    var tipesEnv = "";
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
    var sizesEnv = "";
    if (valueSize) {
      sizesEnv = valueSize.map((e) => {
        return e.value;
      });
    }
    setvalueSize(valueSize);
    addSizes(sizesEnv);
    setErrors(
      validate({
        ...input,
        sizes: valueSize,
      })
    );
  };
  const addSizes = (tipesEnv) => {
    setInput({
      ...input,
      sizes: tipesEnv,
    });
  };
  const onSelectChangeNewType = (valueType) => {
    setInput({
      ...input,
      type_product: valueType.value,
    });

    setvalueType(valueType);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const cerrarModalInsertar = () => {
    setInput({ modalInsertar: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(postAllProducts(input));
    alert("Product has created correctly");
    setvalueCate("C");
    setvalueSize("S");
    setvalueType("T");
    return setInput({
      name: "",
      price: "",
      description: "",
      color: "",
      stock: "",
      type_product: 0,
      categories: [],
      sizes: [],
      images: [],
    });
  };
  // console.log("datosss", input);
  return (
    <div>
      <form className="crud_form">
        <div className="insertar">
          <div></div>
          <div className="insert_label">
            <label>Categories</label>
            <Select
              className="selected"
              value={valueCate}
              options={Options}
              isMulti
              onChange={(e) => onSelectChangeNew(e)}
            />
          </div>
          <div className="insert_label">
            <label>Zise</label>
            <Select
              className="selected"
              value={valueSize}
              options={Optionsize}
              isMulti
              onChange={(e) => onSelectChangeNewSize(e)}
            />
          </div>
          {errors.sizes && <p>{errors.sizes}</p>}
          <div className="insert_label">
            <label>Type</label>
            <Select
              className="selected"
              value={valueType}
              options={OptionType}
              onChange={(e) => onSelectChangeNewType(e)}
            />
          </div>
          <div className="insert_label">
            <label className="label_Insert">Name</label>
            <input
              className="form-control"
              name="name"
              type="text"
              value={input.name}
              onChange={handleChange}
            />
            {errors.name && <p className="p">{errors.name}</p>}
            <label className="label_Insert">Price</label>
            <input
              className="form-control"
              name="price"
              type="number"
              value={input.price}
              onChange={handleChange}
              step="1"
              pattern="[0-9]+"
            />
            {errors.price && <p className="p">{errors.price}</p>}
            <label className="label_Insert">Description</label>
            <textarea
              className="form-control"
              name="description"
              type="text"
              value={input.description}
              pattern="[A-Za-z]{4-16}"
              onChange={handleChange}
            />
            {errors.description && <p className="p">{errors.description}</p>}
            <label className="label_Insert">Stock</label>
            <input
              className="form-control"
              name="stock"
              type="number"
              value={input.stock}
              step="1"
              pattern="[0-9]+"
              onChange={handleChange}
            />
            {errors.stock && <p className="p">{errors.stock}</p>}
            <label className="label_Insert">Color</label>
            <input
              className="form-control"
              name="color"
              type="text"
              value={input.color}
              onChange={handleChange}
            />
            {errors.color && <p className="p">{errors.color}</p>}
          </div>
          <div className="crud_Form_Insert_cancelar">
            <button
              type="submit"
              className="crud_Form_Insert_cancelar_button"
              onClick={(e) => handleSubmit(e)}
              disabled={
                !(
                  input.categories.length &&
                  input.sizes.length &&
                  input.name &&
                  input.price &&
                  input.stock &&
                  input.description &&
                  input.color &&
                  input.type_product
                )
              }
            >
              Insert
            </button>
            <Link to="/list">
              <button
                className="crud_Form_Insert_cancelar_button_danger"
                onClick={(e) => cerrarModalInsertar(e)}
              >
                Return
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Insert;
