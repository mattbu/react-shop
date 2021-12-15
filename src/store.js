import { createStore } from "redux"

// export const store = createStore(() => {
//   return [{ id: 0, name: "멋진 신발", quantity: 2 }]
// })
// // -> import { store } from "./store"

const store = createStore(() => {
  return [
    { id: 0, name: "멋진 신발", quantity: 2 },
    { id: 1, name: "에어 조던", quantity: 20 },
    { id: 2, name: "클락스", quantity: 0 },
    { id: 3, name: "블런드 스톤", quantity: 12 },
    { id: 4, name: "뉴발란스 992", quantity: 1 }
  ]
})

export default store
// -> import store from "./store"
