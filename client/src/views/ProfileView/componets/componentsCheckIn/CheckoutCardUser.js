import '../../../../styles/styleCata2.css';
import React, { useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from "@material-ui/icons/Delete";
import getRemoveItem from "../../../../stateManagement/actions/getRemoveItem";
import { useDispatch, useSelector } from "react-redux";
import { putUpdateCart } from "../../../../stateManagement/actions/putUpdateCart";
import Select from "react-select";



export default function CheckoutCardUserIn({ name, productId, idCarrito, quantity, price, image, subtotal, size, color, stock, rating }) {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.checkoutReducer.cart)

    const [vauleS, setvauleS] = useState("S");
    const [Input, setInput] = useState(null);

    const addCantidad = () => {
        if (quantity !== stock) {
            dispatch(putUpdateCart({ productId, quantity: quantity + 1, price }))
        }
    }

    const removeCantidad = () => {
        if (quantity !== 1) {
            dispatch(putUpdateCart({ productId, quantity: quantity - 1, price }))
        }
    }

    const RemoveItem = (event, productId) => {
        dispatch(getRemoveItem(productId));
    };

    var nameImagen = "";

    if (image !== undefined) {
        nameImagen = "imageProduct/" + image.name;
    } else {
        nameImagen = "products/logo JK&A.png";
    }
    
    const onSelectChangeSize = (vauleS) => {
        var sizesEnv = "";
        if (vauleS) {
          sizesEnv = vauleS.map((e) => {
            return e.value;
          });
        }
        setvauleS(vauleS);
        addSizes(sizesEnv);
      };
      const addSizes = (tipesEnv) => {
        setInput({
          ...Input,
          sizes: tipesEnv,
        });
      };

      const Optionsizes = size?.map((e) => {
        return {
          label: e.name,
          value: e.id
        }
      });
    
      
   
    return (
        <tr className="table-row table-row--chris">

            <td className="table-row__td">
                <img className="table-row__img" src={require(`../../../../assets/${nameImagen}`).default} alt="not image" />

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
                <Select
              value={vauleS}
              options={Optionsizes}
              onChange={onSelectChangeSize}
              isMulti
            />
            </td>

            <td className="table-row__td">
                <CardActions disableSpacing  >
                    <div className="">
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
                <CardActions disableSpacing  >
                    <IconButton onClick={(event) => RemoveItem(event, productId)}>
                        <DeleteIcon fontSize='large' />
                    </IconButton>
                </CardActions>

            </td>

        </tr>


    );
};