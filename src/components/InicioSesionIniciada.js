import React from "react";
import CardList from './body/CardList';
import Header from './header/HeaderCredenciales';
import Footer from './footer/Footer';
import Carousel from './carrusel/Carrusel';
import Credencial from './credencial/Credencial';

function App() {
    return (
      <div className="App">
        <Credencial />
        <Header />
        <Carousel />        
        <CardList />
        <Footer />
      </div>
    );
  }
  export default App;