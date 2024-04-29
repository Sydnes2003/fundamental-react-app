import React from 'react';
import DefaultButton from "./UI/button/DefaultButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <article className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </article>
            <div className="post__btns">
                <DefaultButton onClick={() => props.remove(props.post)}>
                    Удалить пост
                </DefaultButton>
            </div>
        </div>
    );
};

export default PostItem;