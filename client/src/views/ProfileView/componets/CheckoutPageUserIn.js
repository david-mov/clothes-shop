import '../../../styles/styleChecPage.css'
import { React } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import CheckoutCardIn from './componentsCheckIn/CheckoutCardUser'
import TotalCheckoutIn from './componentsCheckIn/TotalCheckoutUser'
import { useSelector } from 'react-redux'
import { useUserId } from '../../../hooks/useUserId'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
}))
const CheckoutPage = () => {
  let [user] = useUserId()
  const classes = useStyles()
  var showCart
  var { cart } = useSelector((state) => state.checkoutReducer)
  var totalCart = useSelector(
    (state) => state.checkoutUserReducer.totalCartUser,
  )
  if (user !== null) {
    showCart = totalCart.filter(
      (e) => e.Cart_Users === user?.id && e.state !== 3,
    )
  } else {
    showCart = cart
  }

  function FormRow() {
    return (
      <div className="container">
        <div className="row row--top-40">
          <div className="col-md-12">
            <h3 className="row__title">Out of Purchase </h3>
          </div>
        </div>
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
                    <th colspan="5" className="table__th">
                      Sizes to Item
                    </th>
                    <th className="table__th">Rating</th>
                    <th className="table__th">Color</th>
                    <th className="table__th">Delete</th>
                  </tr>
                </thead>
                <tbody className="table__tbody">
                  {showCart?.map((e, i) => (
                    <CheckoutCardIn
                      key={i}
                      name={e.product.name}
                      stock={e.product.stock}
                      productId={e.product.id}
                      quantity={e.quantity}
                      price={e.product.price}
                      image={e.product.images[0]}
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
            <TotalCheckoutIn />
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default CheckoutPage
