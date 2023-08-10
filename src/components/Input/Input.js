import React, { useState } from "react";
import styles from './Input.module.css';
import Card from "../UI/Card";

function Input(props) {
  const [input, setInput] = useState({
    username: "Khadija",
    age: 21,
  });
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
    props.onAddInput(input);
  };

  return (
    <Card className={styles.input}>
    <form onSubmit={SubmitHandler} className={styles.form}>
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
        <button type="submit">Add User</button>
      </div>
    </form>
    </Card>
  );
}

export default Input;
