import React from 'react'
import './ProductCard.css'

let ProductList = (props) => {

    const { product } = props;

    return (
        <>
            <div className="col-md-6 col-lg-4 col-sm-12 mt-2">
                <div className="card h-100">
                    <img
                        width={300}
                        height={450}
                        alt={product.id}
                        className="card-img-top"
                        src={product.image}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text text-justify">{product.description.length <= 120 ? product.description : `${product.description.slice(0, 120)}...`}</p>
                        <a href="google.com" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList