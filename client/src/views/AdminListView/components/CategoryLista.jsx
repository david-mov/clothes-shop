import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../stateManagement/actions/getAllCategories";
import TablaList from "./ListTable";
import "./styles.css";

export default function CategoryList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const category = useSelector((state) => state.categoriesReducer.categories);
  var countP = 5;
  var totalCurrent = Math.ceil(category?.length / countP);

  const [currentPage, setCurrentPage] = useState(0);
  const [actualCurrent, setactualCurrent] = useState(1);
  const [Input, setInput] = useState("");

  const filterCategory = () => {
    //var dataCompleta = [];
    if (Input !== "") {
      return category.filter((e) =>
        e.name.toLowerCase().includes(Input.toLowerCase())
      );
    }
    return category;
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

  const deleteProducts = () => {
    // dispatch(deleteProduct(e));
    // dispatch(getAllProducts());
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
          <th className="table__th">Update Category</th>
          <th className="table__th">Delete Category</th>
        </tr>
      </thead>
    );
  }

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

  function bodyTable() {
    return filterCategory()
      .map((e, i) => {
        return (
          <tr key={i} className="table-row table-row--chris">
            <td className="table-row__td">
              <div className="table-row__info">
                <p className="table-row__name">{e.name}</p>
              </div>
            </td>
            <td className="table-row__td">
              <Link to={`/update/category/${e.id}`}>
                <p>
                  <i className="fas fa-pencil-alt  fa-2x"></i>
                </p>
              </Link>
            </td>
            <td className="table-row__td">
              <p onClick={(e) => deleteProducts(e.id)}>
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
          title={"CATEGORYS"}
          headers={headers()}
          data={category}
          bodyTable={bodyTable()}
          url={"/create/category"}
        />
      </div>
      <div className="buttonList">{show()}</div>
    </div>
  );
}
