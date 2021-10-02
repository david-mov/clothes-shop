import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
//import { postAllProducts } from "../../stateManagement/actions/postAllProducts";
import { getAllCategories } from "../../stateManagement/actions/getAllCategories";
import { getAllsizes } from "../../stateManagement/actions/getAllsizes";
import { getAllTypes } from "../../stateManagement/actions/getAllTypes";

const Insert = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllsizes());
    dispatch(getAllTypes());
  }, [dispatch]);
  const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
    color: "",
    stock: "",
    type_Product: 0,
    categories: [],
    sizes: [],
    images: [],
  });
  let categories = useSelector((state) => state.categories);
  let sizes = useSelector((state) => state.sizes);
  let types = useSelector((state) => state.sizes);
  const [valueCate, setvalueCate] = useState(null);
  const [valueSize, setvalueSize] = useState(null);
  const [valueType, setvalueType] = useState(null);
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
      type_Product: valueType.value,
    });

    setvalueType(valueType);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const cerrarModalInsertar = () => {
    setInput({ modalInsertar: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Product has created correctly");
    setInput({
      name: "",
      description: "",
      color: "",
      image: "",
      stock: "",
      type_product: 0,
      categories: [],
      sizes: [],
    });
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
            <h3 className="h3_insert">Insert Product</h3>
          </div>
          <div className="insert_label">
            <label>Categories</label>
            <Select
              value={valueCate}
              options={Options}
              isMulti
              onChange={(e) => onSelectChangeNew(e)}
            />
          </div>
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
            />
            <label className="label_Insert">Price:</label>
            <input
              className="form-control"
              name="price"
              type="text"
              onChange={handleChange}
            />

            <label className="label_Insert">Description:</label>
            <input
              className="form-control"
              name="description"
              type="text"
              onChange={handleChange}
            />
            <label className="label_Insert">Stock:</label>
            <input
              className="form-control"
              name="stock"
              type="number"
              min="0"
              onClick={handleChange}
            />
            <label className="label_Insert">Color:</label>
            <input
              className="form-control"
              name="color"
              type="text"
              onClick={handleChange}
            />

            <label className="label_Insert">Image:</label>
          </div>
          <div className="crud_Form_Insert_cancelar">
            <button className="crud_Form_Insert_cancelar_button" type="submit">
              Insert
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

export default Insert;
