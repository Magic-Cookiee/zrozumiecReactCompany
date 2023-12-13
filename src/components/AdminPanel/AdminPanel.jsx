import { useState, useContext } from "react";
import { RenderQuestionsContext } from "../../context/RenderQuestionsContext";
import { Button } from "../Button/Button";
import { RenderQuestions } from "./RenderQuestions";
import styles from "./AdminPanel.module.css";

export function AdminPanel() {
  const [renderQuestions, setRenderQuestions] = useState(true);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [login, setLogin] = useState("Admin1");
  const [password, setPassword] = useState("Admin123");
  const answer = useContext(RenderQuestionsContext);

  function isAdminVlidation(event) {
    event.preventDefault();
    if (
      event.target[0].value === "Admin1" &&
      event.target[1].value === "Admin123"
    ) {
      setShowAdminPanel(true);
    } else {
      alert("Błędne dane logowania");
    }
  }

  return (
    <>
      {!showAdminPanel && (
        <form onSubmit={isAdminVlidation} className={styles.login_form}>
          <label htmlFor="login">Login</label>
          <input
            onChange={(event) => setLogin(event.target.value)}
            type="text"
            name="login"
            id="login"
            value={login}
          ></input>
          <label htmlFor="password">Hasło</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            id="password"
            value={password}
          ></input>
          <button type="submit">Zaloguj</button>
        </form>
      )}
      {showAdminPanel && (
        <>
          <h4>Panel Administracyjny</h4>
          <Button
            onClick={() => setRenderQuestions((prevBloean) => !prevBloean)}
          >
            {renderQuestions ? "Zobacz pytania" : "Ukryj pytania"}
          </Button>
          {!renderQuestions && <RenderQuestions answer={answer} />}
        </>
      )}
    </>
  );
}
