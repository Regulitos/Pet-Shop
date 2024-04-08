import Inicio from './components/Inicio';
import {Routes, Route, HashRouter} from "react-router-dom";
import Registro from './components/Registro';
import NotFound from './components/NotFound';
import IniciarSesion from './components/IniciarSesion';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Inicio />}/>
        <Route exact path='/registro' element={<Registro />}/>
        <Route exact path='/inicio-sesion' element={<IniciarSesion />}/>
        <Route exact path='*' element={<NotFound />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
