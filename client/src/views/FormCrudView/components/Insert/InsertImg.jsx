import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";
import { getUpdateProductDetails } from '../../../../stateManagement/actions/getUpdatePDetail'
import { postAllImagesProducts } from "../../../../stateManagement/actions/postAllImagesProducts";


export default function AddImgProduct({id, name}){
    
    const dispatch = useDispatch();
    const history = (useHistory());
    const { productId } = useParams();
    useEffect(() => {
        dispatch(getUpdateProductDetails(productId));
    }, [dispatch])
    const product = useSelector(state => state.productsReducer.productUpdateDetails);
    
    const [file, setfile] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('img', file);
        dispatch(postAllImagesProducts(productId,formData));
        alert("Successfully insert image")
        history.push("/list");
    };

    const InputChange = (e) => {
        setfile(e.target.files[0]);
    }
    //console.log("data ", file.type);
   
    return(
        <div className="container" >

            <form onSubmit={onFormSubmit}>
                <input value = {id} hidden/>
            <label><h3>Name Product</h3></label>
            <label ><h2 >{product.name}</h2></label>
                   <label ><h3 >Image</h3></label>
                   <input  type= "file" name="img" onChange={InputChange}>
                   </input>
                   <button className='button2' type='submit'>Add Image</button>
            </form>
               
        </div>
    )
}