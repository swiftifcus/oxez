import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onBodyChange = e => {
    setBody(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const todo = {
      title,
      body,
    };
    axios.post('http://localhost:3200/todo/newTodo', todo).then(res => {
      console.log(res);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onTitleChange} type="text" placeholder="Title" />
        <input onChange={onBodyChange} type="text" placeholder="Body" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoForm;
