import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

function ShoesList(props) {
  const history = useHistory();
  return (
    <Col
      onClick={() => {
        history.push(`/detail/${props.shoe.id}`);
      }}
      md={4}
    >
      <img
        className="w-100"
        src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`}
        alt="k"
      />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
      <p>{props.shoe.price}</p>
    </Col>
  );
}

export default ShoesList;