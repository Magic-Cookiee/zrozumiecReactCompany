export function RenderQuestions({ userQuestion }) {
  return userQuestion.map((question) => (
    <div key={question.key}>
      <h2>Adres e-mail: {question.user}</h2>
      <span>Wiadomość: {question.text}</span>
    </div>
  ));
}
