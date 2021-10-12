import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTypes } from "../../../stateManagement/actions/getAllTypes";
import TablaList from "./ListTable";
import "./styles.css";

export default function TypeList() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [actualCurrent, setactualCurrent] = useState(1);
  var countP = 5;
  var dataCompleta = [];
  const [Input, setInput] = useState("");
  const type = useSelector((state) => state.typesReducer.types);
  const filterTypes = () => {
    if (Input !== "") {
      return (dataCompleta = type.filter((e) =>
        e.name.toLowerCase().includes(Input.toLowerCase())
      ));
    }
    return (dataCompleta = type);
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

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const types = useSelector((state) => state.typesReducer.types);
  var totalCurrent = Math.ceil(types.length / countP);

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
      .map((e, i) => {
        return (
          <tr key={i} className="table-row table-row--chris">
            <td className="table-row__td">
              <div className="table-row__info">
                <p className="table-row__name">{e.name}</p>
              </div>
            </td>

            <td className="table-row__td">
              <Link to="/update/type">
                <p>
                  <i className="fas fa-pencil-alt  fa-2x"></i>
                </p>
              </Link>
            </td>
            <td className="table-row__td">
              <p>
                <i className="fas fa-trash-alt fa-2x"></i>
              </p>
            </td>
          </tr>
        );
      })
      .slice(currentPage, currentPage + 5);
  }

  return (
    <div>
      <div className="body">
        <TablaList
          title={"TYPES"}
          headers={headers()}
          data={types}
          bodyTable={bodyTable()}
          url={"/create/type"}
        />
      </div>
      <div className="buttonList">
        <button className="button2" onClick={prevPage}>
          PREV
        </button>

        <h1>
          {actualCurrent} De {totalCurrent}
        </h1>

        <button className="button2" onClick={nextPage}>
          NEXT
        </button>
      </div>
    </div>
  );
}
