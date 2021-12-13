/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "../style/Detail.scss";
import axios from "axios";

let Box = styled.div`
  padding: 20px;
  background-color: red;
`;
const H44 = styled.h4`
  font-size: 40px;
  color: ${props => props.color};
  color: ${props => props.secondColor};
`;

function Detail(props) {
  const { id } = useParams();
  const history = useHistory();

  const shoe = props.shoes.find((item, index) => {
    return item.id == id;
  });
  const idx = props.shoes.findIndex((i, a) => {
    return i.id == id;
  });

  const [isLoading, setIsLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(true);

  const [isTest, setIsTest] = useState("");
  const inputValue = e => {
    setIsTest(e.target.value);
    console.log(isTest);
  };

  const getShoe = async () => {
    const res = await axios.get("https://codingapple1.github.io/shop/data2.json");
  };

  useEffect(() => {
    // 컴포넌트 등장 and 업데이트 시 실행됨
    console.log("mounted");
    getShoe();

    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    // 2초 안지나서 페이지 나갈때 안보이지만 나중에 문제가 될 수도 있으니
    // 페이지 나갈때 꺼준다. return function은 페이지 벗어날때 실행됨.
    return () => {
      console.log("빠이 ㅋ");
      clearTimeout(timer);
    };

    // return () => {
    //   console.log("unmounted");
    // };
  }, []);
  // 조건 같은 것임 showAlert(스테이트)가 업데이트 될때만,
  // 빈칸 시 등장시만 실행 업데이트 되도 실행x

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Box>
            <H44 className="blue">Detail</H44>
          </Box>

          <input onChange={inputValue} type="text" />
          {isTest}

          {showAlert ? (
            <div className="stock-alert">
              <p>재고가 얼마 남지 않았습니다.</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <Info stock={props.stock} index={idx} />
          <button
            className="btn btn-danger"
            onClick={() => {
              const newStock = [...props.stock];
              newStock[idx] = newStock[idx] - 1;
              props.setStock(newStock);
              console.log(newStock);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Info(props) {
  return <p>ㅈㅐ고: {props.stock[props.index]}</p>;
}

export default Detail;
