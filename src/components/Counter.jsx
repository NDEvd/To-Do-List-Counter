import React from "react";
import { observer } from "mobx-react-lite"
// import './App.css';
import './Counter.css';
import counter from "../store/counter"

const Counter = observer(() => {
  return (
    <div className="counter">
      {"count =" + counter.count}
      <div>
        <button className="counter__button" onClick={() => counter.increment()}>+</button>
        <button className="counter__button" onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
  )
})

export default Counter