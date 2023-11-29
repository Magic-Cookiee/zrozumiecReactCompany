import { useState } from "react";
import { Button } from "./Button";
import styles from "./Other.module.css";

export function Other() {
  const [dogImg, setDogImg] = useState("");
  function getRandomDogImg() {
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((res) => setDogImg(res.url));
  }
  return (
    <>
      <span className={styles.description}>
        My kochamy pieski! Kliknij w przycisk poniżej, aby pobrać zdjęcie
        losowego pieska.
      </span>
      <Button onClick={getRandomDogImg}>Pokaż pieska</Button>
      {dogImg && <img src={dogImg} alt="losowe zdjęcie pieska" />}
    </>
  );
}
