import "./product.css";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { AddShoppingCart } from "@material-ui/icons";

/*const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
      },
    });
  };*/

const Product = ({ /*imageUrl*/ description, price, name, productId }) => {
    return (

        <div className="product">
            <img src=/*{imageUrl}*/"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="Product Name" /*{name}*/
            />

            <div className="product__info">
                <p className="info__name">Producto 1{/*{name}*/}</p>

                <p className="info__description">{/*{description.substring(0, 100)}...*/}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <p className="info__price">$499,9 {/*{price}*/}</p>

                <CardActions disableSpacing>
                    {/*<IconButton aria-label='Add to Cart' onClick={addToBasket}>
                        <AddShoppingCart fontSize='large' />
                    </IconButton>*/}
                    {Array(4)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                        ))}

                </CardActions>

                <Link to={`/product/${111}`} className="info__button">
                    {/*${productId}*/}
                    View
                </Link>


            </div>
        </div>
    );
};

export default Product;
