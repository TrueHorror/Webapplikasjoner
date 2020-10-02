import React from 'react';

function Search({ setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
    // updateCompleted(e);
  };
  return (
    <div id="searchBox">
      <input
        placeholder="Seach by Title..."
        type="text"
        id="searchBoxInput"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
