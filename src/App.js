import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostsInput from "./components/UI/input/PostsInput";
import PostsButton from "./components/UI/button/PostsButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript 1", body: "Description..."},
        {id: 2, title: "JavaScript 2", body: "Description..."},
        {id: 3, title: "JavaScript 3", body: "Description..."}
    ]);

    return (
        <div className="App">
            <form>
                <PostsInput type="text" placeholder="Название поста"/>
                <PostsInput type="text" placeholder="Описание поста"/>
                <PostsButton>Создать пост</PostsButton>
            </form>
            <PostList posts={posts} title="Список JS постов" />
        </div>
    );
}

export default App;
