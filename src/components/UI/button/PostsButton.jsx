import React from 'react';
import classes from "./PostsButton.module.css";

const PostsButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.PostsButton}>
            {children}
        </button>
    );
};

export default PostsButton;