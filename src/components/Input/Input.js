import React, { useState } from "react";
import styles from "./Input.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/ErrorModel";

function Input(props) {
  const [input, setInput] = useState({
    username: "",
    age: "",
  });
  const [errorInd, setErrorInd] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    message: "",
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
    if (
      input.username.trim().length === 0 ||
      input.age.toString().trim().length === 0
    ) {
      setErrorInd(true);
      setErrorMessage({
        title: "Something was not entered",
        message: "Please enter sufficient username and age.",
      });
      return;
    }
    if (+input.age < 1) {
      setErrorInd(true);
      setErrorMessage({
        title: "Invalid data entered",
        message: "Please enter a valid age.",
      });
      return;
    }
    props.onAddInput(input);
    setInput(() => {
      return {
        username: "",
        age: "",
      };
    });
  };
  const errorHandler = () => setErrorInd(false);

  return (
    <div>
      {errorInd && (
        <Error
          title={errorMessage.title}
          message={errorMessage.message}
          isConfirmed={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={SubmitHandler}>
          <div>
            <div>
              <label htmlFor="username">User Name</label>
              <input
                id="username"
                type="text"
                value={input.username}
                onChange={(event) =>
                  InputHandler("username", event.target.value)
                }
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
    </div>
  );
}

export default Input;
