import './input.css';
import React from 'react';
import PropTypes from 'prop-types';

let Input = ({
    type = 'text',
    className = '',
    placeholder = 'Default input field',
}) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
        />
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
}

/** defaultProps on functional components will eventually be deprecated */
// Input.defaultProps = {
//     type: 'text',
//     className: '',
//     placeholder: 'Default input field',
// }

export default Input;