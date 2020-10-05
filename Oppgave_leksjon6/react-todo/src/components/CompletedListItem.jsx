import React from 'react';

function CompletedListItem({ completed, search }) {
  // Borrowed from https://codehandbook.org/javascript-date-format/
  function appendLeadingZeroes(n) {
    if (n <= 9) {
      return `0${n}`;
    }
    return n;
  }

  const getDate = () => {
    const date = new Date();
    const formattedDate = `${appendLeadingZeroes(
      date.getDate()
    )}.${appendLeadingZeroes(date.getMonth() + 1)}.${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <>
      {completed.map(
        (todo) =>
          todo.title.includes(
            search
          ) /* includes er case sensetive, fant ingen løsning */ && (
            <tr className="listItems" key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.author}</td>
              <td>{todo.description}</td>
              <td>{getDate()}</td>
            </tr>
          )
      )}
    </>
  );
}

export default CompletedListItem;
