import './input.css';
import React from 'react';
import PropTypes from 'prop-types';

let Input = ({
    onChange,
    value = '',
    type = 'text',
    className = '',
    placeholder = 'Default input field',
}) => {
    return (
        <input
            type={type}
            value={value}
            className={className}
            placeholder={placeholder}
            onChange={(evt) => onChange(evt.currentTarget.value)}
        />
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
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