import { useState } from "react";
import ToggleBar from "../components/auth/toggleBar/index.jsx";
import LoginForm from "../components/auth/LoginForm/index.jsx";
import RegisterForm from "../components/auth/RegisterForm/index.jsx";
import styles from "./styles/authPage.module.css";


export default function AuthPage() {
  const [selectedOption, setSelectedOption] = useState("login");

  return (
    <div className={styles.authContainer}>
      <div className={styles.leftPanel}>
        <div>Teste caralho</div>
      </div>

      <div className={styles.rightPanel}>
        <ToggleBar
          option1="Criar Conta"
          option2="Login"
          onToggle={(option) => setSelectedOption(option)}
        />
        {selectedOption === "Criar Conta" ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
}
