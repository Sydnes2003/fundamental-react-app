import React from 'react';
import DefaultButton from "./UI/button/DefaultButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate();

    return (
        <div className="post _border_decorated">
            <article className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </article>
            <div className="post__btns">
                <DefaultButton style={{marginBottom: '10px'}} onClick={() => {router(`/posts/${props.post.id}`)}}>
                    Открыть пост
                </DefaultButton>
                <DefaultButton onClick={() => props.remove(props.post)}>
                    Удалить пост
                </DefaultButton>
            </div>
        </div>
    );
};

export default PostItem;