import '../../../styles/styleTablesSAA.css';
import React from "react";



const MapDataShoppingDetails = ({name,productId, price, quantity, subtotal,size, color, stock}) => {
    
    var status, color2;
    if (stock >= quantity) {
        status = "Process"; color2 = "green"; 

    } else {
        status = "Not Process"; color2 = "red";
    }

    return (
        <tr className="table1-row table1-row--chris">
            <td className="table1-row__td">
                <div className="table1-row__info">
                    <p className="table1-row__name">{name}</p>
                    <span className="table1-row__small status--blue">{productId}</span>
                </div>
            </td>
            <td data-column="Progress" className="table1-row__td">
                <p className="table1-row__progress status--blue status">{price}</p>
            </td>
            
            <td data-column="Progress" className="table1-row__td">
                <p className="table1-row__progress status--blue status">{quantity}</p>
            </td>
            <td data-column="Progress" className="table1-row__td">
                <p className="table1-row__progress status--blue status">{subtotal}</p>
            </td>
            <td data-column="Progress" className="table1-row__td">
                <p className="table1-row__progress status--blue status">{size}</p>
            </td>
            <td data-column="Progress" className="table1-row__td">
                <p className="table1-row__progress status--blue status">{color}</p>
            </td>
            <td data-column="Progress" className="table1-row__td">
                <p className="table1-row__progress status--blue status">{stock}</p>
            </td>

            <td data-column="Status" className="table1-row__td">
                <p className={`table1-row__status status--${color2} status`}>{status}</p>
            </td>

            <td data-column="Status" className="table1-row__td">
                <p className={`table1-row__status status--green status`}>Delete</p>
            </td>

        </tr>
    )


};

export default MapDataShoppingDetails;