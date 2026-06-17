// RegisterForm.jsx
import styles from "./registerForm.module.css";
import { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nome:", name);
        console.log("E-mail:", email);
        console.log("Senha:", confirmPassword);
        // Se o Bruno pedir back-end... errrr
    };

    // funcao para confirmar se a senha está supimpa
    const handlePasswordConfimation = (input) => {
        if (input.target.value !== password) {
            console.log("Senhas diferentes")
        }
        setConfirmPassword(input.target.value)
    }


    return (
        <div className={styles.registerContainer}>

            <h1 className={styles.registerTitle}>
                Crie sua conta
            </h1>

            <form className={styles.registerForm}>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        NOME COMPLETO
                    </label>

                    <input
                        type="text"
                        placeholder="Ex: João Silva"
                        className={styles.formInput}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        E-MAIL
                    </label>

                    <input
                        type="email"
                        placeholder="seu@email.com"
                        className={styles.formInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.passwordRow}>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            SENHA
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            className={styles.formInput}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            CONFIRMAR
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            className={styles.formInput}
                            value={confirmPassword}
                            onChange={handlePasswordConfimation}
                        />
                    </div>

                </div>

                <button
                    className={styles.submitButton}
                    onClick={() => {
                        if (confirmPassword === password && name !== "" && email !== "" && password !== "" && password.length >= 6) {
                            handleSubmit
                        } else {
                            alert("Preencha os campos corretamente")
                            return
                        }
                    }}
                >
                    Criar Conta
                </button>

            </form>



        </div>
    );
}