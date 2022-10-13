import { bookingRoomAPI } from '../../../api/hotelRoomBookingAPI';
import { setRooms, startLoanding } from './bookingSlice';

export const getRoomsThunk = () => {
  return async dispatch => {
    dispatch(startLoanding());

    const { data } = await bookingRoomAPI.get(`/room`);

    dispatch(setRooms({ rooms: data.rooms }));
  };
};

export const setBookingThunk = dataUser => {
  const registeredUser = {};
  registeredUser.identificationCardNumber = dataUser.identificationCardNumber;

  return async dispatch => {
    dispatch(startLoanding());
    let res;
    dataUser.name !== ''
      ? (res = await bookingRoomAPI.post(
          `/room/bookings/${dataUser.id}`,
          dataUser
        ))
      : (res = await bookingRoomAPI.post(
          `/room/bookings/${dataUser.id}`,
          registeredUser
        ));
    return res;
    // dispatch(setBookings({}));
  };
};

export const checkInThunk = id => {
  return async dispatch => {
    dispatch(startLoanding());
    const res = await bookingRoomAPI.patch(`/room/bookings/check-in/${id}`);
    return res;
    // dispatch(setBookings({}));
  };
};

export const checkOutThunk = id => {
  return async dispatch => {
    dispatch(startLoanding());
    const res = await bookingRoomAPI.patch(`/room/bookings/check-out/${id}`);
    return res;
    // dispatch(setBookings({}));
  };
};
