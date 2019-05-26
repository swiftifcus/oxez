import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:3200/todo/todos');
      const data = await res.data;
      setTodos(data.todos);
    }
    fetchData();
  }, [todos]);

  return (
    <div>
      <ul>
        <li>
          {todos
            ? todos.map(todo => (
                <TodoItem
                  key={todo.title}
                  title={todo.title}
                  body={todo.body}
                />
              ))
            : 'loading'}
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
