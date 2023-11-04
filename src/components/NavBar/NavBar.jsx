import React from 'react';
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavGroup">
            <div className="NavBrand">
                <Link to={'/'}>
                    <img src="../media/logo-inksumos.png" alt="logo Inksumos" width={200} height={80}/>
                </Link>
            </div>
            <div className="NavButtons">
                <NavLink to="categorias/celulares" className="NavItem hover:bg-cyan-300 rounded">Celulares</NavLink>
                <NavLink to="categorias/tablets" className="NavItem  hover:bg-cyan-300 rounded">Tablets</NavLink>
                <NavLink to="categorias/informatica" className="NavItem  hover:bg-cyan-300 rounded">Informatica</NavLink>
                <NavLink to="categorias/auriculares" className="NavItem  hover:bg-cyan-300 rounded">Auriculares</NavLink>
            </div>
            <div className="NavRight">
                <CartWidget/> 
            </div>
        </nav>
    )
}

export default NavBar;