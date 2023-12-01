import { useState } from "react";
import styles from "./App.module.css";
import { Button } from "./components/Button";
import { AboutUs } from "./components/AboutUs";
import { ContactSection } from "./components/ContactSection";
import { Services } from "./components/Services";
import { Other } from "./components/Other";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [numberOfTrust, setNumberOfTrust] = useState(2136);
  function trustClick() {
    setNumberOfTrust((prevNumber) => prevNumber + 1);
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
          <Button
            onClick={() => {
              setActiveSection(1);
            }}
          >
            Oferta
          </Button>
          <Button
            onClick={() => {
              setActiveSection(2);
            }}
          >
            Skontaktuj się z nami
          </Button>
          <Button
            onClick={() => {
              setActiveSection(3);
            }}
          >
            O nas
          </Button>
          <Button
            onClick={() => {
              setActiveSection(4);
            }}
          >
            Inne
          </Button>
        </div>
        {activeSection === 1 && <Services />}
        {activeSection === 2 && <ContactSection />}
        {activeSection === 3 && (
          <AboutUs numberOfTrust={numberOfTrust} trustClick={trustClick} />
        )}
        {activeSection === 4 && <Other />}
      </div>
    </>
  );
}

export default App;
