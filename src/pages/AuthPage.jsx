import { useState, useEffect } from "react";
import ToggleBar from "../components/auth/toggleBar/index.jsx";
import LoginForm from "../components/auth/LoginForm/index.jsx";
import RegisterForm from "../components/auth/RegisterForm/index.jsx";
import styles from "./styles/authPage.module.css";
import img1 from "../../src/assets/chamadaCadastro.png";
import img2 from "../../src/assets/chamadaCadastro1.png";

export default function AuthPage() {
  const [selectedOption, setSelectedOption] = useState("login");
  const arrayImagens = [
    img1,
    img2
  ]

  // Renderiza imagem de acordo com o tempo logado de forma aleatoria e muda a cada 30 segundos
  const [imgAleatoria, setImgAleatoria] = useState(arrayImagens[Math.floor(Math.random() * arrayImagens.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgAleatoria(arrayImagens[Math.floor(Math.random() * arrayImagens.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.authContainer}>
      <div className={styles.leftPanel}>
        <img src={imgAleatoria} alt="" />
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
