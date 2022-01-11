import React from "react"
import { Container, Row, Col, Table } from "react-bootstrap"
import { connect } from "react-redux"
import { Button, Spacing } from "react-bootstrap"

const controlQuantity = (type, props, index) => {
  console.log(type, props, index)
  props.dispatch({ type: type, index: index })
}

const closeAlert = (type, props) => {
  props.dispatch({ type: type })
}

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
                    <td className="ml-5">{item.quantity}</td>
                    <td>
                      <Button onClick={() => controlQuantity("plus", props, index)}>+</Button>
                      <Button
                        className="ms-1"
                        onClick={() => controlQuantity("minus", props, index)}
                      >
                        -
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          {props.showAlert ? (
            <div className="stock-alert">
              <p>지금 구매하시면 신규할인 200%!</p>
              <button onClick={() => closeAlert("close", props)}>닫기</button>
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  )
}

// state를 props화
function stateToProps(state) {
  return {
    state: state.reducerA,
    showAlert: state.reducerB
  }
}

export default connect(stateToProps)(Cart)
