import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostTypes } from "../../../../stateManagement/actions/postTypes";
import { getAllTypes } from "../../../../stateManagement/actions/getAllTypes";
import "./Insert.css";

const InsertTypes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostTypes());
    dispatch(getAllTypes());
  }, [dispatch]);
  const [input, setInput] = useState({
    name: "",
  });
  let typesInput = useSelector((state) => state.typesReducer.types);
  const handleChange = async (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const typesExits = typesInput.filter((e) => e.name.includes(input.name));
    if (typesExits.length === 0) {
      dispatch(PostTypes(input));
      alert("Product has created correctly");
      setInput({ name: "" });
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
              onChange={handleChange}
            />
            <div className="crud_Form_Insert_cancelar">
              <button
                type="submit"
                className="crud_Form_Insert_cancelar_button"
                onClick={(e) => handleSubmit(e)}
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

export default InsertTypes;
