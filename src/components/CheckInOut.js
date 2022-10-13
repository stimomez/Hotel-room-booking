import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  checkInThunk,
  checkOutThunk,
  getRoomsThunk,
} from '../store/slices/booking';
import '../styles/checkInOut.css';

const CheckInOut = ({ id }) => {
  const [isCheckInOk, setIsCheckInOk] = useState(false);
  const [isCheckOutOk, setIsCheckOutOk] = useState(false);
  const [checkInViuw, setCheckInViuw] = useState(true);
  const [checkOutViuw, setCheckOutViuw] = useState(true);
  const dispatch = useDispatch();
  const checkIn = () => {
    dispatch(checkInThunk(id))
      .then(res => {
        checkInClock();
        setIsCheckInOk(true);
      })
      .catch(er => {
        checkInClock();
        setIsCheckInOk(false);
      });
  };

  const checkOut = () => {
    dispatch(checkOutThunk(id))
      .then(res => {
        checkOutClock();
        setIsCheckOutOk(true);
        dispatch(getRoomsThunk());
      })
      .catch(er => {
        checkOutClock();
        setIsCheckOutOk(false);
      });
  };
  const checkInClock = () => {
    setCheckInViuw(false);
    setTimeout(() => {
      setCheckInViuw(true);
    }, 3000);
  };

  const checkOutClock = () => {
    setCheckOutViuw(false);
    setTimeout(() => {
      setCheckOutViuw(true);
    }, 3000);
  };

  return (
    <div className="check-inout">
      <strong>Numero de reserva:{id}</strong>

      <div className="check-inout-title">
        <h2>Check-In</h2>
        {checkInViuw && <button onClick={checkIn}>aceptar</button>}
      </div>

      {checkInViuw === false && (
        <div>
          {isCheckInOk ? (
            <p className="check-in-ok">correcto</p>
          ) : (
            <p className="check-in-er">error</p>
          )}
        </div>
      )}

      <div className="check-inout-title">
        <h2>Check-Out</h2>
        {checkOutViuw && <button onClick={checkOut}>aceptar</button>}
      </div>

      {checkOutViuw === false && (
        <div>
          {isCheckOutOk ? (
            <p className="check-in-ok">correcto</p>
          ) : (
            <p className="check-in-er">error</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckInOut;
