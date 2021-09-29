import React from 'react'
import ProductCard from "./ProductCard/ProductCard"

const product = () => {
    var {ProductCards} = useSelector(state => state )

    return (
        <div>
            <div>
                { ProductCards?.map((e) => ( 
                    <ProductCard
                        name= {e.name}
                        price= {e.price}
                        description= {e.description}
                        stock= {e.stock}
                        />
                    ))}
            </div>
        </div>
    )
}

export default product
