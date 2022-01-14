import React from "react"
import { useEffect } from "react"
import { Container, Row, Col, Table } from "react-bootstrap"
import { Button, Spacing } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"

function Cart() {
  const state = useSelector(state => {
    return state
  })
  console.log(state)
  const dispatch = useDispatch()

  const closeAlert = type => {
    dispatch({ type: type })
  }
  useEffect(() => {
    console.log("그만!")
  }, [])
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
              {state.reducerA.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td className="ml-5">{item.quantity}</td>
                    <td>
                      <Button
                        onClick={() => {
                          dispatch({ type: "plus", index: index })
                        }}
                      >
                        +
                      </Button>
                      <Button
                        className="ms-1"
                        onClick={() => {
                          dispatch({ type: "minus", index: index })
                        }}
                      >
                        -
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          {state.reducerB ? (
            <div className="stock-alert">
              <p>지금 구매하시면 신규할인 200%!</p>
              <button onClick={() => closeAlert("close", state.reducerB)}>닫기</button>
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  )
}

// state를 props화
// function stateToProps(state) {
//   return {
//     state: state.reducerA,
//     showAlert: state.reducerB
//   }
// }
export default Cart
// export default connect(stateToProps)(Cart)
