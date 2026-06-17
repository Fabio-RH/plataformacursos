
import styles from './loginForm.module.css';

export default function LoginForm() {
    return (
        <div className={styles.moldura}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Bem-vindo de volta</h1>
                    <p className={styles.subtitle}>
                        Entre com suas credenciais para acessar sua conta.
                    </p>
                </div>

                <div className={styles.form}>
                    <div className={styles.field}>
                        <label className={styles.label}>E-MAIL</label>
                        <input
                            type="email"
                            placeholder="nome@exemplo.com"
                            className={styles.input}
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
                        />
                    </div>

                    <div className={styles.remember}>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Lembrar de mim</label>
                    </div>

                    <button className={styles.submit}>Entrar na plataforma</button>
                </div>

                <div className={styles.divider}>
                    <span>OU CONTINUE COM</span>
                </div>

                <div className={styles.social}>
                    <button className={styles.socialButton}>Google</button>
                    <button className={styles.socialButton}>LinkedIn</button>
                </div>

                <div className={styles.footer}>
                    <span>Não tem uma conta? </span>
                    <a href="#">Crie sua conta gratuitamente</a>
                </div>
            </div>
</div>
    );
}



