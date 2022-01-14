import React, { useContext, useEffect } from "react"
import { Col } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom"

import { stockContext } from "../App"

function ShoesList(props) {
  const history = useHistory()
  const stock = useContext(stockContext)
  return (
    <Col
      onClick={() => {
        history.push(`/detail/${props.shoe.id}`)
      }}
      md={4}
    >
      <img
        className="w-100"
        src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`}
        alt="k"
      />
      {stock}
      <h4>{props.shoe.name}</h4>
      <p>{props.shoe.content}</p>
      <p>{props.shoe.price}</p>
    </Col>
  )
}

export default ShoesList
