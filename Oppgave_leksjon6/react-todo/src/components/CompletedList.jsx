import React, { useState } from 'react';

import CompletedListItem from './CompletedListItem';
import Search from './Search';

function CompletedList({ completed, setCompleted }) {
  const [search, setSearch] = useState('');

  return (
    <summary id="summarySection">
      <h2>Completed todos</h2>
      <Search setSearch={setSearch} />
      <table id="completedTable">
        <tbody>
          <tr id="titles">
            <th className="completedTableColumnName" id="columnTitle">
              Title
            </th>
            <th className="completedTableColumnName" id="columnAuthor">
              Author
            </th>
            <th className="completedTableColumnName" id="columnDesc">
              Description
            </th>
            <th className="completedTableColumnName" id="columnCompDate">
              Completed date
            </th>
          </tr>

          <CompletedListItem
            setCompleted={setCompleted}
            completed={completed}
            search={search}
          />
        </tbody>
      </table>
    </summary>
  );
}

export default CompletedList;
