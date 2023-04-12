import CartWidget from "../CartWidget";
import React, { useState } from 'react';

const NavBar = () => {
    return (
        <nav className="navBar">
            <h3>Cursos Pepito Online</h3>
            <div>
            <button>Curso de Desarrollo Web</button>
            <button>Curso de JavaScript</button>
            <button>Curso de Phyton</button>
            <button>Curso de C++</button>   
            <CartWidget />
            </div>
        </nav>
    );
};
export default NavBar