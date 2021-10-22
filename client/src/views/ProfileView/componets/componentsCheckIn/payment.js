import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import { Link } from 'react-router-dom'

const paymentP = ({
  name,
  productId,
  quantity,
  price,
  size,
  color,
  stock,
  rating,
}) => {
  const idProduct = productId

  return (
    <tr className="table-row table-row--chris">
      <td className="table-row__td">
        <div className="table-row__info">
          <p className="table-row__name">{name}</p>
          <span className="table-row__small">Stock {stock}</span>
        </div>
      </td>
      <td data-column="Policy" className="table-row__td">
        <div className="">
          <p className="table-row__policy">${price}</p>
          <span className="table-row__small">Unit Price</span>
        </div>
      </td>

      <td data-column="Progress" className="table-row__td">
        <div className={`component_toCartCantidad ${!stock ? 'disabled' : ''}`}>
          <div className="">{quantity}</div>
        </div>
      </td>
      <td data-column="Progress" className="table-row__td">
        <p className="table-row__policy">${price * quantity}</p>
      </td>

      <td colspan="5" data-column="Progress" className="table-row__td">
        {size}
      </td>

      <td className="table-row__td">
        <CardActions disableSpacing>
          <div>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>&#11088;</p>
              ))}
          </div>
        </CardActions>
      </td>
      <td className="table-row__td">
        <p className="table-row__policy">{color}</p>
      </td>

      <td className="table-row__td">
        <Link to={`/insertRating/${idProduct}`}>
          <p>
            <i className="fas fa-pencil-alt  fa-2x"></i>
          </p>
        </Link>
      </td>
    </tr>
  )
}

export default paymentP
