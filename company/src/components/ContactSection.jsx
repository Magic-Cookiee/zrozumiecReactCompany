import { useState } from "react";
import { Button } from "./Button";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const [customerName, setCustomerName] = useState("");
  const [showForm, setShowForm] = useState(true);
  function onSubmit(event) {
    event.preventDefault();
    setShowForm(false);
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
            onChange={(event) => setCustomerName(event.target.value)}
            className={styles.inputStyles}
            type="email"
            id="email"
            name="email"
            value={customerName}
          ></input>
          <label htmlFor="text">Twoja wiadomość</label>
          <textarea
            className={styles.inputStyles}
            type="text"
            id="text"
            name="text"
            style={{ height: "140px" }}
          ></textarea>
          <Button
            type="submit"
            disabled={customerName === ""}
            onClick={onSubmit}
          >
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
            }}
          >
            Wyślij nową wiadomość
          </Button>
        </div>
      )}
    </>
  );
}
