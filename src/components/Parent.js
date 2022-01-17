import React from "react"
import { useState } from "react"
import { useEffect, memo } from "react"
import { Button } from "react-bootstrap"

function Parent() {
  const [user1, setUser1] = useState({
    name: "Eden Hazard",
    team: "Chelsea Fc",
    number: 10
  })
  const transfer = () => {
    const newUser = { ...user1 }
    newUser.team = "Real Madrid"
    newUser.number = 7
    setUser1(newUser)
  }
  return (
    <div>
      <Child1 name={user1}></Child1>
      <Button onClick={transfer}>나 이적할랭</Button>
      <Child2 team={user1.number}></Child2>
    </div>
  )
}

function Child1(props) {
  useEffect(() => {
    console.log("렌더링111")
  })
  return (
    <div>
      <h1>{props.name.name}</h1>
      <h4>{props.name.team}</h4>
    </div>
  )
}

const Child2 = memo(props => {
  useEffect(() => {
    console.log("렌더링2")
  })
  return <div>{props.team}</div>
})
export default Parent
