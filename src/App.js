import React, { useState } from "react";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";

function App() {
  const [inputs, setInputs] = useState([]);
  const [val, setVal] = useState(false);
  const InputHandler = (input) => {
    setInputs((prevUsersList) => {
      return [...prevUsersList, { input, id: Math.random().toString() }];
    });
    setVal(true);
  };
  return (
    <div className="main">
      <Input onAddInput={InputHandler} />
      {!val ? <div></div> : <Result data={inputs} />}
    </div>
  );
}

export default App;
