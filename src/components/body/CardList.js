import React, { useState } from 'react';
import Cards from './Cards';
import data from './data';
import './cardList.css';

function CardList() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item) => {
        const existente = carrito.find(producto => producto.id === item.id);

        if (existente) {
            const nuevoCarrito = carrito.map(producto =>
                producto.id === item.id ? { ...producto, cantidad: producto.cantidad + 1 } : producto
            );
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, { ...item, cantidad: 1 }]);
        }
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(item => item.id !== id);
        setCarrito(nuevoCarrito);
    };

    const actualizarCantidad = (id, cantidad) => {
        const nuevoCarrito = carrito.map(item =>
            item.id === id ? { ...item, cantidad: cantidad } : item
        );
        setCarrito(nuevoCarrito);
    };

    const calcularTotal = () => {
        let total = 0;
        carrito.forEach(item => {
            const precioNumerico = parseFloat(item.precio.replace(/[$.]/g, ''));
            total += precioNumerico * item.cantidad;
        });
        return total;
    };

    const cards = data.map(item => (
        <Cards key={item.id} items={item} agregarAlCarrito={agregarAlCarrito} />
    ));

    return (
        <div>
            <div className='divCards'>
                {cards}
            </div>
            {carrito.length > 0 && (
                <div>
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
                                    <input
                                        type="number"
                                        value={item.cantidad}
                                        onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value))}
                                        min="1"
                                    />
                                    <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p>Total del carrito: ${calcularTotal().toFixed(0)}</p>
                </div>
            )}
        </div>
    );
}

export default CardList;
