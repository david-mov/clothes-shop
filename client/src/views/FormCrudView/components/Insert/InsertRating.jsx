import React, { useState, } from "react";
import { useDispatch} from "react-redux";
import { postRatingDetail } from "../../../../stateManagement/actions/postRatingDetail";
import { useHistory, useParams } from "react-router";



const InsertRating = (id,) => {
  const dispatch = useDispatch();
  const  {productId}  = useParams();  
  const history = useHistory();

  const [input, setInput] = useState({
    amount: 1,
    comment: ""
  });
  
  const handleChange = async (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    let obj = {
      amount : parseInt(input.amount) ,
      Rating_product:parseInt(productId),
      Rating_User: id.id,
      comment: input.comment
    }
  
    dispatch(postRatingDetail(obj));
    alert("Rating has inserted correctly");
    setInput({ 
      amount: "",
      comment: "" 
    });
    
  };

  const cerrarModalInsertar = () => {
    history.push(`/product/${productId}`)
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
                min="1"
                onChange={handleChange}
                value={input.amount}
                step="1"
                pattern="[1-5]+"
                
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
