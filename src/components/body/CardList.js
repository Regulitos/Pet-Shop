import React, { useState } from 'react';
import Cards from './Cards';
import data from './data';
import './cardList.css';

function CardList() {
    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item]);
    };

    // Función para calcular el total del carrito
    const calcularTotal = () => {
        let total = 0;
        carrito.forEach(item => {
            // Reemplazar los caracteres especiales antes de convertir el precio en un número
            console.log(item.precio);
            const precioNumerico = parseInt(item.precio.replace(/[$.]/g, ''));
            total += precioNumerico;
            console.log(precioNumerico);
        });
        return total;
    };

    const cards = data.map(items => {
        return (
            <Cards key={items.id} items={items} agregarAlCarrito={agregarAlCarrito} />
        );
    });

    return (
        <div>
            <div className='divCards'>
                {cards}
            </div>
            <div className="button-container">
                <button onClick={() => setCarrito([])}>Limpiar Carrito</button>
            </div>
            <p>Total del carrito: ${calcularTotal().toFixed(0)}</p>
        </div>
    );
}

export default CardList;
