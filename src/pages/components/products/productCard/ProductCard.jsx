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
                        height={500}
                        alt={product.id}
                        className="card-img-top"
                        src={product.image}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text text-justify">{product.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList