import React from 'react';
import styles from './Table.module.css'
import TableItem from "./TableItem";

function Table({data}) {
  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th>No</th>
        <th>제목</th>
        <th>내용</th>
      </tr>
      </thead>
      <tbody>
      {data?.length === 0 ? <tr><td colSpan="3">데이터가 없습니다.</td></tr> : data?.map((post) => <TableItem key={post.id} id={post.id} title={post.title} body={post.body} />)}
      </tbody>
    </table>
  );
}

export default Table;