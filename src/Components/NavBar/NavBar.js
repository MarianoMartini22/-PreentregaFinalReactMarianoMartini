import CartWidget from "../CartWidget";
import './NavBar.css';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <link to='/'>
                <h3>Ecommerce</h3>
                </link>
            <div className="Categories">
                <NavLink to={'/category/Curso desarrollo Web'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Curso Desarrollo Web</NavLink>
                <NavLink to={'/category/Curso Javascript'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Curso Javascript</NavLink>
                <NavLink to={'/category/Curso C++'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Curso C++ Web</NavLink>
                <NavLink to={'/category/Curso Phyton'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Curso Phyton</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};
export default NavBar