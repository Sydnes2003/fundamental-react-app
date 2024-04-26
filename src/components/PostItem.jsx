import React from 'react';
import CustomButton from "./UI/button/CustomButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <article className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </article>
            <div className="post__btns">
                <CustomButton onClick={() => props.remove(props.post)}>
                    Удалить пост
                </CustomButton>
            </div>
        </div>
    );
};

export default PostItem;