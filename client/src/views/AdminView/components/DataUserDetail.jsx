import '../../../styles/styleTablesSAA.css';
import React from "react";



const DataUserDetails = ({ dataUser }) => {

    var status, color;

    const headers = () => {

        return (

            <tr>
                <th className="table1__th1">Name</th>
                <th className="table1__th1">email</th>
                <th className="table1__th1">Cell Phone</th>
                <th className="table1__th1">Adress</th>
                <th className="table1__th1">Status</th>
            </tr>

        )
    };

    const bodys = () => {
        return dataUser?.map((e) => {
            if (e[0].enabled === true) {
                status = "Active"; color = "green"; 

            } else {
                status = "Inactive"; color = "red";

            }
            return (

                <tr className="table1-row table1-row--chris">
                    <td className="table1-row__td">
                        <div className="table1-row__info">
                            <p className="table1-row__name">{e[0].name}</p>
                            <span className="table1-row__small status--blue">{e[0].id}</span>
                        </div>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e[0].email}</p>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e[0].userDetails[0].phone}</p>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e[0].userDetails[0].address}</p>
                    </td>

                    <td data-column="Status" className="table1-row__td">
                        <p className={`table1-row__status status--${color} status`}>{status}</p>
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
                        <h3 className="row__title">Data User</h3>
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

export default DataUserDetails;