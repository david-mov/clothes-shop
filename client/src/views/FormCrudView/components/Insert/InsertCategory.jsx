import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Insert.css";
import { PostCategories } from "../../../../stateManagement/actions/postCategories";

const InsertCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostCategories());
  }, [dispatch]);
  const [input, setInput] = useState({
    name: "",
  });
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoriaexiste = categories.find((e) => e.name === input.name);
    if (!categoriaexiste) {
      dispatch(PostCategories(input));
      alert("Product has created correctly");
      setInput({
        name: "",
      });
    } else {
      alert("No se puede crear,intenta con otro");
    }
  };
  return (
    <div className="crud_form">
      <form>
        <div className="insertar">
          <div className="insert_label">
            <label className="label_Insert">Name</label>
            <input
              className="form-control"
              name="name"
              type="text"
              value={input.name}
              onChange={handleChange}
            />
            <div className="crud_Form_Insert_cancelar">
              <button
                type="submit"
                className="crud_Form_Insert_cancelar_button"
                onClick={(e) => handleSubmit(e)}
                disabled={!input.name}
              >
                Insert
              </button>
              <Link to="/list">
                <button className="crud_Form_Insert_cancelar_button_danger">
                  Return
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InsertCategories;
