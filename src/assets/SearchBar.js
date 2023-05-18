import React from 'react';

const SearchBar = () => {
    return (
        <div className="content-header">
            <h2>Buscar citas</h2>
            <div className="search-bar">
                <label htmlFor="search-category">Categoría:</label>
                <select id="search-category" name="search-category">
                    <option value="name">Nombre</option>
                    <option value="lastname">Apellido</option>
                    <option value="phone">Teléfono</option>
                    <option value="email">Email</option>
                    <option value="appointmentType">Tipo de cita</option>
                    <option value="appointmentDate">Fecha de la cita</option>
                    <option value="appointmentTime">Hora de la cita</option>
                </select>

                <label htmlFor="search-keyword">Palabra clave:</label>
                <input type="search" id="search-keyword" name="search-keyword" />

                <button id="search-button">Buscar</button>
            </div>
        </div>
    );
};

export default SearchBar;
