import React, { useState } from 'react';
import Cards from './Cards';
import data from './data';
import './cardList.css';

function CardList() {
    const [carrito, setCarrito] = useState([]);
    
    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item]);
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    };

    const calcularTotal = () => {
        let total = 0;
        carrito.forEach(item => {
            const precioNumerico = parseInt(item.precio.replace(/[$.]/g, ''));
            total += precioNumerico;
        });
        return total;
    };

    const cards = data.map(items => (
        <Cards key={items.id} items={items} agregarAlCarrito={agregarAlCarrito} />
    ));

    return (
        <div>
            <div className='divCards'>
                {cards}
            </div>
            <div className="button-container">
                <button onClick={() => setCarrito([])}>Limpiar Carrito</button>
            </div>
            <div className='carrito'>
                {carrito.map(item => (
                    <div key={item.id} className='carrito-item'>
                        <img src={item.image} alt='logo' />
                        <div>
                            <h5>{item.specie}</h5>
                            <p>{item.description}</p>
                            <p className="precio">{item.precio}</p>
                            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
            <p>Total del carrito: ${calcularTotal().toFixed(0)}</p>
        </div>
    );
}

export default CardList;
