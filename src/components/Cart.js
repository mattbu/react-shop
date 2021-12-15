import React from "react"
import { Container, Row, Col, Table } from "react-bootstrap"
import { connect } from "react-redux"

function Cart(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
              </tr>
            </thead>
            <tbody>
              {props.state.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity} 켤레</td>
                    <td>Table cell</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

function asd(state) {
  console.log(state)
  return {
    state: state
  }
}

export default connect(asd)(Cart)
