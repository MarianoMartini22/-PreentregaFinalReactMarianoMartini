import CartWidget from "../CartWidget";
import './NavBar.css';
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logox128.png';
import { isMobile } from 'react-device-detect';


const NavBar = () => {
    const esTelefono = isMobile;
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to={'/'} className={'navbar-brand'}>
                    <img alt="logo" src={logo} />
                    <span className="tituloLogo">Cursos Pepito</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    {
                        (!esTelefono) ? <CartWidget goTo=""/> : <CartWidget goTo="/checkout" />
                    }
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
