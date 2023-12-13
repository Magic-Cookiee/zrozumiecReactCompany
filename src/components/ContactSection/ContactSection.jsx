import { useState, useContext } from "react";
import { Form } from "./Form";
import { ThankYouMessage } from "./ThankYouMessage";
import { RenderQuestionsContext } from "../../context/RenderQuestionsContext";

export function ContactSection() {
  const [showForm, setShowForm] = useState(true);

  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userQuestion, setUserQuestion] = useContext(RenderQuestionsContext);

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
        </>
      )}
    </>
  );
}
