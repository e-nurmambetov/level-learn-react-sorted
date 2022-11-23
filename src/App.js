import React, {useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {body: 'Adidas',title: 'Prius', id: 1},
    {body: 'Deasel',title: 'Foot', id: 2},
    {body: 'Zara',title: 'Atom', id: 3} //очерёдеость не имеет значения
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSortedPosts()
  
  //Получем post из дочернего компонента
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  //Получем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id)) 
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }
  
  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Поиск...'
        />
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
        />
      </div>
      {posts.length !== 0 // Можно не писать '!== 0'
        ? 
        <PostList remove={removePost} posts={sortedPosts} title='Посты про JS' God='We trust in God'/>
        : 
        <h1 style={{textAlign: 'center', color: 'red'}}>
            Посты не найдены!
        </h1>
      }
    </div>
  );
}

export default App;
  

  