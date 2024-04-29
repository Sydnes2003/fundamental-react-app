import React from 'react';
import classes from './DefaultSelect.module.css';

const DefaultSelect = ({options, defaultValue, value, onChange, className}) => {
    return (
        <select
            className={[className, classes.DefaultSelect].join(' ').trim()}
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

export default DefaultSelect;