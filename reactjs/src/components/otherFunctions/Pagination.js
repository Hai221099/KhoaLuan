import { useState } from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationFunction(props) {
  const { total } = props;
  const test = (e) => {
    console.log(e);
  };
  const totalPage = Math.floor(total / 10) + 1;

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />

      <Pagination.Item
        onClick={() => {
          test(totalPage);
        }}
      >
        {1}
      </Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}
