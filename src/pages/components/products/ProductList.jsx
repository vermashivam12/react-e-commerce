import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './productCard/ProductCard'

let ProductList = () => {

    const { products, searchQuery } = useSelector(state => state.products)

    return (
        <div className="m-3">
            <h3>{searchQuery ? `You're looking for - ${searchQuery}` : 'Products'}</h3>
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