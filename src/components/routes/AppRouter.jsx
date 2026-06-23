import { Routes, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import AuthPage from "../../pages/AuthPage";
import CursoEspecifico from "../../pages/CursoEspecifico";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/curso/:id" element={<CursoEspecifico />} />
    </Routes>
  );
}