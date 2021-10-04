import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../../stateManagement/actions/getAllProducts'
import TablaList from './ListTable'
import './styles.css'

export default function ProductosLista() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(0)
  const [actualCurrent, setactualCurrent] = useState(1)
  var countP = 5
  const nextPage = () => {
    if (totalCurrent !== actualCurrent) {
      setactualCurrent(actualCurrent + 1)
      setCurrentPage(currentPage + countP)
    }
  }

  const prevPage = () => {
    if (actualCurrent > 1) {
      setactualCurrent(actualCurrent - 1)
      setCurrentPage(currentPage - countP)
    }
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const products = useSelector((state) => state.productsReducer.products)
  var totalCurrent = Math.ceil(products.length / countP)
  function headers() {
    return (
      <tr>
        <th className="table__th">Name</th>
        <th className="table__th">Policy</th>
        <th className="table__th">Stock</th>
        <th className="table__th">Insert image</th>
        <th className="table__th">Update Product</th>
        <th className="table__th">Vew detail</th>
        <th className="table__th">Delete Product</th>
      </tr>
    )
  }

  function bodyTable() {
    return products
      .map((e, i) => {
        return (
          <tr key={i} className="table-row table-row--chris">
            <input value={e.id} hidden />
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
              <p className="table-row__p-status status--green status">
                {e.stock}
              </p>
            </td>

            <td className="table-row__td">
            <Link to="/addimage">
              <p>
              <i class="far fa-image fa-2x"></i>
              </p>
              </Link>
            </td>
            <td className="table-row__td">
              <Link to={`/update/${e.name}`}>

                {' '}
                <p>
                  <i className="fas fa-pencil-alt  fa-2x"></i>
                </p>{' '}
             </Link>
            </td>
            <td className="table-row__td">
              <p>
              <i class="far fa-eye fa-2x"></i>
              </p>
            </td>

            <td className="table-row__td">
              <p>
                <i className="fas fa-trash-alt fa-2x"></i>
              </p>
            </td>
          </tr>
        )
      })
      .slice(currentPage, currentPage + 5)
  }

  console.log('pr', products.length)

  return (
    <div>
      <div className='productList'>
      <Link className='productListLink' to='/'>GO TO BACK</Link>
      <Link className='productListLink' to='/create/product'>Insert</Link>
      </div>
    <div className='body' >

      <TablaList
        title={'Porducts'}
        headers={headers()}
        data={products}
        bodyTable={bodyTable()}
        url = {'/create/product'}
      />
       </div>
     <div className='buttonList'>
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
    
  )
}
