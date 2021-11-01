import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './productCard/ProductCard'

let ProductList = () => {

    const { products } = useSelector(state => state.products)

    return (
        <div>
            <h3>Products</h3>
            {products && products.length ?
                <div className="row m-2">
                    {products.map(product => (
                        <React.Fragment key={product.id}>
                            <ProductCard product={product} />
                        </React.Fragment>
                    )
                    )}
                </div>
                : 'No items found!'}
        </div>
    )
}

export default ProductList