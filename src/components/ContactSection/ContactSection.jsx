import { useState } from "react";
import { Button } from "../Button/Button";
import { Form } from "./Form";
import { ThankYouMessage } from "./ThankYouMessage";
import { RenderQuestions } from "./RenderQuestions";
export function ContactSection() {
  const [showForm, setShowForm] = useState(true);
  const [renderQuestions, setRenderQuestions] = useState(true);
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userQuestion, setUserQuestion] = useState([]);
  return (
    <>
      {showForm && (
        <Form
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          message={message}
          setMessage={setMessage}
          setShowForm={setShowForm}
          userQuestion={userQuestion}
          setUserQuestion={setUserQuestion}
        />
      )}
      {!showForm && (
        <>
          <ThankYouMessage
            userEmail={userEmail}
            setShowForm={setShowForm}
            setUserEmail={setUserEmail}
            setMessage={setMessage}
          />
          <Button
            onClick={() => setRenderQuestions((prevBloean) => !prevBloean)}
          >
            {renderQuestions ? "Zobacz pytania" : "Ukryj pytania"}
          </Button>
        </>
      )}

      {!renderQuestions && <RenderQuestions userQuestion={userQuestion} />}
    </>
  );
}
