import React from 'react';

const CommentList = ({comments}) => {
    return (
        <div className='comments__wrapper'>
            {comments.map((comment, index) =>
                <div key={index} className='comment _border_decorated'>
                    <h3 className='comment__header'>{comment.id}. {comment.name}</h3>
                    <p className='comment__body'>{comment.body}</p>
                    <address className='comment__email'>{comment.email}</address>
                </div>
            )}
        </div>
    );
};

export default CommentList;