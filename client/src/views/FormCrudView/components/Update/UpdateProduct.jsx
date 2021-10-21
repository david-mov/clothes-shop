import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../../../stateManagement/actions/getAllCategories";
import { getAllsizes } from "../../../../stateManagement/actions/getAllsizes";
import { getAllTypes } from "../../../../stateManagement/actions/getAllTypes";
import "./update.css";
import { useHistory, Link } from "react-router-dom";
import { putProduct } from "../../../../stateManagement/actions/putProduct";

const validate = (input) => {
  let errors = {};

  if (!input.categories) {
    errors.categories = "Required field";
  } else if (!input.valueSize) {
    errors.sizes = "Required field enter a size";
  } else if (!input.name) {
    errors.name = "Required field enter a name";
  } else if (!input.price) {
    errors.price = "Required field. enter a value greater than zero";
  } else if (!input.description) {
    errors.description = "Required field enter a Description";
  } else if (!input.stock) {
    errors.stock = "Required field enter a amount";
  } else if (!input.color) {
    errors.color = "Required field enter a color";
  }
  return errors;
};

const Update = ({
  name,
  categories,
  price,
  description,
  color,
  sizes,
  type,
  type_product,
  stock,
  productId,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllsizes());
    dispatch(getAllTypes());
  }, [dispatch]);

  let categoriess = useSelector((state) => state.categoriesReducer.categories);
  let sizess = useSelector((state) => state.sizesReducer.sizes);
  let types = useSelector((state) => state.typesReducer.types);

  const mapCategories = categories.map((e) => ({
    value: e.id,
    label: e.name,
  }));

  const mapSizes = sizes.map((e) => ({
    value: e.id,
    label: e.name,
  }));

  

  const mapType = { value: type_product, label: type.name };
  console.log("mapTYpe", type)
  const [valueCate, setvalueCate] = useState(mapCategories);
  const [valueSize, setvalueSize] = useState(mapSizes);
  const [valueType, setvalueType] = useState(mapType);

  const [input, setInput] = useState({
    name,
    description,
    color,
    stock,
    type_product,
    type: valueType.label,
    categories: valueCate.map(e => e.value),
    sizes: valueSize?.map(e => e.value),
    price,
  });

  const [errors, setErrors] = useState({});

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

  const OptionType = types?.map((e) => {
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

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
    setInput({
      ...input,
      type_product: valueType.value,
      type: valueType.label
    });

    setvalueType(valueType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();        
    
    dispatch(putProduct(productId, input));

    alert("Successfully edited product");
    history.push("/list");
  };

  const cerrarModalInsertar = () => {
    // setInput({});

    history.push("/list");
  };

  console.log("INPUt", input);

  return (
    <div>
      <div className="todo">
        <div className="navbar">
          <div className="navbar__logo">
            <img
              className="img"
              src="https://i.ibb.co/nD1CCgm/clothes-Shop.png"
              alt="clothes-Shop"
              border="0"
            ></img>
          </div>
          <div className="cart__link">
            <h2>Edit Product</h2>
          </div>
          <div className="cart__link">
            <ul className="navbar__links">
              <li className="saco">
                <Link to="/list" className="cart__link">
                  <i class="fas fa-arrow-left fa-1x"></i>
                  <span>
                    Go to back <span className="cartlogo__badge">{}</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="crud_form">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="insertar">
            <div className="insert_label">
              <Select
                className="selected"
                name="categories"
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
                className="selected"
                value={valueSize}
                options={Optionsize}
                isMulti
                onChange={(e) => onSelectChangeNewSize(e)}
              />
            </div>
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
              <label className="label_Insert">Name:</label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={handleChange}
                value={input.name}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <label className="label_Insert">Price:</label>
              <input
                className="form-control"
                name="price"
                type="number"
                min="0"
                onChange={handleChange}
                value={input.price}
              />
              {errors.price && <p className="error">{errors.price}</p>}

              <label className="label_Insert">Description:</label>
              <input
                className="form-control"
                name="description"
                type="text"
                onChange={handleChange}
                value={input.description}
              />

              {errors.description && (
                <p className="error">{errors.description}</p>
              )}

              <label className="label_Insert">Stock:</label>
              <input
                className="form-control"
                name="stock"
                type="number"
                min="0"
                onChange={handleChange}
                value={input.stock}
              />
              {errors.stock && <p className="error">{errors.stock}</p>}
              <label className="label_Insert">Color:</label>
              <input
                className="form-control"
                name="color"
                type="text"
                onChange={handleChange}
                value={input.color}
              />
              {errors.color && <p className="error">{errors.color}</p>}

              <label className="label_Insert">Image:</label>
            </div>
            <div className="crud_Form_Insert_cancelar">
              <button
                className="crud_Form_Insert_cancelar_button"
                type="submit"
                disabled={
                  !(
                    input.name &&
                    input.description &&
                    input.color &&
                    input.stock &&
                    input.type_product &&
                    input.sizes &&
                    input.categories &&
                    input.price
                  )
                }
              >
                Editar
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
    </div>
  );
};

export default Update;
