import '../../../styles/styleTablesSAA.css';
import React from "react";



const DataOrderDetails = ({ dataOrder }) => {

    
    var status, color;

    const headers = () => {

        return (

            <tr>
                <th className="table1__th1">N° Order</th>
                <th className="table1__th1">Total</th>
                <th className="table1__th1">Date Create</th>
                <th className="table1__th1">Date Update</th>
                <th className="table1__th1">Status</th>
                <th className="table1__th1">Actions</th>
            </tr>

        )
    };

    const bodys = () => {
        return dataOrder?.map((e) => {
            if (e.state === 1) {
                status = "Process"; color = "yellow"; 

            } else if (e.state === 2){
                status = "Sent"; color = "blue";

            } else if (e.state === 3){
                status = "Sent"; color = "green";

            } else {
                status = "Cancelled"; color = "red";
            }
            return (

                <tr className="table1-row table1-row--chris">
                    <td className="table1-row__td">
                        <div className="table1-row__info">
                            <p className="table1-row__name">{e.id}</p>
                            {/* <span className="table1-row__small status--blue">{e.id}</span> */}
                        </div>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e.total}</p>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e.createdAt}</p>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e.updatedAt}</p>
                    </td>

                    <td data-column="Status" className="table1-row__td">
                        <p className={`table1-row__status status--${color} status`}>{status}</p>
                    </td>

                    <td data-column="Status" className="table1-row__td">
                        <p className={`table1-row__status status--green status`}>Send</p>
                    </td>

                </tr>
            )
        })
    };


    return (
        <div className="body-table1">
            <div className="container">

                <div className="row row--top-40">
                    <div className="col-md-12">
                        <h3 className="row__title">Data Order</h3>
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

export default DataOrderDetails;