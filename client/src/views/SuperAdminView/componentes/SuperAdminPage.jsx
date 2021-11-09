import "../../../styles/styleTablesSAA.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../stateManagement/actions/getAllUsers";
import { postDisdableUser } from "../../../stateManagement/actions/putDisdableUser";
import { putChangeRolUsers } from "../../../stateManagement/actions/putChangeRolUser";

const SuperAdminPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  var users = useSelector((state) => state.userReducer.users);
  const user = users.filter((e) => e.user_rol !== 1);
  var status, color, escale, escaleChang, statusenv;
  var totalUsers = user.length;

  const headers = () => {
    return (
      <tr className="listUser_">
        <th className="table1__th1">Name</th>
        <th className="table1__th1">email</th>
        <th className="table1__th1">Status</th>
        <th className="table1__th1">change role</th>
        <th className="table1__th1">to disable</th>
      </tr>
    );
  };

  const disableUser = (e, i) => {
    if (i !== true) {
      statusenv = true;
      dispatch(postDisdableUser(e, statusenv));
      dispatch(getAllUsers());
    } else {
      statusenv = false;
      dispatch(postDisdableUser(e, statusenv));
      dispatch(getAllUsers());
    }
  };

  const AdminUser = (e, i) => {
    if (i !== "user") {
      statusenv = 3;
      dispatch(putChangeRolUsers(e, statusenv));
      dispatch(getAllUsers());
    } else {
      statusenv = 2;
      dispatch(putChangeRolUsers(e, statusenv));
      dispatch(getAllUsers());
    }
  };

  const bodys = () => {
    return user?.map((e) => {
      if (e.enabled === true) {
        status = "Active";
        color = "green";
        escale = "right";
      } else {
        status = "Inactive";
        color = "red";
        escale = "left";
      }
      if (e.rol.name !== "user") {
        escaleChang = "right";
      } else {
        escaleChang = "left";
      }
      return (
        <tr className="table1-row table1-row--chris">
          <td className="table1-row__td">
            <div className="table1-row__info">
              <p className="table1-row__name">{e.name}</p>
              <span className="table1-row__small status--blue">
                {e.rol.name}
              </span>
            </div>
          </td>
          <td data-column="Progress" className="table1-row__td">
            <p className="table1-row__progress status--blue status">
              {e.email}
            </p>
          </td>

          <td data-column="Status" className="table1-row__td">
            <p className={`table1-row__status status--${color} status`}>
              {status}
            </p>
          </td>
          <td className="table-row__td_">
            <p>
              <i
                onClick={() => AdminUser(e.id, e.rol.name)}
                class={`fas fa-balance-scale-${escaleChang} fa-2x`}
              ></i>
            </p>
          </td>

          <td className="table-row__td_">
            <p>
              <i
                onClick={() => disableUser(e.id, e.enabled)}
                class={`fas fa-balance-scale-${escale} fa-2x`}
              ></i>
            </p>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="body-table1">
      <div className="container">
        <div className="row row--top-40">
          <div className="col-md-12">
            <h3 className="row__title">Users ({totalUsers})</h3>
          </div>
        </div>
        <div className="row row--top-40">
          <div className="col-md-12">
            <div className="table1-container_">
              <table className="table1_">
                <thead className="table1__thead1">{headers()}</thead>
                <tbody className="table1__tbody">{bodys()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminPage;
