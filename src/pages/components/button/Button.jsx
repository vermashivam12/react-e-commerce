import './button.css';
import React from 'react';

let Button = ({ ...props }) => {
    return (
        <button onClick={() => props.searchProducts('clicked')} className={props.className}>{props.title}</button>
    )
}

export default Button