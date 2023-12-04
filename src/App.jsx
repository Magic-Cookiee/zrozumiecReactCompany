import { useState } from "react";
import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Services } from "./components/Services/Services";
import { Other } from "./components/Other/Other";
import { Admin } from "./components/Admin/Admin";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [numberOfTrust, setNumberOfTrust] = useState(2136);

  function trustClick() {
    setNumberOfTrust((prevNumber) => prevNumber + 1);
  }
  function getView(activeSection) {
    if (activeSection === "Services") return <Services />;
    if (activeSection === "ContactSection") return <ContactSection />;
    if (activeSection === "AboutUs")
      return <AboutUs numberOfTrust={numberOfTrust} trustClick={trustClick} />;
    if (activeSection === "Other") return <Other />;
    if (activeSection === "Admin") return <Admin />;
  }

  return (
    <>
      <div className={styles.container}>
        <img
          onClick={() => {
            setActiveSection(0);
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
        className={styles.span_admin}
        role="button"
        onClick={() => setActiveSection("Admin")}
      >
        Admin panel
      </span>
    </>
  );
}

export default App;
