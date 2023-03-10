import React from 'react';

function TableItem({id, title, body}) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    </>
  );
}

export default TableItem;