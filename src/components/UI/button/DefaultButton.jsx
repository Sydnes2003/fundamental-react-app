import React from 'react';
import classes from "./DefaultButton.module.css";

const DefaultButton = ({children, className, ...props}) => {
    return (
        <button
            className={[className, classes.DefaultButton].join(' ').trim()}
            {...props}
        >
            {children}
        </button>
    );
};

export default DefaultButton;