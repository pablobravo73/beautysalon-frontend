import React from 'react';
import homeImage from '../assets/img/home.png';
import scheduleImage from '../assets/img/schedule.png';
import calendarImage from '../assets/img/calendar.png';
import invoiceImage from '../assets/img/invoice.png';
import inventoryImage from '../assets/img/inventory.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-header">
                <h2>Salón de Belleza</h2>
            </div>
            <div className="nav-body">
                <ul>
                    <li>
                        <img src={homeImage} alt="Home" />
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <img src={scheduleImage} alt="Agendar Citas" />
                        <a href="#">Agendar Citas</a>
                    </li>
                    <li>
                        <img src={calendarImage} alt="Calendario" />
                        <a href="#">Calendario</a>
                    </li>
                    <li>
                        <img src={invoiceImage} alt="Ventas" />
                        <a href="#">Ventas</a>
                    </li>
                    <li>
                        <img src={inventoryImage} alt="Inventario" />
                        <a href="#">Inventario</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
