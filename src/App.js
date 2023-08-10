import React, { useState } from 'react';
import Input from './components/Input/Input';
import Result from './components/Result/Result';

function App() {
  const [inputs,setInputs] = useState([]);
  const InputHandler = (input) =>{
    setInputs((prevUsersList) => {
      return [
        ...prevUsersList,
        {input, id: Math.random().toString()},
      ];})
    console.log(inputs);
  }
  return (
    <div className='main'>
      <Input onAddInput ={InputHandler}/>
      <Result data={inputs}/>
    </div>
  );
}

export default App;
