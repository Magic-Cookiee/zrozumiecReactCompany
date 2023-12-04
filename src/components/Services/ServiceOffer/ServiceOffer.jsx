import { useState } from "react";

import styles from "./ServiceOffer.module.css";
import { Button } from "../../Button/Button";
export function ServiceOffer({
  imgSrc,
  description,
  icoAuthorHref,
  icoAuthorText,
}) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <img
        className={`${styles.image} ${showDescription ? styles.zoomed : ""}`}
        src={imgSrc}
        alt="tools icon"
      />
      <a href={icoAuthorHref}>{icoAuthorText}</a>
      {showDescription && <span>{description}</span>}
      <Button onClick={() => setShowDescription((prevState) => !prevState)}>
        {!showDescription ? "Zobacz szczegóły" : "Schowaj szczegóły"}
      </Button>
    </>
  );
}
