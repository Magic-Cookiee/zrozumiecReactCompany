import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const [showForm, setShowForm] = useState(true);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [userQuestion, setUserQuestion] = useState([]);
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [renderQuestions, setRenderQuestions] = useState(true);

  function onFormSubmit(event) {
    event.preventDefault();
    if (!message || !userName) {
      setInputError("Pole nie może być puste");
    } else if (!userName.includes("@") || !userName.includes(".")) {
      setEmailError("Sprawdź adres email");
    } else {
      setShowForm(false);
      setUserQuestion((prevQuestion) => {
        prevQuestion.push({
          user: userName,
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
    <>
      {showForm && (
        <form onSubmit={onFormSubmit} className={styles.contactSection}>
          <span className={styles.spanText}>
            Masz pytania?<br></br>Zostaw nam wiadomość.
          </span>
          <label htmlFor="email">Twój adres e-mail</label>
          <input
            placeholder={inputError}
            onChange={(event) => setUserName(event.target.value)}
            className={styles.inputStyles}
            id="email"
            type="text"
            name="email"
            value={userName}
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
      )}
      {!showForm && (
        <div className={`${styles.contactSection} ${styles.thankYouMessege}`}>
          <span>
            Dziękujemy.<br></br>Twoja wiadomość została wysłana. Odpowiedź
            prześlemy na:
            <strong> {userName}</strong>
          </span>
          <Button
            onClick={() => {
              setShowForm(true);
              setUserName("");
              setMessage("");
            }}
          >
            Wyślij nową wiadomość
          </Button>
        </div>
      )}

      {!showForm && (
        <Button onClick={() => setRenderQuestions(false)}>
          Zobacz pytania
        </Button>
      )}

      {!renderQuestions &&
        userQuestion.map((question) => (
          <div key={question.key}>
            <h2>Adres e-mail: {question.user}</h2>
            <span>Wiadomość: {question.text}</span>
            <br />
          </div>
        ))}
    </>
  );
}
