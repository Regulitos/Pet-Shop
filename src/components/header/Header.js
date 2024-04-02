import React from 'react'
import './header.css';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ContactsIcon from '@mui/icons-material/Contacts';
import SourceIcon from '@mui/icons-material/Source';
import HomeIcon from '@mui/icons-material/Home';
import ThreePIcon from '@mui/icons-material/ThreeP';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src='logo.png' className='logo' alt='logo' />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon />
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item" >
                                <ThreePIcon />
                                <a className="nav-link" href="#">Referencias</a>
                            </li>
                            <li className="nav-item">
                                <SourceIcon />
                                <a className="nav-link" href="#">Recursos</a>
                            </li>
                            <li className="nav-item">
                                <ContactsIcon />
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <Link to='/registro'>
                                <li className="nav-item">
                                    <PersonAddAlt1Icon />
                                    <a className="nav-link" href="#">Registrarse</a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <LoginIcon />
                                <a className="nav-link" href="#">Iniciar Sesion</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            < SearchIcon className='searchIcon' />
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header