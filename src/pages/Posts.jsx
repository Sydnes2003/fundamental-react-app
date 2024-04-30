import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import DefaultButton from "../components/UI/button/DefaultButton";
import DefaultModal from "../components/UI/modal/DefaultModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import DefaultLoader from "../components/UI/loader/DefaultLoader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const searchedSortedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, arePostsLoading, postsFetchingError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    //
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    //


    const changePage = (page) => {
        setPage(page);
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="Posts">
            <div className='post-button__wrapper'>
                <DefaultButton className='post-button_load' onClick={fetchPosts}>
                    Загрузить посты
                </DefaultButton>

                <DefaultButton className='post-button_create' onClick={() => setModal(true)}>
                    Создать пост
                </DefaultButton>
            </div>

            <DefaultModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </DefaultModal>

            <hr className='hr'/>

            <PostFilter className='post-filter__wrapper' filter={filter} setFilter={setFilter} />

            { postsFetchingError &&
                <h1 className='error__title'>
                    ОШИБКА! {postsFetchingError}
                </h1>
            }

            { arePostsLoading
                ?   <div className='loader__wrapper'>
                    <h1 className='loader__title'>Загрузка</h1>
                    <DefaultLoader className='loader' />
                </div>
                :   <PostList className='post-list' remove={removePost} posts={searchedSortedPosts} title="Список JS постов" />
            }

            <Pagination
                totalPages={totalPages}
                changePage={changePage}
                page={page}
            />
        </div>
    );
};

export default Posts;