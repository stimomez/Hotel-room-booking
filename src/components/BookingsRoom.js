import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRoomsThunk, setBookingThunk } from '../store/slices/booking/thunks';
import CheckInOut from './CheckInOut';
import '../styles/bookingsRoom.css';

const BookingsRoom = () => {
  const { id } = useParams();

  const [userType, setUserType] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [data, setData] = useState({
    id,
    identificationCardNumber: '',
    name: '',
    lastName: '',
    telephone: '',
  });
  const [bookingId, setBookingId] = useState(0);
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [bookingNumber, setBookingNumber] = useState(0);
  const [counterS, setCounterS] = useState(10);
  const [isBooking, setIsBooking] = useState(false);
  const dispatch = useDispatch();
  const submit = e => {
    e.preventDefault();
    dispatch(setBookingThunk(data)).then(res => {
      setBookingNumber(res.data.newBooking.id);
      setIsBooking(true);
      clock();
      reset();
      dispatch(getRoomsThunk());
    });
  };

  const reset = () => {
    data.id = '';
    data.identificationCardNumber = '';
    data.name = '';
    data.lastName = '';
    data.telephone = '';
    setBookingId(0);
  };

  const clock = () => {
    setInterval(() => {
      setCounterS(s => s - 1);
    }, 1000);
  };
  useEffect(() => {
    if (counterS < 1) {
      setIsBooking(false);
    }
  }, [counterS]);
  return (
    <div className="bookings-room">
      <div className="booking-room-title">
        <h3>reservas</h3>
      </div>
      <div className="bookings-room-type">
        <button
          onClick={() => {
            setIsNewUser(true);
            setUserType(true);
          }}
          className="bookings-room-type-button"
        >
          Usuario registrado
        </button>
        <button
          onClick={() => {
            setIsNewUser(false);
            setUserType(true);
          }}
          className="bookings-room-type-button"
        >
          Nuevo usuario
        </button>
      </div>
      {userType && (
        <div className="bookings-room-form visible">
          {isNewUser ? (
            <form onSubmit={submit}>
              <div className="bookings-room-input">
                <label htmlFor="ni">Numero Identificación</label> <br />
                <input
                  type="number"
                  id="ni"
                  required
                  placeholder="1142425"
                  value={data.identificationCardNumber}
                  onChange={e =>
                    setData({
                      ...data,
                      identificationCardNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="bookings-room-input">
                <button>aceptar</button>
              </div>
            </form>
          ) : (
            <form onSubmit={submit}>
              <div className="bookings-room-input">
                <label htmlFor="ni">Numero Identificación</label>
                <br />

                <input
                  type="number"
                  id="ni"
                  required
                  placeholder="1142425"
                  value={data.identificationCardNumber}
                  onChange={e =>
                    setData({
                      ...data,
                      identificationCardNumber: e.target.value,
                    })
                  }
                />
              </div>

              <div className="bookings-room-input">
                <label htmlFor="name">Nombre</label>
                <br />
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John"
                  value={data.name}
                  onChange={e => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="bookings-room-input">
                <label htmlFor="lastName">Apellido</label>
                <br />
                <input
                  type="text"
                  id="lastName"
                  required
                  placeholder="Doe"
                  value={data.lastName}
                  onChange={e => setData({ ...data, lastName: e.target.value })}
                />
              </div>
              <div className="bookings-room-input">
                <label htmlFor="cel">Telefono</label>
                <br />
                <input
                  type="number"
                  id="cel"
                  required
                  placeholder="3007771947"
                  value={data.telephone}
                  onChange={e =>
                    setData({ ...data, telephone: e.target.value })
                  }
                />
              </div>
              <div className="bookings-room-input">
                <button>aceptar</button>
              </div>
            </form>
          )}
          {isBooking && (
            <div>
              <p>Por favor toma nota del codigo de reserva </p>
              <h3>{bookingNumber}</h3>
              <p>Se cierra en:{counterS}</p>
            </div>
          )}
          <h3 className="check-in-title">Check-In Check-Out</h3>
          <form onSubmit={submit}>
            <div className="bookings-room-input">
              <input
                type="number"
                placeholder="Numero de  reserva"
                required
                value={bookingId}
                onChange={e => setBookingId(e.target.value)}
              />
            </div>
            <div className=" bookings-room-input">
              <button
                type="button"
                disabled={bookingId < 1}
                onClick={() => {
                  setIsCheckIn(!isCheckIn);
                }}
              >
                {isCheckIn ? 'cerrar' : 'ir'}
              </button>
            </div>
          </form>
        </div>
      )}
      {isCheckIn && <CheckInOut id={bookingId} />}
    </div>
  );
};

export default BookingsRoom;
