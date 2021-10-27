import React, { useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from "@material-ui/icons/Delete";
import getRemoveItem from "../../stateManagement/actions/getRemoveItem";
import { useDispatch } from "react-redux";
import { putUpdateCart } from "../../stateManagement/actions/putUpdateCart";
import Select from "react-select";
import { useUserId } from '../../hooks/useUserId';
import { putUpdateCartUsers } from '../../stateManagement/actions/putUpdateCartU';
import getRemoveItemUser from '../../stateManagement/actions/getRemoveItemU';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function CheckoutCard({ name, productId, idCarrito, quantity, price, image, subtotal, size, color, stock, rating }) {



    const dispatch = useDispatch()
    let [user,okId] = useUserId();
    var Cart_Users, CartU_product,sizesUser;
    const [vauleS, setvauleS] = useState("S");
    const [Input, setInput] = useState({});  

    var totalCart = useSelector((state) => state.checkoutUserReducer.totalCartUser);
    let productCart = totalCart?.find(e => e.product?.id === productId );

    console.log("productCart", productCart)

    const addCantidad = () => {
        if(user !== undefined || user !== null){
            Cart_Users = user?.id;
            CartU_product = productId;
            sizesUser = Input.names?.join(" ");
            if (quantity !== stock) {
                dispatch(putUpdateCartUsers({ CartU_product, Cart_Users, quantity: quantity + 1, price, sizesUser }))
            }            
        }
        if (quantity !== stock) {
            dispatch(putUpdateCart({ productId, quantity: quantity + 1, price }))
        }
    }

    const removeCantidad = () => {
        if(user !== undefined || user !== null){
            Cart_Users = user?.id;
            CartU_product = productId;
            sizesUser = "";
            if (quantity !== 1) {
                dispatch(putUpdateCartUsers({ CartU_product, Cart_Users, quantity: quantity - 1, price, sizesUser }))
            }
        }
        if (quantity !== 1) {
            dispatch(putUpdateCart({ productId, quantity: quantity - 1, price }))
        }
    }

    const RemoveItem = (event, productId) => { 
        if(user !== undefined || user !== null){
            Cart_Users = user?.id;
            CartU_product = productId;
            dispatch(getRemoveItemUser({CartU_product, Cart_Users})); 
        }
        dispatch(getRemoveItem(productId));
    };
    
      

    var nameImagen = "";

    if (image !== undefined) {
        nameImagen = "imageProduct/" + image.name;
    } else {
        nameImagen = "products/logo JK&A.png";
    }
   
    

    return (
        <tr className="table-row table-row--chris">

            <td className="table-row__td">
                <image className="table-row__img" src={require(`../../assets/${nameImagen}`).default} alt="not image" />

                <div className="table-row__info">
                    <p className="table-row__name">{name}</p>
                    <span className="table-row__small">Stock {stock}</span>
                </div>
            </td>
            <td data-column="Policy" className="table-row__td">
                <div className="">
                    <p className="table-row__policy">${price}</p>
                    <span className="table-row__small">Unit Price</span>
                </div>
            </td>

            <td data-column="Progress" className="table-row__td">
                <div className={`component_toCartCantidad ${!stock ? 'disabled' : ''}`}>
                    <div className={`toCartBoton menos ${quantity === 1 ? 'disabled' : ''}`} onClick={removeCantidad}></div>
                    <div className="">{quantity}</div>
                    <div className={`toCartBoton mas ${quantity === stock ? 'disabled' : ''}`} onClick={addCantidad}></div>
                </div>
            </td>
            <td data-column="Progress" className="table-row__td">
                <p className="table-row__policy">${price * quantity}</p>
            </td>

            <td colspan="5" data-column="Progress" className="table-row__td">
             
            
                <p>{productCart?.sizesUser} </p>

                <Link to={`/product/${productId}`}>
                    <p>
                      <i className="fas fa-pencil-alt  fa-2x"></i>
                    </p>
                  </Link>
            

            </td>

            <td className="table-row__td">
                <CardActions disableSpacing>
                    <div >
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>&#11088;</p>
                            ))}
                    </div>

                </CardActions>

            </td>
            <td className="table-row__td">
            <p className="table-row__policy">{color}</p>
            </td>
            <td className="table-row__td">
                <CardActions disableSpacing >
                    <IconButton onClick={(event) => RemoveItem(event, productId)}>
                        <DeleteIcon fontSize='large' />
                    </IconButton>
                </CardActions>

            </td>

        </tr>


    );
};
