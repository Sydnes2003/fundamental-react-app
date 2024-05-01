import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove, className}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        );
    }

    return (
        <div className={className}>
            <h1 style={{textAlign: 'center', marginBottom: '30px'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem post={post} remove={remove}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;