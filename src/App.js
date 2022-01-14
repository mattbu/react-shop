/* eslint-disable */
import React, { useState } from "react"
import { Navbar, Container, Row, Col, Nav, Button, Spinner } from "react-bootstrap"
import "./App.scss"
import ShoesList from "./components/shoesList"
import Detail from "./components/Detail"
import Cart from "./components/Cart"
import Data from "./data"
import axios from "axios"

import { Link, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

export const stockContext = React.createContext()

function App(props) {
  const [shoes, setShoes] = useState(Data)
  const [stock, setStock] = useState([10, 11, 12])

  const [isLoading, setIsLoading] = useState(false)

  const [clickCount, setClickCount] = useState(0)

  const fetchMore = () => {
    setIsLoading(true)
    setClickCount(clickCount + 1)
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then(res => {
        setIsLoading(false)
        const newShoes = [...shoes]
        newShoes.push(...res.data)
        setShoes(newShoes)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Container fluid>
            <Row className="jumbotron p-5">
              <Col>
                <h1 className="p-5 text-center">Black Friday Sale!</h1>
              </Col>
            </Row>
            <stockContext.Provider value={stock}>
              <Row>
                {shoes.map((shoe, index) => {
                  return <ShoesList key={index} shoe={shoe} index={index} />
                })}
              </Row>
            </stockContext.Provider>
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : null}
            {clickCount === 0 ? (
              <Button variant="danger" onClick={fetchMore}>
                더보기
              </Button>
            ) : null}
          </Container>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} setShoes={setShoes} stock={stock} setStock={setStock} />
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  )
}

export default App
