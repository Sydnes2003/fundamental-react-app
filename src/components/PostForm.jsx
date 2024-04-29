import React, {useState} from 'react';
import DefaultInput from "./UI/input/DefaultInput";
import DefaultButton from "./UI/button/DefaultButton";

const PostForm = ({create, className}) => {

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (event) => {
        event.preventDefault();

        const newPost = {
            ...post, id: Date.now()
        };

        create(newPost);
        setPost({ title: '', body: '' });
    }

    return (
        <form className={className}>
            <DefaultInput
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <DefaultInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <DefaultButton onClick={addNewPost}>Создать пост</DefaultButton>
        </form>
    );
};

export default PostForm;