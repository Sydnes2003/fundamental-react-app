import React, {useEffect, useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import CustomModal from "./components/UI/modal/CustomModal";
import CustomButton from "./components/UI/button/CustomButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import CustomLoader from "./components/UI/loader/CustomLoader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const searchedSortedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, arePostsLoading, postsFetchingError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    })

    useEffect(() => {
        fetchPosts();
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <CustomButton onClick={fetchPosts}>
                Загрузить посты
            </CustomButton>

            <CustomButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пост
            </CustomButton>

            <CustomModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </CustomModal>

            <hr style={{margin: '15px 0', border: '1px solid teal'}}/>

            <PostFilter filter={filter} setFilter={setFilter} />

            { postsFetchingError &&
                <h1 style={{marginTop: '30px', textAlign: 'center'}}>
                    ОШИБКА! {postsFetchingError}
                </h1>
            }

            { arePostsLoading
                ?   <div style={{marginTop: '30px', display: 'flex', alignItems: 'center', flexFlow: 'column nowrap'}}>
                        <h1 style={{marginBottom: '50px', textAlign: 'center'}}>
                            Загрузка
                        </h1>
                        <CustomLoader />
                    </div>
                :   <PostList remove={removePost} posts={searchedSortedPosts} title="Список JS постов" />
            }
        </div>
    );
}

export default App;
