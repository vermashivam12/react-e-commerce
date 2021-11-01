import './header.css'
import React, { useState } from 'react'
import Input from '../input/Input'
import Button from '../button/Button'

let Header = () => {

    const [query, setQuery] = useState('')

    return (
        <div>
            <div className="head-wrapper">
                <div>
                    <span className="heading">E-Commerce</span>
                    <Input type="text" value={query} onChange={setQuery} className="search-field" placeholder="Enter Category / Products" />
                    <Button className="search-btn" title="Search" />
                </div>
            </div>
        </div>
    )
}

export default Header