import CartWidget from "../CartWidget";
import './NavBar.css';
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logox128.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink to={'/'} className={'navbar-brand'}>
                        <img alt="logo" src={logo} />
                        <span className="tituloLogo">Cursos Pepito</span>
                    </NavLink>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center justify-content-center w-100">
                        <li className="nav-item">
                            <NavLink to={'/category/1'} className={'nav-link'}>
                                Programación
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/category/2'} className={'nav-link'}>Finanzas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/category/3'} className={'nav-link'}>Visuales</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};
export default NavBar