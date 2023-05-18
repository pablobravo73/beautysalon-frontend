import React from 'react';

const Card = ({ name, lastname, appointmentType, appointmentTime }) => {
    return (
        <div className="card">
            <img src="./img/user.png" alt="Imagen de la cita" className="card-image" />
            <div className="card-body">
                <div className="card-content">
                    <h3 className="card-name">{name} {lastname}</h3>
                    <p className="card-appointment">{appointmentType}</p>
                    <p className="card-time">{appointmentTime}</p>
                </div>
            </div>
        </div>
    );
};

const AppointmentsList = () => {
    const appointments = [
        { name: 'John', lastname: 'Doe', appointmentType: 'Haircut', appointmentTime: '10:00 AM' },
        { name: 'Jane', lastname: 'Smith', appointmentType: 'Manicure', appointmentTime: '2:30 PM' },
        // ...otros datos de citas
    ];

    return (
        <div className="card-container">
            {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                    <Card
                        key={index}
                        name={appointment.name}
                        lastname={appointment.lastname}
                        appointmentType={appointment.appointmentType}
                        appointmentTime={appointment.appointmentTime}
                    />
                ))
            ) : (
                <h2>No hay citas agendadas</h2>
            )}
        </div>
    );
};

export default AppointmentsList;
