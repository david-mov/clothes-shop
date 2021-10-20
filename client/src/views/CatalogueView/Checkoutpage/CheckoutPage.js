import '../../../styles/styleChecPage.css'
import { React } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import CheckoutCard from '../../../components/Procces Order/CheckoutCard'
import TotalCheckout from '../../../components/Procces Order/TotalCheckout'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCart } from '../../../stateManagement/actions/getAllCart'
import { getAllCartUsers } from '../../../stateManagement/actions/getAllCartUser'
import { useUserId } from '../../../hooks/useUserId'
import { cleanUpdate } from '../../../stateManagement/actions/CleanPutUpdate'
import { getUserDetail } from '../../../stateManagement/actions/getUserDetail'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
}))
const CheckoutPage = () => {

  const dispatch = useDispatch()
  let [user, okId] = useUserId();

  useEffect(() => {
    if (user?.id !== undefined) {
      dispatch(getAllCartUsers())
      dispatch(getAllCart())
      dispatch(getUserDetail(user?.id));
      return () => {
        dispatch(cleanUpdate());
      };
    }
  }, [dispatch, user])
  const classes = useStyles()
  var showCart, showTotalAmount;
  var { cart } = useSelector((state) => state.checkoutReducer)
  var totalCart = useSelector(
    (state) => state.checkoutUserReducer.totalCartUser,
  )
  var { totalAmount } = useSelector((state) => state.checkoutReducer)
  var { totalAmountUser } = useSelector((state) => state.checkoutUserReducer)
  if (user !== null) {
    showCart = totalCart.filter((e) => e.Cart_Users === user?.id)
    showTotalAmount = totalAmountUser;
  } else {
    showCart = cart;
    showTotalAmount = totalAmount;

  }

  function FormRow() {
    return (
      <div className="container">
        <div className="row row--top-20">
          <div className="col-md-12">
            <div className="table-container">
              <table className="table">
                <thead className="table__thead">
                  <tr>
                    <th className="table__th">Name</th>
                    <th className="table__th">Price</th>
                    <th className="table__th">Amount (Min - Max)</th>
                    <th className="table__th">Subtotal to Item</th>
                    <th colspan="5" className="table__th">Sizes to Item</th>
                    <th className="table__th">Rating</th>
                    <th className="table__th">Color</th>
                    <th className="table__th">Delete</th>
                  </tr>
                </thead>
                <tbody className="table__tbody">
                  {showCart?.map((e) => (
                    <CheckoutCard
                      key={e.product.id}
                      name={e.product.name}
                      stock={e.product.stock}
                      productId={e.product.id}
                      idCarrito={e.id}
                      quantity={e.quantity}
                      price={e.product.price}
                      image={e.product.images[0]}
                      subtotal={e.subtotal}
                      size={e.product.sizes}
                      color={e.product.color}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <TotalCheckout totalAmount={showTotalAmount} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default CheckoutPage
