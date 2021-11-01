import React from 'react'
import './ProductCard.css'

let ProductList = (props) => {

    const { product } = props;

    return (
        <>
            <div className="card col-md-4">
                <img alt={product.id} className='card-img-top' src={product.image} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default ProductList