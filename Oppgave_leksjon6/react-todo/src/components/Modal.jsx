import React from 'react';

function Modal({
  handleOverlay,
  handleCreateCard,
  setFormData,
  formData,
  setCharsLeft,
  charsLeft,
}) {
  const [emptyState, setEmptyState] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateCard();
    setFormData({}); // funker sånn meh... gjør om inputfeltene til uncontrolled så hakke peiling ka eg skal gjøre
    setCharsLeft(50);
  };
  const updateCharsLeft = (e) => {
    const maxChars = 50;
    setCharsLeft(maxChars - e.target.value.length);
  };

  const updateValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'description') {
      updateCharsLeft(e);
    }
  };

  return (
    <>
      <div id="overlay">
        <section id="formView">
          <h3>New Todo</h3>
          <i className="material-icons" onClick={handleOverlay}>
            clear
          </i>
          <form autoComplete="off" id="newCardForm" onSubmit={handleSubmit}>
            <label htmlFor="titleNewTodo">Title</label>
            <input
              id="titleNewTodo"
              type="text"
              name="title"
              value={formData.title}
              onChange={updateValue}
            />

            <div id="labelWrapper">
              <label htmlFor="descNewTodo">Description</label>
              <p>
                (<span id="charLeft">{charsLeft}</span> characters left)
              </p>
            </div>
            <input
              id="descNewTodo"
              type="text"
              maxLength="50"
              name="description"
              value={formData.description}
              onChange={updateValue}
            />

            <label htmlFor="authNewTodo">Author</label>
            <input
              id="authNewTodo"
              type="text"
              name="author"
              value={formData.author}
              onChange={updateValue}
            />

            <input id="createBtn" type="submit" value="Create" />
          </form>
        </section>
      </div>
    </>
  );
}

export default Modal;
