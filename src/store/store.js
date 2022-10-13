import { configureStore } from '@reduxjs/toolkit';
import { bookingSlice } from './slices/booking';

export const store = configureStore({
  reducer: {
    hotel: bookingSlice.reducer,
  },
});
