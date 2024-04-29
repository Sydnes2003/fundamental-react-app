import React from 'react';
import classes from './DefaultModal.module.css'

const DefaultModal = ({children, visible, setVisible, className}) => {

    const rootClasses = [classes.DefaultModal, className];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div
            className={rootClasses.join(' ').trim()}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.DefaultModalContent}
                onClick={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default DefaultModal;