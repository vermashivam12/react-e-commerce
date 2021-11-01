import './header.css'
import Input from '../input/Input'
import Button from '../button/Button'
import React, { useState } from 'react'

let Header = () => {

    const [query, setQuery] = useState('')

    let searchProducts = () => {
        alert(`Searched query - ${query}`)
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