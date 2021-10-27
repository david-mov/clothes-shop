import '../../../styles/styleTablesSAA.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDisdableUser } from '../../../stateManagement/actions/putDisdableUser';
import { putChangeRolUsers } from '../../../stateManagement/actions/putChangeRolUser';
import { getAllOrders } from '../../../stateManagement/actions/getAllOrders';

// estados de la order
// 1 = creada 2 = procesando 3 = completa 4 = cancelada

const HistoryList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

    var showOrders = useSelector(
        (state) => state.checkoutUserReducer.totalOrders,
    )

    var status, color, escale, escaleChang, statusenv;
    var totalOrdes = showOrders.length
    console.log("data", showOrders.map((e) => e.cartUsers.map((el) => el.user.name)))

    const headers = () => {

        return (

            <tr>
                <th className="table1__th1">Name User</th>
                <th className="table1__th1">Email</th>
                <th className="table1__th1">Total</th>
                <th className="table1__th1">Status Order</th>
                <th className="table1__th1">N° Order</th>
                <th className="table1__th1">Show Details</th>
            </tr>

        )
    }

    const disableUser = (e, i) => {

        if (i !== true) {

            statusenv = true;
            dispatch(postDisdableUser(e, statusenv));
            // dispatch(getAllUsers());
        } else {

            statusenv = false;
            dispatch(postDisdableUser(e, statusenv));
            // dispatch(getAllUsers());
        }


    }

    const AdminUser = (e, i) => {

        if (i !== "user") {

            statusenv = 3;
            dispatch(putChangeRolUsers(e, statusenv));
            // dispatch(getAllUsers());
        } else {

            statusenv = 2;
            dispatch(putChangeRolUsers(e, statusenv));
            // dispatch(getAllUsers());
        }


    }

    const bodys = () => {
        return showOrders?.map((e) => {
            if (e.state == 1) {
                status = "Creada"; color = "green"; escale = "right";

            } else {
                status = "Procesando"; color = "red"; escale = "left";

            }
     
            return (

                <tr className="table1-row table1-row--chris">
                    <td className="table1-row__td">
                        <div className="table1-row__info">
                            <p className="table1-row__name">{e.cartUsers.map((el) => el.user.name)}</p>
                        </div>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e.cartUsers.map((el) => el.user.email)}</p>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e.total}</p>
                    </td>
                    <td data-column="Status" className="table1-row__td">
                        <p className={`table1-row__status status--${color} status`}>{status}</p>
                    </td>
                    <td data-column="Progress" className="table1-row__td">
                        <p className="table1-row__progress status--blue status">{e?.id}</p>
                    </td>
                    <td className="table-row__td">
                        <p>
                            <i className={`fas fa-eye fa-2x`}></i>
                        </p>
                    </td>                  

                </tr>
            )
        })
    }

    return (
        <div className="body-table1">
            <div className="container">
                <div className="row row--top-20">
                    <div className="col-md-12">
                        <h3 className="row__title">Orders ({totalOrdes})</h3>
                    </div>
                </div>
                <div className="row row--top-40">
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
    );
};

export default HistoryList;