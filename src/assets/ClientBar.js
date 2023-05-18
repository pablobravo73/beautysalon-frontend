import React from 'react';
import Card from "./Card";

const AppointmentsColumn = () => {
    return (
        <div className="appointments-column">
            <div className="appointments-header">
                <h2>Próximas Citas</h2>
                <div className="calendar">
                    <input type="date" id="findDate" name="date" className="findDate" />
                    <button id="submitDate">Buscar</button>
                </div>
            </div>
            <br />
            <div className="card-matrix">
                <div className="card-matrix-container">
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default AppointmentsColumn;
