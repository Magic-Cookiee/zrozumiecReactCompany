import styles from "./AdminPanel.module.css";

export function RenderQuestions({ answer }) {
  if (answer[0].length === 0) return <span>Brak nowych odpowiedzi</span>;
  return answer[0].map((question) => (
    <div key={question.key}>
      <h5>NR: {question.key}</h5>
      <h4>Adres e-mail: {question.user}</h4>
      <span className={styles.answer}>Wiadomość: {question.text}</span>
    </div>
  ));
}
