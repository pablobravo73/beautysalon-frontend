import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-header">
                <h2>Salón de Belleza</h2>
            </div>
            <div className="nav-body">
                <ul>
                    <li>
                        <img src="./img/home.png" alt="Home" />
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <img src="./img/schedule.png" alt="Agendar Citas" />
                        <a href="#" >Agendar Citas</a>
                    </li>
                    <li>
                        <img src="./img/calendar.png" alt="Calendario" />
                        <a href="#">Calendario</a>
                    </li>
                    <li>
                        <img src="./img/invoice.png" alt="Ventas"/>
                        <a href="#">Ventas</a>

                        <img src="./img/inventory.png" alt="Inventario"/>
                        <a href="#">Inventario</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
