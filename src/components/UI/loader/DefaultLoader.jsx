import React from 'react';
import classes from './DefaultLoader.module.css';

const DefaultLoader = ({className}) => {
    return (
        <div
            className={[className, classes.DefaultLoader].join(' ').trim()}
        ></div>
    );
};

export default DefaultLoader;