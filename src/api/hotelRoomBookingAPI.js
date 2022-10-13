import axios from "axios";

export const bookingRoomAPI = axios.create({
  baseURL: 'https://hotel-room-bookings.herokuapp.com/api/v1',
}); 