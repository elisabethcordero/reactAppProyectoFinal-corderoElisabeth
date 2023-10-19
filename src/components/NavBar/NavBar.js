import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavGroup">
            <div className="NavBrand">
                <Link to={'/'}>
                    <img src="../media/logo-inksumos.png" alt="logo Inksumos" width={240} height={100}/>
                </Link>
            </div>
            <div className="NavButtons">
                <NavLink to="categorias/celulares" className="NavItem">Celulares</NavLink>
                <NavLink to="categorias/tablets" className="NavItem">Tablets</NavLink>
            </div>
            <div className="NavRight">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;