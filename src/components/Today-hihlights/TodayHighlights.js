import Sunrise from '../../picture/sunrise.png';
import Sunset from '../../picture/sunset.png';
import Humidity from '../../picture/drop.png';
import Ultraviolet from '../../picture/ultraviolet.png';
import Wind from '../../picture/wind.png';
import React from 'react';
import { GetTime } from '../Time-Creator/Time';
import { useTranslation } from 'react-i18next';
import DaulyInfo from './DaulyInfo';
const TodayHighlights = () => {
  const { t } = useTranslation();

  function WeatherInfoMain() {
    switch ('todayInfo.current.weather[0].main') {
      case 'Clear':
        return 'Nice';
      case 'Clouds':
        return 'Good';
      case 'Rain':
        return 'Good';
      case 'Snow':
        return 'Bad';
      case 'Thunderstorm':
        return 'Bad';
      case 'Smoke':
        return 'Bad';
      case 'Mint':
        return 'Bad';
      case 'Haze':
        return 'Bad';
      case 'Fog':
        return 'Bad';

      default:
        return 'Good';
    }
  }
  let rndId = 1;
  const hihgLights = [
    {
      id: rndId++,
      title: 'Ulttraviolet UI index',
      infoIcon: Ultraviolet,
      mainHigh: Math.round(2546 + 6) + '%',
      dividing: <div className="dividing"></div>,
      dividingP: <br />,
    },
    {
      id: rndId++,
      title: 'Sunrise',
      infoIcon: Sunrise,
      mainHigh: GetTime(1565465),
      dividing: <div className="dividing"></div>,
      dividingP: <br />,
    },
    {
      id: rndId++,
      title: 'Sunset',
      infoIcon: Sunset,
      mainHigh: GetTime(1566546546),
      dividing: <div className="dividing"></div>,
      dividingP: <br />,
    },
    {
      id: rndId++,
      title: 'Wind',
      infoIcon: Wind,
      mainHigh: Math.round(156465) + ' ' + t('km/h'),
      dividing: <div className="dividing"></div>,
      dividingP: <br />,
    },
    {
      id: rndId++,
      title: 'Humidity',
      infoIcon: Humidity,
      mainHigh: 546565 + '%',
    },
  ];
  return (
    <div className="container">
      <div className="hihglight_info">
        <h3 className="weekly_header">{t('TodayHighlights')}</h3>
        <div className="rows">
          <div className="high_box">
            <DaulyInfo hihgLights={hihgLights} />
          </div>

          <div className="high_box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99419.97853436673!2d65.72175761622054!3d38.858233585301384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea63944a8e4c1%3A0x694369ac2037509d!2z0JrQsNGA0YjQuA!5e0!3m2!1sru!2s!4v1633357204114!5m2!1sru!2s"
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TodayHighlights;
