import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import CardActions from "@material-ui/core/CardActions";
import '../../AdminListView/components/styles.css'
import { deleteImage } from '../../../stateManagement/actions/deleteImage';
import { getUpdateProductDetails } from '../../../stateManagement/actions/getUpdatePDetail';
import { Maximize } from '@material-ui/icons';

export default function DetailProduct({
  idProduct,
  name,
  price,
  description,
  color,
  stock,
  type,
  categories,
  sizes,
  stars,
  views,
  ratings,
  createdAt,
  updatedAt,
  images,
}) {
// console.log("RATING ", ratings )
// console.log("EL AMOUN", ratings[0].amount)
  const dispatch = useDispatch();
 
  const deleteProduct = (e)=>{
    dispatch(deleteImage(e))
    dispatch(getUpdateProductDetails(idProduct));
  }
  var filtrado = ratings.map(e => e.amount)
  const rating = Math.max(...filtrado);

  return (
    <tbody className="table__tbody">
      <tr className="table-row table-row--chris">
        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{name}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">${price}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{description}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{color}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{stock}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{type.name}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            {categories.map((e) => {
              return <p className="table-row__name"> {e.name} </p>
            })}
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            {sizes.map((e) => {
              return <p className="table-row__name"> {e.name} </p>
            })}
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
          <CardActions disableSpacing>
                    <div >
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span>&#11088;</span>
                            ))}
                    </div>

                </CardActions>
            <p className="table-row__name">{}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{views.length}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{ratings.length}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{createdAt}</p>
          </div>
        </td>

        <td className="table-row__td">
          <div className="table-row__info">
            <p className="table-row__name">{updatedAt}</p>
          </div>
        </td>

        <td className="table-row__td">
          <Link to="/">
            {' '}
            <p>
              <i className="fas fa-pencil-alt  fa-2x"></i>
            </p>{' '}
          </Link>
        </td>
        <td >
          <p>
            <i className="fas fa-trash-alt fa-2x"></i>
          </p>
        </td>
      </tr>
  <div>
      <tr  className='img1'>
        {images.map((e) => {
          var nameImagen = ''

          if (e.name !== undefined) {
            nameImagen = 'imageProduct/' + e.name
          } else {
            nameImagen = 'products/logo JK&A.png'
          }

          return ( 
          <div>
           
      <img src={require(`../../../assets/${nameImagen}`).default} alt="Not Imag"></img>
           <p value={e.id} onClick={() => deleteProduct(e.id)} >
                <i className="fas fa-trash-alt fa-2x"></i>
                </p>
  
          </div>
          )
        })}
      </tr>
     </div>
    </tbody>
  )
}
