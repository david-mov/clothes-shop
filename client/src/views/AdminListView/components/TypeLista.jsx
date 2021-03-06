import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTypes } from "../../../stateManagement/actions/getAllTypes";
import TablaList from "./ListTable";
import "./styles.css";
import { deleteTypes } from "../../../stateManagement/actions/deleteType";

export default function TypeList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);
  const type = useSelector((state) => state.typesReducer.types);

  var countP = 5;
  var totalCurrent = type ? Math.ceil(type?.length / countP) : null;

  const [currentPage, setCurrentPage] = useState(0);
  const [actualCurrent, setactualCurrent] = useState(1);
  const [Input, setInput] = useState("");

  const filterTypes = () => {
    //var dataCompleta = [];
    if (Input !== "") {
      return type.filter((e) =>
        e.name.toLowerCase().includes(Input.toLowerCase())
      );
    }
    return type;
  };
  const onInputChange = (Input) => {
    setInput(Input.target.value);
  };

  const nextPage = () => {
    if (totalCurrent !== actualCurrent) {
      setactualCurrent(actualCurrent + 1);
      setCurrentPage(currentPage + countP);
    }
  };

  const prevPage = () => {
    if (actualCurrent > 1) {
      setactualCurrent(actualCurrent - 1);
      setCurrentPage(currentPage - countP);
    }
  };

  
  const deleteType = (e) => {
    dispatch(deleteTypes(e));
    dispatch(getAllTypes());
  };

  const show = () => {
    if (actualCurrent === 1) {
      return (
        <div className="pagination">
          <p className="pagination-item active">{actualCurrent}</p>
          <p>To</p>
          <p className="pagination-item ">{totalCurrent}</p>
          <p className="pagination-item " onClick={nextPage}>
            next
          </p>
        </div>
      );
    } else if (actualCurrent >= totalCurrent) {
      return (
        <div className="pagination">
          <p className="pagination-item " onClick={prevPage}>
            prev
          </p>
          <p className="pagination-item active">{actualCurrent}</p>
          <p>TO</p>
          <p className="pagination-item ">{totalCurrent}</p>
        </div>
      );
    } else {
      return (
        <div className="pagination">
          <p className="pagination-item " onClick={prevPage}>
            prev
          </p>
          <p className="pagination-item active">{actualCurrent}</p>
          <p>TO</p>
          <p className="pagination-item ">{totalCurrent}</p>
          <p className="pagination-item " onClick={nextPage}>
            next
          </p>
        </div>
      );
    }
  };

  function headers() {
    return (
      <thead className="table__thead">
        <tr>
          <th>
            <div>
              <input
                className="button"
                type="text"
                value={Input}
                placeholder="search"
                onChange={onInputChange}
              />
            </div>
          </th>
        </tr>

        <tr>
          <th className="table__th">Name</th>
          <th className="table__th">Update Type</th>
          <th className="table__th">Delete Type</th>
        </tr>
      </thead>
    );
  }

  function bodyTable() {
    return filterTypes()
      ? filterTypes()
          .map((e, i) => {
            return (
              <tr key={i} className="table-row table-row--chris">
                <td className="table-row__td">
                  <div className="table-row__info">
                    <p className="table-row__name">{e.name}</p>
                  </div>
                </td>

                <td className="table-row__td">
                  <Link to={`/update/type/${e.id}`}>
                    <p>
                      <i className="fas fa-pencil-alt  fa-2x"></i>
                    </p>
                  </Link>
                </td>
                <td className="table-row__td">
                  <p onClick={() => deleteType (e.id)}>
                    <i className="fas fa-trash-alt fa-2x"></i>
                  </p>
                </td>
              </tr>
            );
          })
          .slice(currentPage, currentPage + countP)
      : null;
  }

  return (
    <div>
      <div className="body">
        <TablaList
          title={"TYPES"}
          headers={headers()}
          data={type}
          bodyTable={bodyTable()}
          url={"/create/type"}
        />
      </div>
      <div className="buttonList">{show()}</div>
    </div>
  );
}
