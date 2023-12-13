import { useState } from "react";
import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Services } from "./components/Services/Services";
import { Other } from "./components/Other/Other";
import { AdminPanel } from "./components/AdminPanel/AdminPanel";

import { RenderQuestionsContext } from "./context/RenderQuestionsContext";

function App() {
  const [numberOfTrust, setNumberOfTrust] = useState(2136);
  const [activeSection, setActiveSection] = useState(null);
  const [userQuestion, setUserQuestion] = useState([]);

  function trustClick() {
    setNumberOfTrust((prevNumber) => prevNumber + 1);
  }
  function getView(activeSection) {
    if (activeSection === "Services") return <Services />;
    if (activeSection === "ContactSection") return <ContactSection />;
    if (activeSection === "AboutUs")
      return <AboutUs numberOfTrust={numberOfTrust} trustClick={trustClick} />;
    if (activeSection === "Other") return <Other />;
    if (activeSection === "Admin") return <AdminPanel />;
  }

  return (
    <RenderQuestionsContext.Provider value={[userQuestion, setUserQuestion]}>
      <div className={styles.container}>
        <img
          onClick={() => {
            setActiveSection("home");
          }}
          src="./images/logo_transparent.png"
          alt=""
        />
        <h1 className={styles.heading}>Moja firma</h1>
        <div>
          <Button onClick={() => setActiveSection("Services")}>Oferta</Button>
          <Button onClick={() => setActiveSection("ContactSection")}>
            Skontaktuj się z nami
          </Button>
          <Button onClick={() => setActiveSection("AboutUs")}>O nas</Button>
          <Button onClick={() => setActiveSection("Other")}>Inne</Button>
        </div>
        {getView(activeSection)}
      </div>
      <span
        onClick={() => setActiveSection("Admin")}
        className={`${styles.textColor} ${styles.admin_button}`}
        role="button"
      >
        Panel administracyjny
      </span>
    </RenderQuestionsContext.Provider>
  );
}

export default App;
