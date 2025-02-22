
import React, {} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home'; // Importez Home comme composant par défaut
import Profil from './pages/Profil/Profil'; // Importez Profil comme composant par défaut
import Film from './pages/Film/Film'; // Importez Film comme composant par défaut
import Header from './components/Header/Header'; // Importez le Header comme composant par défaut
import Footer from './components/Footer/Footer'; // Importez le Header comme composant par défaut
import s from "./style.module.css"; // Importez les styles

const App = () => {

  return (
    <div>

      <Header />
      <div className={s.outlet_container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="profil" element={<Profil />} />
          <Route path="film/:movieId" element={<Film />} />
          <Route path="film/:id" element={<Film />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppWrapper;
