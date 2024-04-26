import React from 'react';
import classes from './PostsInput.module.css';

const PostsInput = (props) => {
    return (
        <input className={classes.PostsInput} {...props}/>
    );
};

export default PostsInput;