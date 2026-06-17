import styles from './loginForm.module.css';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function LoginForm() {
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        const savedEmail = localStorage.getItem("rememberEmail");
        if (savedEmail) {
            setValue("email", savedEmail);   // pré-preenche o campo
            setValue("rememberMe", true);    // marca o checkbox
        }
    }, [setValue]);

    const onSubmit = (data) => {
        console.log("Dados do formulário:", data);

        if (data.rememberMe) {
            localStorage.setItem("rememberEmail", data.email);
        } else {
            localStorage.removeItem("rememberEmail");
        }

        // Aqui é navegar para o dashboard
        // navigate('/dashboard');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.header}>
                <h1 className={styles.title}>Bem-vindo de volta</h1>
                <p className={styles.subtitle}>
                    Insira seus dados para acessar a plataforma.
                </p>
            </div>
            <div className={styles.field}>
                <label className={styles.label}>E-MAIL</label>
                <input
                    type="email"
                    placeholder="nome@exemplo.com"
                    className={styles.input}
                    {...register("email")}
                />
            </div>

            <div className={styles.field}>
                <div className={styles.passwordHeader}>
                    <label className={styles.label}>SENHA</label>
                    <span className={styles.forgot}>Esqueceu a senha?</span>
                </div>
                <input
                    type="password"
                    placeholder="••••••••"
                    className={styles.input}
                    {...register("password")}
                />
            </div>

            <div className={styles.remember}>
                <input type="checkbox" id="remember" {...register("rememberMe")} />
                <label htmlFor="remember">Lembrar de mim</label>
            </div>

            <button type="submit" className={styles.submit}>
                Entrar na plataforma
            </button>

        </form>
    );
}
