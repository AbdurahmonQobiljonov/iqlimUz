import React from 'react';
import Weather from '../../picture/weather.png';

const Footer = () => {
  return (
    <footer>
      <p>
        <a href="">Новости</a> | Сайт ведётся, <a href="">тут</a>
      </p>
      <h2>
        <img src={Weather} alt="" /> Iqlim.uz
      </h2>
    </footer>
  );
};

export default Footer;
