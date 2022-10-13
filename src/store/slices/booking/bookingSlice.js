import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
  rooms: [],
  isLoanding: false,
};
export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    startLoanding: state => {
      state.isLoanding = true;
    },
    setRooms: (state, action) => {
      state.isLoanding = false;
      state.rooms = action.payload.rooms;
    },

    setBookings: (state, action) => {
      // console.log(action);
      state.bookings = action.payload.rooms;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoanding, setBookings, setRooms } = bookingSlice.actions;
