import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import CursoEspecifico from "./pages/CursoEspecifico";

function App() {
  return (
    <>
      <Header 
        tag1="Personalidades"
        tag2="Cursos"
        tag3="Cadastro / Entrar"
      />

      <CursoEspecifico/>

      <Footer />
    </>
  );
}

export default App;
