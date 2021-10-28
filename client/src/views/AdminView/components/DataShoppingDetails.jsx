import '../../../styles/styleTablesSAA.css';
import React from "react";
import MapDataShoppingDetails from './MapProDetails';



const DataShoppingDetails = ({ dataShopping }) => {

    
    const headers = () => {

        return (

            <tr>
                <th className="table1__th1">Name</th>
                <th className="table1__th1">Price</th>
                <th className="table1__th1">Amount (Min - Max)</th>
                <th className="table1__th1">Subtotal to Item</th>
                <th className="table1__th1">Sizes to Item</th>
                <th className="table1__th1">Color</th>
                <th className="table1__th1">Stock</th>
                <th className="table1__th1">Actions</th>
                <th className="table1__th1">Actions</th>
            </tr>

        )
    };

    const bodys = () => {
        return dataShopping?.map((e, i) => {

            return e.map((el) => {
                return (
                    <MapDataShoppingDetails
                        key={i}
                        name={el.product.name}
                        productId={el.product.id}
                        price={el.product.price}
                        quantity={el.quantity}
                        subtotal={el.subtotal}
                        size={el.product.sizes}
                        color={el.product.color}
                        stock={el.product.stock}
                    />
                )

            })
        })
    };


    return (
        <div className="body-table1">
            <div className="container">

                <div className="row row--top-40">
                    <div className="col-md-12">
                        <h3 className="row__title">Data Shoping</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="table1-container">
                            <table className="table1">
                                <thead className="table1__thead1">
                                    {headers()}
                                </thead>
                                <tbody className="table1__tbody">
                                    {bodys()}
                                </tbody >
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )


};

export default DataShoppingDetails;