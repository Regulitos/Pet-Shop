import React from "react";
import CardList from './body/CardList';
import Header from './header/Header';
import Footer from './footer/Footer';
import Carousel from './carrusel/Carrusel';

function App() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <CardList />
        <Footer />
      </div>
    );
  }
  export default App;