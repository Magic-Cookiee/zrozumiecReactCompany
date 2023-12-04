import { Button } from "../Button/Button";
import styles from "./ContactSection.module.css";

export function ThankYouMessage({
  userEmail,
  setShowForm,
  setUserEmail,
  setMessage,
}) {
  return (
    <div className={`${styles.contactSection} ${styles.thankYouMessege}`}>
      <span>
        Dziękujemy.<br></br>Twoja wiadomość została wysłana. Odpowiedź prześlemy
        na:
        <strong> {userEmail}</strong>
      </span>
      <Button
        onClick={() => {
          setShowForm(true);
          setUserEmail("");
          setMessage("");
        }}
      >
        Wyślij nową wiadomość
      </Button>
    </div>
  );
}
