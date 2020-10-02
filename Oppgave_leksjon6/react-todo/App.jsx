import React, { useState } from 'react';

import CompletedList from './src/components/CompletedList';
import Modal from './src/components/Modal';
import Navbar from './src/components/Navbar';
import Search from './src/components/Search';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';

function App() {
  const [overlay, setOverlay] = useState(false);
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [count, setCount] = useState(0);

  const [completed, setCompleted] = useState([]);

  const [charsLeft, setCharsLeft] = useState(50);

  const idCount = () => {
    setCount((c) => c + 1);
  };

  const handleOverlay = () => {
    setOverlay((so) => !so);
  };

  const handleCreateCard = () => {
    setTodos((prev) => [{ id: count, ...formData }, ...prev]);
    idCount();
    handleOverlay();
    console.log('cardAdded');
  };

  const removeTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const completeTodo = (id) => {
    const completedTodoObj = todos.filter((todo) => todo.id === id);
    setCompleted((prev) => [...completedTodoObj, ...prev]);
    removeTodo(id);
  };

  return (
    <>
      <Navbar />
      {overlay && (
        <Modal
          handleOverlay={handleOverlay}
          handleCreateCard={handleCreateCard}
          setFormData={setFormData}
          formData={formData}
          setCharsLeft={setCharsLeft}
          charsLeft={charsLeft}
        />
      )}
      <main>
        <TodoButton handleOverlay={handleOverlay} />

        {todos && todos.length < 1 ? (
          <p>Jippi, ingen todos!</p>
        ) : (
          <TodoCardList
            todos={todos}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        )}

        <CompletedList completed={completed} setCompleted={setCompleted} />
      </main>
    </>
  );
}

export default App;
