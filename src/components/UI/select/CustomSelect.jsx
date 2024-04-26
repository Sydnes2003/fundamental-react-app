import React from 'react';
import classes from './CustomSelect.module.css';

const CustomSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={classes.CustomSelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default CustomSelect;