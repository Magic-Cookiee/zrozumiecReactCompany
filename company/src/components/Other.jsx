import { useState } from "react";
import { Button } from "./Button";
import styles from "./Other.module.css";

export function Other() {
  const [dogImg, setDogImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessege, setLoadingMessege] = useState();
  function getRandomDogImg() {
    setLoadingMessege("Ładowanie");
    setIsLoading(true);
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((res) => {
        setDogImg(res.url);
        setIsLoading(false);
      });
  }
  return (
    <>
      <span className={styles.description}>
        My kochamy pieski! Kliknij w przycisk poniżej, aby pobrać zdjęcie
        losowego pieska.
      </span>
      <Button onClick={getRandomDogImg}>Pokaż pieska</Button>
      {isLoading && <p>{loadingMessege}</p>}
      {dogImg && <img src={dogImg} alt="losowe zdjęcie pieska" />}
    </>
  );
}
