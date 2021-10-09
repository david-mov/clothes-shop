import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostSize } from "../../../../stateManagement/actions/postSize";
import { Link } from "react-router-dom";
import "./Insert.css";

const InsertSizes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostSize());
  }, [dispatch]);
  const [input, setInput] = useState({
    name: "",
  });
  let sizesInput = useSelector((state) => state.sizesReducer.sizes);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sizesExits = sizesInput.find((e) => e.name === input.name);
    if (!sizesExits) {
      dispatch(PostSize(input));
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
          <div>
            <h3 className="h3_insert">Insert Size</h3>
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

export default InsertSizes;
