import React from "react";
import styles from "./Result.module.css";
import Card from "../UI/Card";

function Result(props) {
  return (
    <Card className={styles.users}>
    <ul>
      {props.data.map((user) => (
        <Card key={user.id}>
        <li key={user.id} className={styles.element}>
          {user.input.username} ({user.input.age} years old)
        </li>
        </Card>
      ))}
    </ul>
    </Card>
  );
}

export default Result;
