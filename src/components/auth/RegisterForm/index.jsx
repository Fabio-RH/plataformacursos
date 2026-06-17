// RegisterForm.jsx
import styles from "./registerForm.module.css";
import { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nome:", name);
        console.log("E-mail:", email);
        console.log("Senha:", password);
        // Se o Bruno pedir back-end... errrr
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.newAccount}>NOVA CONTA</div>
                <div className={styles.title}>Crie sua conta</div>
            </div>

            <div className={styles.form}>
                <div className={styles.field}>
                    <label className={styles.label}>NOME COMPLETO</label>
                    <input
                        type="text"
                        placeholder="Ex: João Silva"
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>E-MAIL</label>
                    <input
                        type="email"
                        placeholder="seu@email.com"
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>SENHA</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>CONFIRMAR</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className={styles.input}
                    />
                </div>

                <button className={styles.submit}>Create Account</button>
            </div>

            <div className={styles.footer}>
                <span>Já possui conta? Faça login</span>
            </div>
        </div>
    );
}
