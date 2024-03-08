import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" exact/>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ProfilePage />} path="/me" />
        <Route element={<RegisterPage />} path="/register" />

        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
