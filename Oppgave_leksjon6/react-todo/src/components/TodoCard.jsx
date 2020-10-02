import React from 'react';

function TodoCard({ todos, removeTodo, completeTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <article className="todoCards" key={todo.id}>
          <h3 className="todoTitle">{todo.title}</h3>
          <p className="todoParagraph">{todo.description}</p>
          <div className="btnWrapper">
            <input
              onClick={() => removeTodo(todo.id)}
              type="button"
              id="firstDel"
              className="cardDeleteBtn"
              value="Delete"
            />
            <input
              onClick={() => completeTodo(todo.id)}
              type="button"
              id="firstCom"
              className="cardCompleteBtn"
              value="Complete"
            />
          </div>
        </article>
      ))}
    </>
  );
}

export default TodoCard;
