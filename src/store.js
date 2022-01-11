import { combineReducers, createStore } from "redux"

const initAlert = true

function reducerB(state = initAlert, action) {
  if (action.type === "close") {
    state = false
    return state
  } else {
    return state
  }
}

const initState = [
  { id: 0, name: "멋진 신발", quantity: 2 },
  { id: 1, name: "에어 조던", quantity: 20 },
  { id: 2, name: "클락스", quantity: 0 },
  { id: 3, name: "블런드 스톤", quantity: 12 },
  { id: 4, name: "뉴발란스 992", quantity: 1 }
]

function reducerA(state = initState, action) {
  if (action.type === "plus") {
    const copyState = [...initState]
    copyState[action.index].quantity++
    return copyState
  } else if (action.type === "minus") {
    const copyState = [...initState]
    copyState[action.index].quantity--
    return copyState
  } else {
    return state
  }
}

export const store = createStore(combineReducers({ reducerA, reducerB }))
