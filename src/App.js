import React, { useState } from 'react';
import { useEffect } from 'react';
import queryString from 'query-string';
import './App.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFilterForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import Clock2 from './components/Clock2';
import MagicBox from './components/MagicBox';

function App() {
  const [todoList , setTodoList] = useState([{
    id : 1 , 
    title : 'I love frontend developer' ,
    },
    {
    id : 2 , 
    title : 'We love easyFrontend' , 
    },
    {
    id : 3 , 
    title : 'They love easyFrontend' , 
    }
  ]);

  const [postList , setPostList] = useState([]) ; 
  const [pagination , setPagination] = useState({
      _page : 1 , 
      _limit : 10 , 
      _totalRows : 11 ,
  });
  const [filters, setFilter] = useState({
    _limit : 10 , 
    _page : 1 ,
  })
// call api
  useEffect(() => {
    async function fetchPostList(){
        try {
          //_limit = 10 &_page=1
          const paramsString = queryString.stringify(filters) ;
          const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}` ; 
          const response = await fetch(requestUrl) ; 
          const responseJSON = await response.json() ;
          console.log({responseJSON}) ;
          const {data , pagination} = responseJSON ; 
          setPostList(data) ;
          setPagination(pagination) ;
        } catch (error) {
          console.log('Failed to fetch post list : ' , error.message) ;
        }
    }
    fetchPostList() ;
  },[filters]);

  function handlePageChange(newPage){
    console.log('New page : ' , newPage) ;
    setFilter({
      ...filters , 
      _page : newPage ,
    })
  }

  function handleTodoClick(todo){
      const index = todoList.findIndex(x => x.id === todo.id) ; 
      if(index < 0) return ; 
      const newTodoList = [...todoList] ; 
      newTodoList.splice(index , 1) ;
      setTodoList(newTodoList) ;
  }
  function handleTodoFormSubmit(formValues){
      // console.log(formValues) ;
      const newTodo = {
        id : todoList.length + 1 ,
        ...formValues ,
      };
      const newTodoList = [...todoList] ; 
      newTodoList.push(newTodo) ;
      setTodoList(newTodoList) ;
  }
  function handleFiltersChange(newFilters){
      setFilter({
        ...filters , 
        _page : 1 , 
        title_like : newFilters.searchTerm ,
      })
  }
  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      <h2>TodoList</h2>
      <PostFilterForm onSubmit={handleFiltersChange}/>
      <PostList  posts = {postList}/>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos = {todoList} onTodoClick={handleTodoClick}/> */}
      <Clock />
      <Clock2 />
      <MagicBox />
    </div>
  );
}

export default App;
