import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModel.module.css";

function Error(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.isConfirmed}/>
      <Card className={styles.model}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <body className={styles.content}>
          <p>{props.message}</p>
        </body>
        <footer className={styles.actions}>
          <Button onClick={props.isConfirmed}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default Error;
