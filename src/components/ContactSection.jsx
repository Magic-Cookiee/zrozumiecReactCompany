import { useState } from "react";
import { Button } from "./Button";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const [customerName, setCustomerName] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState("");
  function formValidation(event) {
    event.preventDefault();
    if (!message || !customerName) {
      setInputError("Pole nie może być puste");
    } else if (!customerName.includes("@") || !customerName.includes(".")) {
      setEmailError("Sprawdź adres email");
    } else {
      setShowForm(false);
      setInputError("");
      setEmailError("");
    }
  }

  return (
    <>
      {showForm && (
        <form className={styles.contactSection}>
          <span className={styles.spanText}>
            Masz pytania?<br></br>Zostaw nam wiadomość.
          </span>
          <label htmlFor="email">Twój adres e-mail</label>
          <input
            placeholder={inputError}
            onChange={(event) => setCustomerName(event.target.value)}
            className={styles.inputStyles}
            required
            type="email"
            id="email"
            name="email"
            value={customerName}
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
          <Button type="submit" onClick={formValidation}>
            Wyślij wiadomość
          </Button>
        </form>
      )}
      {!showForm && (
        <div className={`${styles.contactSection} ${styles.thankYouMessege}`}>
          <span>
            Dziękujemy.<br></br>Twoja wiadomość została wysłana. Odpowiedź
            prześlemy na:
            <strong> {customerName}</strong>
          </span>
          <Button
            onClick={() => {
              setShowForm(true);
              setCustomerName("");
              setMessage("");
            }}
          >
            Wyślij nową wiadomość
          </Button>
        </div>
      )}
    </>
  );
}
