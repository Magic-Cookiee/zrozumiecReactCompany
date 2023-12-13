import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./ContactSection.module.css";

export function Form({
  userEmail,
  setUserEmail,
  message,
  setMessage,
  setShowForm,
  setUserQuestion,
  userQuestion,
}) {
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    return Boolean(
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };
  function onFormSubmit(event) {
    event.preventDefault();
    if (!message || !userEmail) {
      setInputError("Pole nie może być puste");
    } else if (!validateEmail(userEmail)) {
      setEmailError("Sprawdź adres email");
    } else {
      setShowForm(false);
      setUserQuestion((prevQuestion) => {
        prevQuestion.push({
          user: userEmail,
          text: message,
          key: userQuestion.length + 1,
        });
        return [...prevQuestion];
      });
      setInputError("");
      setEmailError("");
    }
  }

  return (
    <form onSubmit={onFormSubmit} className={styles.contactSection}>
      <span className={styles.spanText}>
        Masz pytania?<br></br>Zostaw nam wiadomość.
      </span>
      <label htmlFor="email">Twój adres e-mail</label>
      <input
        placeholder={inputError}
        onChange={(event) => setUserEmail(event.target.value)}
        className={styles.inputStyles}
        id="email"
        type="text"
        name="email"
        value={userEmail}
      ></input>
      {emailError && <p className={styles.emailError}>{emailError}</p>}
      <label htmlFor="text">Twoja wiadomość</label>
      <textarea
        placeholder={inputError}
        onChange={(event) => setMessage(event.target.value)}
        value={message}
        className={styles.inputStyles}
        type="text"
        id="text"
        name="text"
        style={{ height: "140px" }}
      ></textarea>
      <Button type="submit">Wyślij wiadomość</Button>
    </form>
  );
}
