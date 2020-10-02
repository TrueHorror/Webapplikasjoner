import React from 'react';

function TodoButton({ handleOverlay }) {
  return (
    <>
      <button onClick={handleOverlay} id="addTodoBtn" type="button">
        <i className="material-icons">add</i>Todo
      </button>
    </>
  );
}

export default TodoButton;
