import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/home/HomePage";
import { RegistrationPage } from "./pages/registration/RegistrationPage";
import { LoginPage } from "./pages/login/LoginPage";
import { ContactsPage } from "./pages/contacts/ContactsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
