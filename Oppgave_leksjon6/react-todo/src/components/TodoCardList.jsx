import React from 'react';

import TodoCard from './TodoCard';

function TodoCardList({ todos, removeTodo, completeTodo }) {
  return (
    <section id="todoCardSection">
      <div className="cardWrapper">
        <TodoCard
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      </div>
    </section>
  );
}

export default TodoCardList;
