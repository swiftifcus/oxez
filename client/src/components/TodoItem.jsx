import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ title, body }) => {
  return (
    <div>
      <div className="card">
        <div className="container">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
