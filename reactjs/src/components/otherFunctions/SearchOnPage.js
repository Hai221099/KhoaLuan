import { Button, Form } from "react-bootstrap";
import Autocomplete from "react-autocomplete";
import { useState, useEffect } from "react";
import "./otherFunctions.css";

function renderName(state, val) {
  return state.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
  //   return state.name;
}

export default function Search(props) {
  const { list, getKey } = props;
  const [keyWord, setKeyWord] = useState("");
  const getKeyWord = (e) => {
    setKeyWord(e.target.value);
    getKey(e.target.value);
  };
  const getTotalKeyWord = (e) => {
    setKeyWord(e);
    getKey(e);
  };
  return (
    <div>
      <Form className="search-page">
        <Form.Label>Tìm kiếm</Form.Label>
        <div>
          {/* <Form.Control className="searchInput inline"></Form.Control> */}
          <Autocomplete
            value={keyWord}
            items={list}
            getItemValue={(item) => item.name}
            shouldItemRender={renderName}
            renderMenu={(item) => <div className="dropdown">{item}</div>}
            renderItem={(item, isHighlighted) => (
              <div
                key={item.id}
                className={`item ${isHighlighted ? "selected-item" : ""}`}
              >
                {item.name}
              </div>
            )}
            onChange={getKeyWord}
            onSelect={getTotalKeyWord}
          ></Autocomplete>
          {/* <Button className="inline buttonSearch" >Tìm kiếm</Button> */}
        </div>
      </Form>
    </div>
  );
}
