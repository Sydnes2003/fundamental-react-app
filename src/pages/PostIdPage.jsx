import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import DefaultLoader from "../components/UI/loader/DefaultLoader";
import CommentList from "../components/CommentList";

const PostIdPage = () => {
    const params = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isPostLoading, postFetchingError] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        console.log(response.data);
        setPost(response.data);
    });
    const [fetchCommentsById, areCommentsLoading, commentsFetchingError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id);
        console.log(response.data);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchCommentsById();
    }, []);

    return (
        <div>
            {isPostLoading
                ? <DefaultLoader className='DefaultLoader'/>
                : <div>
                    <h1 className='comments__page-title'>Вы попали в комментарии к посту №{params.id}</h1>
                    <div className='comments__post'>
                        {post.id}. {post.title}
                    </div>

                    {areCommentsLoading && !comments.length
                        ? <DefaultLoader className='DefaultLoader'/>
                        : <CommentList comments={comments}/>
                    }
                </div>
            }
        </div>
    );
};

export default PostIdPage;