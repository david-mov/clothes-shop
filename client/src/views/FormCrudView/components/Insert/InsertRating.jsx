import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const InsertRating = (id) => {
  const dispatch = useDispatch();
 
  const [input, setInput] = useState({
    amount: 0,
    coment: ""
  });
  
  const handleChange = async (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
   
      // dispatch(PostTypes(input));
      alert("Rating has inserted correctly");
      setInput({ 
        amount: "",
        coment: "" 
      });
    
  };

  const cerrarModalInsertar = () => {
    alert("canselado")
  };

  return (
    <div>
      <div className="crud_form">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          
          <div className="insertar">

            <div className="insert_label">
              <label className="label_Insert">Rating:</label>
              <input
                className="form-control"
                name="amount"
                type="number"
                max="5"
                min="0"
                onChange={handleChange}
                value={input.amount}
                step="1"
                pattern="[0-5]+"
                
              />

            </div>

            <div className="insert_label">
              <label className="label_Insert">Comment:</label>
              <textarea
                className="form-control"
                name="coment"
                type="text"
                value={input.coment}                
                onChange={handleChange}
            />

            </div> 

            <div className="crud_Form_Insert_cancelar">
              <button
                className="crud_Form_Insert_cancelar_button"
                type="submit"
                disabled={!input.amount}
              >
                Insert
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
    </div>
  );
};

export default InsertRating;
