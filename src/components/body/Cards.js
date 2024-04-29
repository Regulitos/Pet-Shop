import React, { useState } from 'react';
import './card.css';
import TodayIcon from '@mui/icons-material/Today';

export default function Cards(props) {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleClick = () => {
        setShowConfirmation(true);
    };

    const handleConfirm = () => {
        props.agregarAlCarrito(props.items);
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    return (
        <div className='card2'>
            <img src={props.items.image} alt='logo'/>
            <div>
                <h5>{props.items.specie}</h5>
                <p>{props.items.description}</p>
                <p className="precio">{props.items.precio}</p>
                <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Comprar</button>
            </div>
            {showConfirmation && (
                <div className="overlay">
                    <div className="confirmation-box">
                        <p>¿Estás seguro que deseas agregar este ítem al carrito?</p>
                        <button onClick={handleConfirm}>Sí</button>
                        <button onClick={handleCancel}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}