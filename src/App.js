import { useEffect } from 'react';
import { getRoomsThunk } from './store/slices/booking';
import { useDispatch } from 'react-redux';

import './App.css';
import Home from './components/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BookingsRoom from './components/BookingsRoom';
import Rooms from './components/Rooms';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomsThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings-room/:id" element={<BookingsRoom />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
