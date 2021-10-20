import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../stateManagement/actions/getAllProducts";
import TablaList from "./ListTable";
import "./styles.css";
import Select from "react-select";
import { deleteProduct } from "../../../stateManagement/actions/deleteProduct";

export default function ProductosLista() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.productsReducer.products);
  const [search, setSearch] = useState({ label: "filter to..", value: "" });
  const [valor, setValor] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [actualCurrent, setactualCurrent] = useState(1);
  var countP = 5;
  var totalCurrent = Math.ceil(products?.length / countP);
  const [Input, setInput] = useState("");

  const filterProducts = () => {
    //var dataCompleta = [];
    switch (valor) {
      case 'input':
        return (products.filter((e) =>
          e.name.toLowerCase().includes(Input.toLowerCase()),
        ))

      case 'Max Stock':
        return ( products.sort((a,b)=>{
          const StockA = parseInt(a.stock);
                const StockB = parseInt(b.stock);
                if (StockA > StockB)return -1;
                if (StockA < StockB)return 1;
                return 0;
        }))

      case 'Min Stock':
        return (products.sort((a,b)=>{
          return a.stock - b.stock
        }))

      case 'Max Price':
        return ( products.sort((a,b)=>{
          const PriceA = parseInt(a.price);
                const PriceB = parseInt(b.price);
                if (PriceA > PriceB)return -1;
                if (PriceA < PriceB)return 1;
                return 0;
        }))

      case 'Min Price':
        return (products.sort((a,b)=>{
          return a.price - b.price
        }))
      default:
        return (products)
    }
  };

  const onInputChange = (Input) => {
    setValor("input");
    setInput(Input.target.value);
  };

  const OptionSelect = [
    { label: "Max Stock", value: "Max Stock" },
    { label: "Min Stock", value: "Min Stock" },
    { label: "Max Price", value: "Max Price" },
    { label: "Min Price", value: "Min Price" },
  ];

  const handleChangeSelect = (search) => {
    setValor(search.value);
    setSearch(search);
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

  const deleteProducts = (e) => {
    dispatch(deleteProduct(e));
    dispatch(getAllProducts());
  };

  const show = () => {
    if (actualCurrent === 1) {
      return (
        <div className="pagination">
          <p className="pagination-item active">{actualCurrent}</p>
          <p>TO</p>
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
          <th className="table__th">
            <div className="placeHolderSearch">
              <input
                className="button placeHolderSearch"
                type="text"
                value={Input}
                placeholder="search"
                onChange={onInputChange}
              />
            </div>
          </th>
          <th>
            <Select
              className="selected"
              value={search}
              options={OptionSelect}
              onChange={handleChangeSelect}
            />
          </th>
        </tr>
        <tr>
          <th className="table__th">Name</th>
          <th className="table__th">Price</th>
          <th className="table__th">Stock</th>
          <th className="table__th">Insert image</th>
          <th className="table__th">Update Product</th>
          <th className="table__th">Top Secret</th>
          <th className="table__th">Delete Product</th>
        </tr>
      </thead>
    );
  }

  function bodyTable() {
    return filterProducts()
      .map((e, i) => {
        var status = "status--green";
        if (e.stock <= 5) status = "status--red";
        return (
          <tr key={i} className="table-row table-row--chris">
            <td className="table-row__td">
              <div className="table-row__info">
                <p className="table-row__name">{e.name}</p>
              </div>
            </td>
            <td data-column="Price" className="table-row__td">
              <div className="">
                <p className="table-row__policy">${e.price}</p>
              </div>
            </td>
            <td data-column="Policy status" className="table-row__td">
              <p className={`table-row__p-status ${status} status`}>
                {e.stock}
              </p>
            </td>

            <td className="table-row__td">
              <Link to={`/addimage/${e.id}`}>
                <p>
                  <i class="far fa-image fa-2x"></i>
                </p>
              </Link>
            </td>
            <td className="table-row__td">
              <Link to={`/update/product/${e.id}`}>
                <p>
                  <i className="fas fa-pencil-alt  fa-2x"></i>
                </p>
              </Link>
            </td>
            <td className="table-row__td">
              <Link to={`/info/product/${e.id}`}>
                <p>
                  <i class="fas fa-user-secret fa-9x"></i>
                </p>
              </Link>
            </td>

            <td className="table-row__td">
              <p value={e.id} onClick={() => deleteProducts(e.id)}>
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
          title={"Products"}
          headers={headers()}
          data={products}
          bodyTable={bodyTable()}
          url={"/create/product"}
        />
      </div>
      <div className="buttonList">{show()}</div>
    </div>
  );
}
