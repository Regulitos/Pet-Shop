import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from './Layout';
import Inicio from './components/Inicio';
import Registro from './components/Registro';
import NotFound from './components/NotFound';
import IniciarSesion from './components/IniciarSesion';
import IniciarSesionIniciada from './components/InicioSesionIniciada';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Inicio />}/>
          <Route exact path='/registro' element={<Registro />}/>
          <Route exact path='/inicio-sesion' element={<IniciarSesion />}/>
          <Route exact path='/inicio' element={<IniciarSesionIniciada />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;