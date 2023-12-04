import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./AboutUs.module.css";

export function AboutUs({ numberOfTrust, trustClick }) {
  const [showButton, setShowButton] = useState(true);

  return (
    <div className={styles.aboutUs}>
      <h2 className={styles.subheading}>Super firma.</h2>
      <span>Murarz tynakarz akrobata. Gniazdko też podłączy.</span>
      <h3>Zaufało nam już {numberOfTrust} osób.</h3>
      {showButton ? (
        <Button
          onClick={() => {
            trustClick();
            setShowButton(false);
          }}
        >
          Zaufaj nam i Ty!
        </Button>
      ) : (
        <span
          className={styles.aboutUsDescription}
        >{`Dziękujemy za zaufanie <3`}</span>
      )}
    </div>
  );
}
