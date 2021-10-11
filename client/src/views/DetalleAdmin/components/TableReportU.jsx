import React from "react";
import { Link } from "react-router-dom";

const TableReportProduct = () => {
    return (
        <div className="container1">
            <div className="row row--top-40">
                <div className="col-md-12">
                    <h2 className="row__title"></h2>
                </div>
            </div>
            <div className="row row--top-20">
                <div className="col-md-12">
                    <div className="table-container">
                        <Link to="/"><button className='button2'></button ></Link>
                        <table className="table">
                            <thead className="table__thead">
                                <tr>
                                    <th className="table__th">Name</th>
                                    <th className="table__th">Price</th>
                                    <th className="table__th">Description</th>
                                    <th className="table__th">color</th>
                                    <th className="table__th">Stock</th>
                                    <th className="table__th">type_product</th>
                                    <th className="table__th">categories</th>
                                    <th className="table__th">sizes</th>
                                    <th className="table__th">Stars</th>
                                    <th className="table__th">Views</th>
                                    <th className="table__th">Count Rating</th>
                                    <th className="table__th">Update Product</th>
                                    <th className="table__th">Delete Product</th>
                                </tr>
                            </thead>

                            <tbody className="table__tbody">
                                <tr className="table-row table-row--chris">
                                    <td className="table-row__td">
                                        <div className="table-row__info">
                                            <p className="table-row__name">{ }</p>

                                        </div>
                                    </td>

                                    <td className="table-row__td">
                                        <Link to='/'> <p><i className="fas fa-pencil-alt  fa-2x"></i></p> </Link>
                                    </td>
                                    <td className="table-row__td">
                                        <p><i className="fas fa-trash-alt fa-2x"></i></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TableReportProduct;


