import React from 'react';
import classes from './DefaultInput.module.css';

const DefaultInput = ({className, ...props}) => {
    return (
        <input
            className={[className, classes.DefaultInput].join(' ').trim()}
            {...props}
        />
    );
};

export default DefaultInput;