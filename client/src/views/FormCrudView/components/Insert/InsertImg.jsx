import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getUpdateProductDetails } from "../../../../stateManagement/actions/getUpdatePDetail";
import { postAllImagesProducts } from "../../../../stateManagement/actions/postAllImagesProducts";
import "./Insert.css";

export default function AddImgProduct({ id, name }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(getUpdateProductDetails(productId));
  }, [dispatch, productId]);
  const product = useSelector(
    (state) => state.productsReducer.productUpdateDetails
  );

  const [file, setfile] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", file);
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!allowedExtensions.exec(file.name)) {
      alert(
        `"Please upload file having extensions .jpeg/.jpg/.png/.gif only, your file is ${file.name}`
      );
      file.value = "";
      return false;
    }
    dispatch(postAllImagesProducts(productId, formData));
    alert("Successfully insert image");
    history.push("/list");
  };

  const InputChange = (e) => {
    setfile(e.target.files[0]);
  };

  return (
    <div className="crud_form">
      <form className="inserImage" onSubmit={onFormSubmit}>
        <input value={id} hidden />
        <label className="Inser_Img">
          <h3>Name Product</h3>
        </label>
        <label className="Inser_Img">
          <h2>{product.name}</h2>
        </label>
        <label className="Inser_Img">
          <h3 className="Inser_Img">Select Image</h3>
        </label>
        <div className="insertImg">
          <input type="file" name="img" onChange={InputChange}></input>
        </div>
        <button className="button2" type="submit" disabled={!file}>
          Add Image
        </button>
      </form>
    </div>
  );
}
