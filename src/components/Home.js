import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="home-title">
        <h1>Hotel Authentic</h1>
      </header>
      <section className="home-menu">
        <div className="home-menu-item">
          <div className="home-menu-item-title">
            <h2>habitaciones disponibles</h2>
          </div>
          <div className="home-menu-main">
            <button
              className="home-menu-item-button"
              onClick={() => navigate('/rooms')}
            >
              ir
            </button>
          </div>
          <div className="home-menu-footer">
            <div className="home-menu-subfooter">
              <p className="home-menu-item-p">
                las mejores habitaciones, para tu descanso{' '}
                <span className="home-menu-item-span">&#160;</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
