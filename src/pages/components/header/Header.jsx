import './header.css'
import Input from '../input/Input'
import Button from '../button/Button'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../../store/reducers/products/product.actions'

let Header = () => {

    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    let searchProducts = async () => {
        let dispatchObj = await fetchProducts()

        dispatch({
            type: dispatchObj.type,
            payload: {
                products: dispatchObj.products,
                searchQuery: query
            }
        })
    }

    return (
        <div>
            <div className="head-wrapper">
                <div>
                    <span className="heading">E-Commerce</span>
                    <Input type="text" value={query} onChange={setQuery} className="search-field" placeholder="Enter Category / Products" />
                    <Button searchProducts={searchProducts} className="search-btn" title="Search" />
                </div>
            </div>
        </div>
    )
}

export default Header