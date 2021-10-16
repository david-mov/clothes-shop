import '../../../styles/styleTabesSAA.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../stateManagement/actions/getAllUsers";
import { Link } from 'react-router-dom';



const AdminPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const users = useSelector((state) => state.userReducer.users);

    var status = "Inactive";
    var color = "red";
    var escale = "left";

    const headers = () => {

        return (
            <thead class="table1__thead1">
                <tr>
                    <th class="table1__th1">Name</th>
                    <th class="table1__th1">email</th>
                    <th class="table1__th1">Status</th>
                    <th class="table1__th1">change role</th>
                    <th class="table1__th1">to disable</th>
                </tr>
            </thead>
        )
    }

    const bodys = () => {
        return users?.map((e) => {
            if (e.rol.name !== "inactive") {
                status = "Active";
                color = "green";
                escale = "right"
            }
            return (

                <tr class="table1-row table1-row--chris">
                    <td class="table1-row__td">
                        <div class="table1-row__info">
                            <p class="table1-row__name">{e.name}</p>
                            <span class="table1-row__small">{e.rol.name}</span>
                        </div>
                    </td>
                    <td data-column="Progress" class="table1-row__td">
                        <p class="table1-row__progress status--blue status">{e.email}</p>
                    </td>

                    <td data-column="Status" class="table1-row__td">
                        <p class={`table1-row__status status--${color} status`}>{status}</p>
                    </td>
                    <td className="table-row__td">
                        <p>
                            <i class={`fas fa-balance-scale-${escale} fa-2x`}></i>
                        </p>
                    </td>

                    <td className="table-row__td">
                        <p>
                            <i class={`fas fa-balance-scale-${escale} fa-2x`}></i>
                        </p>
                    </td>

                </tr>
            )
        })
    }

    return (
        <div class="body-table1">
            <div class="container">
                <div class="row row--top-40">
                    <div class="col-md-12">
                        <h3 class="row__title">Users ({ })</h3>
                    </div>
                </div>
                <div class="row row--top-40">
                    <div class="col-md-12">
                        <div class="table1-container">
                            <table class="table1">
                                {headers()}
                                <tbody class="table1__tbody">
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

export default AdminPage;