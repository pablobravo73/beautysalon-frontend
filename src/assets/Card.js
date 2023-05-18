import React from 'react';

import UserImage from '../assets/img/user.png';
const Card = ({ name, lastname, appointmentType, appointmentTime }) => {
    return (
        <div className="card">
            <img src={UserImage} alt="Imagen de la cita" className="card-image" />
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
        { name: 'Alice', lastname: 'Johnson', appointmentType: 'Massage', appointmentTime: '3:00 PM' },
        { name: 'Michael', lastname: 'Brown', appointmentType: 'Facial', appointmentTime: '11:30 AM' },
        { name: 'Emily', lastname: 'Wilson', appointmentType: 'Pedicure', appointmentTime: '1:45 PM' },
        { name: 'Daniel', lastname: 'Taylor', appointmentType: 'Haircut', appointmentTime: '4:15 PM' },
        { name: 'Olivia', lastname: 'Thomas', appointmentType: 'Manicure', appointmentTime: '9:30 AM' },
        { name: 'David', lastname: 'Anderson', appointmentType: 'Pedicure', appointmentTime: '12:00 PM' },
        { name: 'Sophia', lastname: 'Clark', appointmentType: 'Haircut', appointmentTime: '2:00 PM' },
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
