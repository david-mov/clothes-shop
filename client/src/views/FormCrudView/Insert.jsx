import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { postAllProducts } from "../../stateManagement/actions/postAllProducts";
import { getAllCategories } from "../../stateManagement/actions/getAllCategories";
import { getAllsizes } from "../../stateManagement/actions/getAllsizes";
import { getAllTypes } from "../../stateManagement/actions/getAllTypes";
import "./insert.css";

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Required field enter a name";
  } else if (!input.price) {
    errors.price = "Required field enter a Price";
  } else if (!input.description) {
    errors.description = "Required field enter a Description";
  } else if (!input.stock) {
    errors.stock = "Required field enter a amount";
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

  let categories = useSelector((state) => state.categories);
  let sizes = useSelector((state) => state.sizes);
  let types = useSelector((state) => state.types);
  const [valueCate, setvalueCate] = useState(null);
  const [valueSize, setvalueSize] = useState(null);
  const [valueType, setvalueType] = useState(null);
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
    var tipesEnv = "";
    if (valueSize) {
      tipesEnv = valueSize.map((e) => {
        return e.value;
      });
    }
    setvalueSize(valueSize);
    addSizes(tipesEnv);
    setErrors(
      validate({
        ...input,
        [valueSize.target.name]: valueSize.target.value,
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

  return (
    <div className="crud_form">
      <form>
        <div className="insertar">
          <div>
            <h3 className="h3_insert">Insert Product</h3>
          </div>
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
            {errors.name && <p>{errors.name}</p>}
            <label className="label_Insert">Price</label>
            <input
              className="form-control"
              name="price"
              type="text"
              value={input.price}
              onChange={handleChange}
            />
            {errors.price && <p>{errors.price}</p>}
            <label className="label_Insert">Description</label>
            <input
              className="form-control"
              name="description"
              type="text"
              value={input.description}
              onChange={handleChange}
            />
            {errors.description && <p>{errors.description}</p>}
            <label className="label_Insert">Stock</label>
            <input
              className="form-control"
              name="stock"
              type="number"
              min="0"
              onClick={handleChange}
            />
            {errors.stock && <p>{errors.stock}</p>}
            <label className="label_Insert">Color</label>
            <input
              className="form-control"
              name="color"
              type="text"
              value={input.color}
              onChange={handleChange}
            />
            {errors.color && <p>{errors.color}</p>}
          </div>
          <div className="crud_Form_Insert_cancelar">
            <button
              type="submit"
              className="crud_Form_Insert_cancelar_button"
              onClick={(e) => handleSubmit(e)}
            >
              Insert
            </button>
            <button
              className="crud_Form_Insert_cancelar_button_danger"
              onClick={(e) => cerrarModalInsertar(e)}
            >
              Return
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Insert;
