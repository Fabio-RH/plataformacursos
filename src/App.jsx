import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import AppRouter from "./components/routes/AppRouter";

function App() {
  return (
    <>
      <Header
        tag1="Personalidades"
        tag2="Cursos"
        tag3="Cadastro / Entrar"
      />

      <AppRouter />

      <Footer />
    </>
  );
}

export default App;