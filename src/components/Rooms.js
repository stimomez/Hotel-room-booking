import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/rooms.css';
const Rooms = () => {
  const { rooms } = useSelector(state => state.hotel);
  const navigate = useNavigate();

  const booking = id => {
    navigate(`/bookings-room/${id}`);
  };
  return (
    <div className="rooms">
      <header className="rooms-title">
        <h3>habitaciones disponibles</h3>
      </header>
      <section>
        <ul className="rooms-ul">
          {rooms.map(room => (
            <li key={room.id}>
              <p className="rooms-ul-title">
                <strong> {room.name}</strong>
              </p>
              <div className="rooms-ul-items">
                <p className="rooms-ul-item">
                  codigo: <strong>{room.roomCode}</strong>
                </p>
                <p className="rooms-ul-item">
                  tipo: <strong> {room.name}</strong>
                </p>
                <p className="rooms-ul-item">
                  maximo de personas: <strong> {room.peopleAdmitted}</strong>
                </p>

                <p className="rooms-ul-item">
                  precio: <strong> ${room.price}</strong>
                </p>
                <p className="rooms-ul-item">
                  disponible hasta:
                  <br />
                  <strong>
                    {new Date(room.futureBooking).toLocaleDateString()}
                  </strong>
                </p>
              </div>

              <button
                className="booking-button"
                onClick={() => booking(room.id)}
              >
                reservar
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Rooms;
