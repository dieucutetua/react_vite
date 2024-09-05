import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import logo from './assets/react.svg'
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "ltd" },
    // { id: 2, name: "abc" }
  ])
  const addNewTodo = (name) => {
    // alert(`call me ${name}`)
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
    //array.push
  }
  const deleteTodo = (id) => {
    // console.log("s")
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo);
  }
  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // addNewTodo()
  return (
    <>
      <Header />
      <div className="todo_container">
        <div className="todo_title">Todo List</div>

        <TodoNew
          addNewTodo={addNewTodo} />
        {todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
          :
          <div className='todo_img'>
            <img src={logo} className='logo' />
          </div>}

        {/* <TodoNew
        addNewTodo={addNewTodo} />
      {todoList != 0 &&
        <TodoData
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&
        <div className='todo_img'>
          <img src={logo} className='logo' />
        </div>} */}

      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
