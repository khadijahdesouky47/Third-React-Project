import React, { useState } from "react";
import styles from "./Input.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function Input(props) {
  const [input, setInput] = useState({});
  const InputHandler = (id, value) => {
    setInput((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if(input.username.trim().length === 0 || input.age.toString().trim().length === 0) return;
    if(+input.age < 1) return;
    props.onAddInput(input);
    setInput(()=>{
      return{
        username: "",
        age: ""
      }
    })
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={SubmitHandler}>
        <div>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              value={input.username}
              onChange={(event) => InputHandler("username", event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={input.age}
              onChange={(event) => InputHandler("age", +event.target.value)}
            />
          </div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
}

export default Input;
