import "./HomeScreen.css";
import Product from "../components/Product/product"
/*import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product/product";

//Actions
import { getAllProducts as listProducts } from "../consts/actionConsts";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const allProducts = useSelector((state) => state.getAllProducts);
    const { loading, error } = allProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
               * {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    allProducts.map((product) => (
                        <Product
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            productId={product._id}
                        />
                    ))
                )}
            </div>
        </div>
    );
};


export default HomeScreen;*/

const HomeScreen = () => {
    return <div className="homescreen">
        <h2 className="homescreen__title">Latest Products</h2>
        <div className="homescreen__products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />



        </div>
    </div>
};
export default HomeScreen;