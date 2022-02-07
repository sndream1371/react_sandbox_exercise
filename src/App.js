import React, { useEffect, useState } from "react";
import "./styles.css";

const disapply = () => {
  return "DISPLAY";
};

function Example() {
  const [count, setCount] = useState(0);
  const [onOff, setOnOff] = useState(false);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  const increaseCount = () => {
    setCount(count + 1);
    setOnOff(!onOff);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <button onClick={increaseCount}>Click me {disapply()}</button>
      {onOff && <div>켜짐</div>}
      {!onOff && <div>꺼짐 OFF</div>}
    </div>
  );
}

export default Example;
