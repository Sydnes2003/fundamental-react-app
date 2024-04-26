import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import CustomSelect from "./components/UI/select/CustomSelect";
import CustomInput from "./components/UI/input/CustomInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript 1", body: "Description..."},
        {id: 2, title: "JavaScript 2", body: "Description..."},
        {id: 3, title: "JavaScript 3", body: "123123123."}
    ]);
    const [selectedSort, setSelectedSort] = useState('')

    const options = [
        {value: "title", name: "По названию"},
        {value: "body", name: "По описанию"}
    ];

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };
    const sortPosts = (sort) => {
        setSelectedSort(sort);
        // console.log(sort);
        setPosts([...posts].sort(
            (a,b) =>
                a[sort].localeCompare(b[sort])
        ));
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0', border: '1px solid teal'}}/>
            <CustomInput
                placeholder="Поиск..."
            />
            <CustomSelect
                value={selectedSort}
                onChange={sortPosts}
                options={options}
                defaultValue="Сортировка"
            />
            {posts.length
                ?   <PostList remove={removePost} posts={posts} title="Список JS постов" />
                :   <h1 style={{textAlign: 'center'}}>
                        Посты не найдены
                    </h1>
            }
        </div>
    );
}

export default App;
