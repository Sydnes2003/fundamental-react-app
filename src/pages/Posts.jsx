import React, {useEffect, useRef, useState} from 'react';
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
import {useObserver} from "../hooks/useObserver";
import DefaultSelect from "../components/UI/select/DefaultSelect";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [pages, setPages] = useState({limit: 10, current: 1, total: 0});
    const [modal, setModal] = useState(false);
    const [fetchPosts, arePostsLoading, postsFetchingError] = useFetching(async () => {
        const response = await PostService.getAll(pages.limit, pages.current);
        setPosts([...posts, ...response.data]);

        const totalCount = response.headers['x-total-count'];
        setPages({...pages, total: getPagesCount(totalCount, pages.limit)});
    });
    const searchedSortedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    useObserver(lastElement, pages.current < pages.total, arePostsLoading, () => {
            setPages({...pages, current: pages.current + 1})
    });

    useEffect(() => {
        fetchPosts();
    }, [pages.current, pages.limit]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };
    const changePage = (page) => {
        setPages({...pages, current: page});
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
                <PostForm create={createPost}/>
            </DefaultModal>

            <hr className='hr'/>

            <PostFilter className='post-filter__wrapper' filter={filter} setFilter={setFilter}/>

            <DefaultSelect
                value={pages.limit}
                onChange={value => setPages({...pages, limit: value})}
                defaultValue='Выберите кол-во постов на странице'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: 50, name: '50'}
                ]}
            />

            {postsFetchingError &&
                <h1 className='error__title'>
                    ОШИБКА! {postsFetchingError}
                </h1>
            }

            <PostList
                className='post-list'
                remove={removePost}
                posts={searchedSortedPosts}
                title="Список JS постов"
            />

            <div ref={lastElement} className="observer" style={{background: 'transparent', height: '1px'}}></div>

            {arePostsLoading &&
                <div className='loader__wrapper'>
                    <h1 className='loader__title'>Загрузка</h1>
                    <DefaultLoader className='DefaultLoader'/>
                </div>
            }

            <Pagination
                totalPages={pages.total}
                changePage={changePage}
                page={pages.current}
            />
        </div>
    );
};

export default Posts;