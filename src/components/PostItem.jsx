import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <article className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </article>
            <div className="post__btns">
                <button>Удалить пост</button>
            </div>
        </div>
    );
};

export default PostItem;