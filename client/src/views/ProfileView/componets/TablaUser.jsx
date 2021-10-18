import '../../../styles/styleTablesSAA.css'
import React from "react";

var totalItems = 50;
const TableUser = () => {

    return (
        <div className="body-table1">
            <div className="container">
                <div className="row row--top-40">
                    <div className="col-md-12">
                        <h3 className="row__title">My Shopping ({totalItems})</h3>
                    </div>
                </div>
                <div className="row row--top-40">
                    <div className="col-md-12">
                        <div className="table1-container">
                            <table className="table1">
                                <thead className="table1__thead1">
                                    <tr>
                                        <th className="table__th">Name</th>
                                        <th className="table__th">Price</th>
                                        <th className="table__th">Qty</th>
                                        <th className="table__th">Progress</th>
                                        <th className="table__th">Rating</th>
                                        <th className="table__th">aumentar y disminuir cantidad</th>
                                        <th className="table__th"></th>
                                    </tr>
                                </thead>
                                <tbody className="table1__tbody">
                                    
                                </tbody >
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TableUser;